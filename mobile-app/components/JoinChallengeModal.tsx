import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";
import Button from "@/app/components/form/Button";
import { router } from "expo-router";

export type PlayerResult = {
  name: string;
  count: string;
};

export type Creator = {
  label: string;
  name: string;
};

export type JoinChallengeModalProps = {
  visible: boolean;
  onClose: () => void;

  wagerAmount: {
    crypto: number;
    fiat: number;
    currency: string;
    fiatCurrency: string;
  };

  payoutAmount: {
    crypto: number;
    fiat: number;
    currency: string;
    fiatCurrency: string;
  };
  noOfParticipants?: {
    label: string;
    count: string;
  };
  creator?: {
    label: string;
    name: string;
  };
  walletBalance: number;
  onJoinChallenge?: () => void;
};

export function JoinChallengeModal({
  visible,
  onClose,
  creator,
  wagerAmount,
  noOfParticipants,
  payoutAmount,
  walletBalance,
  onJoinChallenge,
}: JoinChallengeModalProps) {
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

          {/* Modal Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Join a challenge - LF34567QW</Text>
            <Text style={styles.descriptionText}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum,{" "}
            </Text>
          </View>

          {/* Game details */}
          <View style={styles.detailsContainer}>
            {/* Wager Amount */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Wager Amount</Text>
              <Text style={styles.detailValue}>
                {wagerAmount.crypto.toLocaleString()} {wagerAmount.currency} (
                {wagerAmount.fiat} {wagerAmount.fiatCurrency})
              </Text>
            </View>

            {/* No of Participants */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>No of Participant</Text>
              <Text style={styles.detailValue}>{noOfParticipants?.count}</Text>
            </View>

            {/* Payout amount */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Payout if won</Text>
              <Text style={[styles.detailValue, styles.purpleText]}>
                {payoutAmount.crypto.toLocaleString()} {payoutAmount.currency} (
                {payoutAmount.fiat} {payoutAmount.fiatCurrency})
              </Text>
            </View>

            {/* Creator */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Creator</Text>
              <Text style={styles.detailValue}>{creator?.name}</Text>
            </View>
          </View>

          {/* Wallet Balance */}
          <View style={styles.walletBalanceContainer}>
            <Text style={styles.walletBalanceText}>
              Wallet Balance:{" "}
              <Text style={styles.purpleText}>
                {walletBalance.toLocaleString()} STRK
              </Text>
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonsContainer}>
            <Button
              title="Cancel"
              onPress={onClose}
              borderColor="#9747FF"
              backgroundColor="#FFFF"
              color="#9747FF"
              border="border"
            />
            <Button
              title="Join Challenge"
              onPress={() => router.push("/screens/quickGame/QuickGameMode")}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 16,
    height: "auto",
    maxHeight: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 24,
  },
  headerText: {
    fontSize: 18,
    fontFamily: Fonts.Inter,
    fontWeight: "700",
    marginBottom: 8,
    color: "#000",
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: Fonts.Geist,
    fontWeight: "400",
    color: "#333",
    lineHeight: 20,
  },
  detailsContainer: {
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    color: "#636363",
  },
  detailValue: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    fontWeight: "600",
    color: "#000",
    textAlign: "right",
  },
  purpleText: {
    color: "#9747FF",
  },
  walletBalanceContainer: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 50,
    marginBottom: 32,
  },
  walletBalanceText: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    color: "#000",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
    width: "50%",
    margin: "auto",
    gap: 20,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#9747FF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  cancelButtonText: {
    color: "#9747FF",
    fontSize: 16,
    fontFamily: Fonts.Inter,
    fontWeight: "600",
  },
  joinButton: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 16,
    borderRadius: 50,
    backgroundColor: "#9747FF",
    alignItems: "center",
    justifyContent: "center",
  },
  joinButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: Fonts.Inter,
    fontWeight: "600",
  },
  bottomIndicatorContainer: {
    alignItems: "center",
  },
  bottomIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 2,
  },
});

export default JoinChallengeModal;
