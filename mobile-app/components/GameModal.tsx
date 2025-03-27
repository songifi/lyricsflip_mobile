import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";
import Button from "@/app/components/form/Button";
// import Trophy from ".../assets/images/trophy.png";
import { Image } from "react-native";

export type PlayerResult = {
  name: string;
  points: number;
};

export type GameModalProps = {
  visible: boolean;
  onClose: () => void;
  points: number;
  isWinner: boolean;
  prizeWon: {
    crypto: number;
    fiat: number;
    currency: string;
    fiatCurrency: string;
  };
  wagerAmount: {
    crypto: number;
    fiat: number;
    currency: string;
    fiatCurrency: string;
  };
  secondPlace?: PlayerResult;
  thirdPlace?: PlayerResult;
  onShare?: () => void;
  onClaim?: () => void;
};

export function GameModal({
  visible,
  onClose,
  points,
  isWinner,
  prizeWon,
  wagerAmount,
  secondPlace,
  thirdPlace,
  onShare,
  onClaim,
}: GameModalProps) {
  // Determine which trophy icon to show based on points
  const getTrophyIcon = () => {
    if (points >= 500) {
      return <Image source={require("../assets/images/trophy.png")} />;
    } else {
      return <Image source={require("../assets/images/exclamation.png")} />;
    }
  };

  const getEmojiIcon = () => {
    if (points >= 500) {
      return "won 🔥";
    } else {
      return "lost 😞";
    }
  };

  const winLose1 = isWinner ? (
    <>
      <Text style={styles.fireEmoji}>{getEmojiIcon()}</Text>
    </>
  ) : (
    <>
      <Text style={styles.fireEmoji}>{getEmojiIcon()}</Text>
    </>
  );

  const winLose2 = () => {
    if (points >= 500) {
      return "Claim Earning";
    } else {
      return "Play Again";
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>

          {/* Trophy icon */}
          <View style={styles.trophyContainer}>{getTrophyIcon()}</View>

          {/* Points and result */}
          <View style={styles.resultContainer}>
            <Text style={styles.pointsText}>
              <Text style={styles.pointsValue}>{points} Points</Text> - You{" "}
              {winLose1}
            </Text>
          </View>

          {/* Game details */}
          <View style={styles.detailsContainer}>
            {/* Winner */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Winner</Text>
              <Text style={styles.detailValue}>You</Text>
            </View>

            {/* Prize Won */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Prize Won</Text>
              <Text style={styles.detailValue}>
                {prizeWon.crypto.toLocaleString()} {prizeWon.currency} (
                {prizeWon.fiat} {prizeWon.fiatCurrency})
              </Text>
            </View>

            {/* Wager Amount */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Wager Amount</Text>
              <Text style={styles.detailValue}>
                {wagerAmount.crypto.toLocaleString()} {wagerAmount.currency} (
                {wagerAmount.fiat} {wagerAmount.fiatCurrency})
              </Text>
            </View>

            {/* Second Place */}
            {secondPlace && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Second Place</Text>
                <View style={styles.playerResultContainer}>
                  <Text style={styles.detailValue}>
                    {secondPlace.name} ({secondPlace.points} Pts)
                  </Text>
                </View>
              </View>
            )}

            {/* Third Place */}
            {thirdPlace && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Third Place</Text>
                <View style={styles.playerResultContainer}>
                  <Text style={styles.detailValue}>
                    {thirdPlace.name} ({thirdPlace.points} Pts)
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              title="Share"
              onPress={onClose}
              borderColor="#9747FF"
              backgroundColor="#FFFFFF"
              color="#9747FF"
              border="border"
              //   title={winLose2()}
            />
            <Button title={winLose2()} onPress={onClose} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

// const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    // justifyContent: "",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
  },
  modalContent: {
    // width: width * 0.9,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    marginTop: "auto",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
  trophyContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  pointsText: {
    fontSize: 20,
    fontFamily: Fonts.Inter,
    fontWeight: "600",
  },
  pointsValue: {
    color: "#70E3C7", // Teal/mint color for points
    fontWeight: "800",
    fontSize: 20,
  },
  fireEmoji: {
    fontSize: 20,
  },
  detailsContainer: {
    width: "100%",
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  detailLabel: {
    fontSize: 15,
    fontFamily: Fonts.Inter,
    color: "#666",
  },
  detailValue: {
    fontSize: 15,
    fontFamily: Fonts.Inter,
    fontWeight: "500",
    color: "#333",
  },
  playerResultContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resultIcon: {
    marginLeft: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "50%",
    marginBottom: 20,
  },
  shareButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#8A3FFC",
    alignItems: "center",
    justifyContent: "center",
  },

  claimButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: "#8A3FFC",
    alignItems: "center",
    justifyContent: "center",
  },
  claimButtonText: {
    color: "white",
    fontSize: 15,
    fontFamily: Fonts.Inter,
    fontWeight: "600",
  },
  bottomIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 2,
    marginTop: 10,
  },
});

export default GameModal;
