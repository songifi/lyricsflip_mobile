"use client";

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Fonts } from "@/constants/Fonts";
import { RefreshCcw } from "lucide-react-native";
import GameCard from "@/components/GameCard";
import GameModal from "@/components/GameModal";

const songs = [
  { title: "Pakurumo", artist: "Wizkid & Samklef" },
  { title: "Don't Let Me Down", artist: "Chainsmokers" },
  {
    title: "Blood on The Dance Floor",
    artist: "ODUMODUBLVCK, Bloody Civilian & Wale",
  },
  { title: "God's Plan", artist: "Drake" },
];

type Song = (typeof songs)[0];
type CardItem = { type: "card" };
type ListData = Song | CardItem;

export default function QuickGameMode() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3540); // Start at 59 seconds
  const [modal, setModal] = useState(false);
  const [points, setPoints] = useState(500);
  const [modalVisible, setModalVisible] = useState(false);
  const [allCorrect, setAllCorrect] = useState(true);

  const gameResult = {
    isWinner: true,
    prizeWon: {
      crypto: 12000,
      fiat: 120,
      currency: "STRK",
      fiatCurrency: "USD",
    },
    wagerAmount: {
      crypto: 10000,
      fiat: 100,
      currency: "STRK",
      fiatCurrency: "USD",
    },
    secondPlace: {
      name: "theXaxxo",
      points: 345,
    },
    thirdPlace: {
      name: "theXaxxo",
      points: 345,
    },
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOption = ({ item }: { item: Song }) => (
    <TouchableOpacity style={styles.optionButton}>
      <View>
        <Text
          style={[styles.optionTitle, { fontFamily: Fonts.Inter }]}
          onPress={() => setModal(true)}
        >
          {item.title}
        </Text>
        <Text style={[styles.optionArtist, { fontFamily: Fonts.Inter }]}>
          {item.artist}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#08090A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quick Game</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsItem}>
          <Text style={styles.statsTitle}>Time Left:</Text>
          <Text style={[styles.statsValue, { color: "#0AC660" }]}>
            {formatTime(timeLeft)}
          </Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsTitle}>Streak Count:</Text>
          <Text style={styles.statsValue}>10 🔥</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsTitle}>Scores:</Text>
          <Text style={styles.statsValue}>456</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <View style={styles.scrollableContent}>
        <FlatList
          data={[{ type: "card" as const }, ...songs] as ListData[]}
          renderItem={({ item }) => {
            if ("type" in item && item.type === "card") {
              return (
                <GameCard lyric="All I know is that when I dey cock, I hit and go All I know is that when I been shoot, I hit their own" />
              );
            }
            return renderOption({ item } as { item: Song });
          }}
          keyExtractor={(item, index) =>
            "type" in item ? "card" : index.toString()
          }
          contentContainerStyle={{
            gap: 8,
            marginTop: 20,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        <GameModal
          visible={modal}
          onClose={() => setModal(false)}
          points={points}
          isWinner={gameResult.isWinner}
          prizeWon={gameResult.prizeWon}
          wagerAmount={gameResult.wagerAmount}
          secondPlace={gameResult.secondPlace}
          thirdPlace={gameResult.thirdPlace}
          //   onShare={handleShare}
          //   onClaim={handleClaim}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollableContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Fonts.Inter,
    textAlign: "center",
  },
  placeholder: {
    width: 24, // Same width as back button for centering
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    gap: 20,
    width: "90%",
    margin: "auto",
  },
  statsTitle: {
    color: "#909090",
    fontSize: 12,
    fontFamily: Fonts.Inter,
    lineHeight: 18,
  },
  statsValue: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: Fonts.Inter,
    color: "#090909",
  },
  statsItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  scoreContainer: {
    flexDirection: "row",
    gap: 20,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: "600",
  },
  timeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  gameContainer: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: "#F9F5FF",
    borderColor: "#E0CCFF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: Fonts.Inter,
    lineHeight: 24,
    color: "#090909",
    marginBottom: 4,
  },
  optionArtist: {
    fontSize: 14,
    color: "#090909",
    fontFamily: Fonts.Inter,
    lineHeight: 18,
  },
  cardContainer: {
    width: "80%",
    margin: "auto",
    position: "relative",
  },
  cardBackground: {
    borderRadius: 10,
    overflow: "hidden",
    height: 380,
    width: "100%",
    margin: "auto",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 32,
    color: "#090909",
    textAlign: "center",
    fontFamily: Fonts.Inter,
    fontWeight: 600,
    marginTop: 20,
  },
  refeshButton: {
    position: "absolute",
    top: 35,
    right: 25,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5,
  },
  frameContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTextBottom: {
    fontSize: 14,
    lineHeight: 22,
    color: "#090909",
    textAlign: "center",
    fontFamily: Fonts.Inter,
    position: "absolute",
    bottom: 30,
  },
});
