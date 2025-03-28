import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router, useNavigation, RelativePathString } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import Dropdown from "@/app/components/form/Dropdown";
import Button from "@/app/components/form/Button";
import GameModal from "@/components/GameModal";
import WagerCreatedModal from "@/components/WagerCreated";

export default function WagerMultiPlayerForm() {
  const navigation = useNavigation();

  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedNumberOfPlayer, setSelectedNumberOfPlayer] = useState("");
  const [selectedWagerAmount, setSelectedWagerAmount] = useState("");
  const [wagerModal, setWagerModal] = useState(false);

  //   const gameResult = {
  //     isWinner: true,
  //     prizeWon: {
  //       crypto: 12000,
  //       fiat: 120,
  //       currency: "STRK",
  //       fiatCurrency: "USD",
  //     },
  //     wagerAmount: {
  //       crypto: 10000,
  //       fiat: 100,
  //       currency: "STRK",
  //       fiatCurrency: "USD",
  //     },
  //     secondPlace: {
  //       name: "theXaxxo",
  //       points: 345,
  //     },
  //     thirdPlace: {
  //       name: "theXaxxo",
  //       points: 345,
  //     },
  //   };

  //   const wagerChallenge = {
  //     visible: true,
  //     inviteCode: "LF34567QW",
  //     gameMode: "Wager (Multi Player)",
  //     participants: 6,
  //     crypto: 10000,
  //     fiat: 100,
  //     currency: "STRK",
  //     fiatCurrency: "USD",
  //   };

  const genreOptions = [
    { value: "rock", label: "Rock" },
    { value: "pop", label: "Pop" },
    { value: "hip-hop", label: "Hip Hop" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classical" },
    { value: "electronic", label: "Electronic" },
    { value: "r-and-b", label: "R&B" },
    { value: "country", label: "Country" },
    { value: "folk", label: "Folk" },
    { value: "metal", label: "Metal" },
    { value: "blues", label: "Blues" },
    { value: "reggae", label: "Reggae" },
  ];

  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "intermediate", label: "Intermediate" },
    { value: "hard", label: "Hard" },
  ];

  const durationOptions = [
    { value: "10min", label: "10 minutes" },
    { value: "20min", label: "20 minutes" },
    { value: "30min", label: "30 minutes" },
  ];

  const NumberOfPlayersOptions = [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const wagerAmountOptions = [
    { value: "500 STRK", label: "500 STARKS" },
    { value: "1000 STRK", label: "1500 STARKS" },
    { value: "1500 STRK", label: "2000 STARKS" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#08090A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Wager (Multi Player) </Text>
          <View style={styles.placeholder} />
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum,
        </Text>

        {/* Dropdowns */}
        <View style={styles.formSection}>
          <Dropdown
            title="Genre"
            options={genreOptions}
            value={selectedGenre}
            onValueChange={setSelectedGenre}
            placeholder="Select genre"
          />

          <Dropdown
            title="Difficulty Level"
            options={difficultyOptions}
            value={selectedDifficulty}
            onValueChange={setSelectedDifficulty}
            placeholder="Select difficulty"
          />

          <Dropdown
            title="Duration"
            options={durationOptions}
            value={selectedDuration}
            onValueChange={setSelectedDuration}
            placeholder="Select duration"
          />

          <Dropdown
            title="Number of Players"
            options={NumberOfPlayersOptions}
            value={selectedNumberOfPlayer}
            onValueChange={setSelectedNumberOfPlayer}
            placeholder="Select Number Of Players"
          />

          <Dropdown
            title="Wager Amount"
            options={wagerAmountOptions}
            value={selectedWagerAmount}
            onValueChange={setSelectedWagerAmount}
            placeholder="Select Wager Amount"
          />
          <View>
            <Text style={[styles.text, { paddingBottom: 50 }]}>
              Wallet Balance:
              <Text className="text-base font-medium text-[#9747FF]">
                {" "}
                18,678 STRK (5,678 USD){" "}
              </Text>
            </Text>
          </View>
        </View>

        {/* Start Game Button */}
        <Button title="Create Challenge" onPress={() => setWagerModal(true)} />

        {/* Pop-up For Wager Created Modal*/}
        <WagerCreatedModal
          visible={wagerModal}
          onPress={() => router.push("/screens/quickGame/QuickGameMode")}
          onClose={() => setWagerModal(false)}
          inviteCode="LF34567QW"
          gameMode="Wager (Multi Player)"
          participants={6}
          wagerAmount={{
            crypto: 10000,
            currency: "STRK",
            fiat: 100,
            fiatCurrency: "USD",
          }}
          winAmount={{
            crypto: 60000,
            currency: "STRK",
            fiat: 800,
            fiatCurrency: "USD",
          }}
          instruction="A card displaying a lyric from a song will appear along with a list of possible answers. Your goal is to score the highest point amongst your challengers"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    marginTop: 20,
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
  description: {
    fontSize: 14,
    color: "#120029",
    marginBottom: 24,
    fontFamily: Fonts.Inter,
    lineHeight: 22,
  },
  formSection: {
    // marginBottom: 2,
  },
  instructionContainer: {
    backgroundColor: "#F0F0F0",
    borderColor: "#DBE1E7",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 68,
    overflow: "hidden",
  },
  instructionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingBottom: 8,
  },
  instructionTitle: {
    color: Colors.light.primary,
    fontFamily: Fonts.Inter,
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 8,
  },
  instructionContent: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    margin: 8,
    marginTop: 0,
  },
  instructionText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#08090A",
    fontFamily: Fonts.Inter,
  },
  text: {
    fontFamily: Fonts.Inter,
  },
});
