import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";
import { useNavigation } from "expo-router";
import Input from "@/app/components/form/Input";
import Button from "@/app/components/form/Button";
import JoinChallengeModal from "@/components/JoinChallengeModal";
import { Container } from "lucide-react-native";

export default function joinAchallenge() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const gameResult = {
    isWinner: true,

    wagerAmount: {
      crypto: 18000,
      fiat: 120,
      currency: "STRK",
      fiatCurrency: "USD",
    },
    noOfParticipants: {
      label: "No Of Participants",
      count: "Three (3)",
    },
    payOutAmount: {
      crypto: 80000,
      fiat: 800,
      currency: "STRK",
      fiatCurrency: "USD",
    },
    creator: {
      label: "Creator",
      name: "thetimileyin",
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons
              name="chevron-back"
              size={24}
              color="#08090A"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Join a Challenge </Text>
          <View style={styles.placeholder} />
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum,
        </Text>

        {/* Input area */}
        <View style={styles.inputContainer}>
          <Text style={[styles.label]}>Enter Code</Text>
          <TextInput
            style={[
              styles.input,
              // inputStyle,
              isFocused && styles.inputFocused,
            ]}
            // keyboardType="ascii-capable"
          />
        </View>

        {/* Start Game Button */}
        <Button
          title="Join Challenge"
          onPress={() => {
            setModalVisible(true);
          }}
        />

        <JoinChallengeModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          wagerAmount={gameResult.wagerAmount}
          noOfParticipants={gameResult.noOfParticipants}
          payoutAmount={gameResult.payOutAmount}
          creator={gameResult.creator}
          walletBalance={200789}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    // flexGrow: 1,
    padding: 18,
    marginTop: 10,
    backgroundColor: "#ffff",
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
    fontSize: 16,
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
  inputContainer: { marginBottom: 100 },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
    color: "#212121",
  },
  input: {
    margin: "auto",
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 14,
    color: "#333",
    width: "100%",
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "#007AFF",
  },
});
