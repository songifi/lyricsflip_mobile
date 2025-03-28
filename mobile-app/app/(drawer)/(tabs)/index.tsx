import GameModeCard from "@/app/components/game/GameModeCard";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {
  Play,
  User,
  Users2,
  Trophy,
  Bell,
  Zap,
  Drum,
  Handshake,
  Target,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { RelativePathString, router } from "expo-router";
import WagerCreatedModal from "@/components/WagerCreated";

export default function index() {
  const gameModes = [
    {
      icon: <Zap size={18} color="white" />,

      title: "Quick Game",
      description:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgImage: require("@/assets/images/bg.png"),
      iconBgColor: "#9747FF",
      route: "../../../screens/quickGame/QuickGameForm",
    },
    {
      icon: <Drum size={18} color="white" />,
      title: "Wager (Single Player)",
      description:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgImage: require("@/assets/images/bg-1.png"),
      iconBgColor: "#3F8AB6",
      route: "../../../screens/wagerSinglePlayer/WagerSinglePlayerForm",
    },
    {
      icon: <Handshake size={18} color="white" />,
      title: "Wager (Multi Player)",
      description:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgImage: require("@/assets/images/bg-2.png"),
      iconBgColor: "#DF7A16",
      route: "",
    },
    {
      icon: <Target size={18} color="white" />,
      title: "Join a Challenge",
      description:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgImage: require("@/assets/images/bg-3.png"),
      iconBgColor: "#7D1D3F",
      route: "",
    },
  ];

  const wagerAmount = {
    crypto: 10000,
    fiat: 100,
    currency: "STRK",
    fiatCurrency: "USD",
  };

  const wagerChallenge = {
    inviteCode: "LF34567QW",
    gameMode: "Wager (Multi Player)",
    participants: 6,
    wagerAmount: {
      crypto: 10000,
      fiat: 100,
      currency: "STRK",
      fiatCurrency: "USD",
    },
    winAmount: {
      crypto: 60000,
      fiat: 800,
      currency: "STRK",
      fiatCurrency: "USD",
    },
    instruction:
      "A card displaying a lyric from a song will appear along with a list of possible answers. Your goal is to score the highest point amongst your challengers",
  };

  // const path = '/screens/quickGameForm/QuickGameForm' as RelativePathString;

  const [timeLeft, setTimeLeft] = useState(3540); // Start at 59 seconds
  const [wagerModal, setWagerModal] = useState(false);
  const [points, setPoints] = useState(500);
  const [modalVisible, setModalVisible] = useState(false);

  // const handleStartGame = () => {
  //   // Handle starting the game
  //   console.log("Starting game...");
  //   setModalVisible(false);
  // };

  const handleShareInvite = async () => {
    try {
      await Share.share({
        message: `Join my music quiz challenge! Use invite code: ${wagerChallenge.inviteCode}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome 👋</Text>
            <Text style={styles.username}>thetimileyin48</Text>
          </View>
          <View style={styles.bellContainer}>
            <Bell color="#08090A" size={18} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>CHOOSE YOUR PREFERRED GAME MODE</Text>

        {gameModes.map((mode, index) => (
          <ImageBackground
            key={index}
            source={mode.bgImage}
            style={styles.gameModeBackground}
          >
            <GameModeCard
              onPress={() => {
                if (mode.title === "Wager (Multi Player)") {
                  setWagerModal(true); // Show the modal for "Wager (Multi Player)"
                } else {
                  router.push(mode.route as RelativePathString); // Navigate for other game modes
                }
              }}
              icon={mode.icon}
              title={mode.title}
              description={mode.description}
              iconBgColor={mode.iconBgColor}
            />
          </ImageBackground>
        ))}
      </ScrollView>
      <WagerCreatedModal
        onPress={() => setWagerModal(true)}
        visible={wagerModal}
        onClose={() => setWagerModal(false)}
        inviteCode={wagerChallenge.inviteCode}
        gameMode={wagerChallenge.gameMode}
        participants={wagerChallenge.participants}
        wagerAmount={wagerChallenge.wagerAmount}
        winAmount={wagerChallenge.winAmount}
        instruction={wagerChallenge.instruction}
        // onStartGame={handleStartGame}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  bellContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    justifyContent: "center",
    alignItems: "center",
  },
  bell: {
    color: "#08090A",
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5A5B5C",
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark.textBold,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
  },
  gameModeBackground: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
});
