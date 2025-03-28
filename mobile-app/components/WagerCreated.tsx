import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Clipboard,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";
import Button from "@/app/components/form/Button";

export type WagerChallengeModalProps = {
  visible: boolean;
  onClose: () => void;
  onPress: () => void;
  inviteCode: string;
  gameMode: string;
  participants: number;
  wagerAmount: {
    crypto: number;
    fiat: number;
    currency: string;
    fiatCurrency: string;
  };
  winAmount: {
    crypto: number;
    fiat: number;
    currency: string;
    fiatCurrency: string;
  };
  instruction: string;

  //   onShareInvite: () => void;
  //   onStartGame: () => void;
};

export function WagerCreatedModal({
  visible,
  onClose,
  onPress,
  inviteCode,
  gameMode,
  participants,
  wagerAmount,
  winAmount,
  instruction,
}: //   onStartGame,
WagerChallengeModalProps) {
  const copyToClipboard = () => {
    Clipboard.setString(inviteCode);
    if (Platform.OS === "android") {
      ToastAndroid.show("Invite code copied to clipboard", ToastAndroid.SHORT);
    } else {
      Alert.alert("Copied", "Invite code copied to clipboard");
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

          {/* Title and description */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              Your wager challenge has been created
            </Text>
            <Text style={styles.description}>
              Share the invite code below for others to join in
            </Text>
          </View>

          {/* Invite code */}
          <View style={styles.inviteCodeContainer}>
            <Text style={styles.inviteCode}>{inviteCode}</Text>
            <TouchableOpacity onPress={copyToClipboard}>
              <MaterialCommunityIcons
                name="content-copy"
                size={24}
                color="#9747FF"
              />
            </TouchableOpacity>
          </View>

          {/* Game details */}
          <View style={styles.detailsContainer}>
            {/* Game Mode */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Game Mode</Text>
              <Text style={styles.detailValue}>{gameMode}</Text>
            </View>

            {/* Number of Participants */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Number of Participants</Text>
              <Text style={styles.detailValue}>{participants}</Text>
            </View>

            {/* Wager Amount */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Wager Amount</Text>
              <Text style={styles.detailValue}>
                {wagerAmount.crypto.toLocaleString()} {wagerAmount.currency} (
                {wagerAmount.fiat} {wagerAmount.fiatCurrency})
              </Text>
            </View>

            {/* You win */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>You win</Text>
              <Text style={styles.winAmount}>
                {winAmount.crypto.toLocaleString()} {winAmount.currency} (
                {winAmount.fiat} {winAmount.fiatCurrency})
              </Text>
            </View>
          </View>

          {/* Instruction box */}
          <View style={styles.instructionContainer}>
            <View style={styles.instructionHeader}>
              <AntDesign name="bulb1" size={16} color="#9747FF" />
              <Text style={styles.instructionTitle}>INSTRUCTION</Text>
            </View>
            <View style={styles.instructionContent}>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          </View>

          {/* Action buttons */}
          <View style={styles.buttonsContainer}>
            <Button
              title="Share Invite Code"
              onPress={onPress}
              borderColor="#9747FF"
              backgroundColor="#FFFFFF"
              color="#9747FF"
              border="border"
            />
            <Button title="Start Game" onPress={onPress} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    marginTop: "auto",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 50,
  },
  headerContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.Inter,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: Fonts.Inter,
    color: "#666",
    textAlign: "center",
  },
  inviteCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  inviteCode: {
    fontSize: 28,
    fontFamily: Fonts.Inter,
    fontWeight: "bold",
    marginRight: 10,
  },
  detailsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    fontWeight: "500",
    color: "#333",
  },
  winAmount: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    fontWeight: "500",
    color: "#9747FF",
  },
  instructionContainer: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    marginBottom: 30,
    overflow: "hidden",
  },
  instructionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingBottom: 8,
  },
  instructionTitle: {
    fontSize: 12,
    color: "#9747FF",
    fontFamily: Fonts.Inter,
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
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    fontFamily: Fonts.Inter,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    marginBottom: 20,
    gap: 10,
  },
  bottomIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default WagerCreatedModal;

// import {
//   View,
//   Text,
//   Modal,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   Dimensions,
// } from "react-native";
// import {
//   Ionicons,
//   FontAwesome5,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { Fonts } from "@/constants/Fonts";
// import Button from "@/app/components/form/Button";
// // import Trophy from ".../assets/images/trophy.png";
// import { Image } from "react-native";

// export type PlayerResult = {
//   name: string;
//   points: number;
// };

// export type WagerCreatedProps = {
//   visible: boolean;
//   onClose: () => void;

//   wagerAmount: {
//     crypto: number;
//     fiat: number;
//     currency: string;
//     fiatCurrency: string;
//   };
//   secondPlace?: PlayerResult;
//   thirdPlace?: PlayerResult;
//   onShare?: () => void;
//   onClaim?: () => void;
// };

// export function WagerCreatedModal({
//   visible,
//   onClose,
//   wagerAmount,
//   secondPlace,
//   thirdPlace,
//   onShare,
// }: WagerCreatedProps) {
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <SafeAreaView style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Close button */}
//           <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//             <Ionicons name="close" size={24} color="#000" />
//           </TouchableOpacity>

//           {/* Game details */}
//           <View style={styles.detailsContainer}>
//             {/* Winner */}
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Winner</Text>
//               <Text style={styles.detailValue}>You</Text>
//             </View>
//           </View>

//           {/* Wager Amount */}
//           <View style={styles.detailRow}>
//             <Text style={styles.detailLabel}>Wager Amount</Text>
//             <Text style={styles.detailValue}>
//               {wagerAmount.crypto.toLocaleString()} {wagerAmount.currency} (
//               {wagerAmount.fiat} {wagerAmount.fiatCurrency})
//             </Text>
//           </View>

//           {/* Second Place */}
//           {secondPlace && (
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Second Place</Text>
//               <View style={styles.playerResultContainer}>
//                 <Text style={styles.detailValue}>
//                   {secondPlace.name} ({secondPlace.points} Pts)
//                 </Text>
//               </View>
//             </View>
//           )}

//           {/* Third Place */}
//           {thirdPlace && (
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Third Place</Text>
//               <View style={styles.playerResultContainer}>
//                 <Text style={styles.detailValue}>
//                   {thirdPlace.name} ({thirdPlace.points} Pts)
//                 </Text>
//               </View>
//             </View>
//           )}

//           <View style={styles.buttonsContainer}>
//             <Button
//               title="Share"
//               onPress={onClose}
//               borderColor="#9747FF"
//               backgroundColor="#FFFFFF"
//               color="#9747FF"
//               border="border"
//               //   title={winLose2()}
//             />
//             <Button title={winLose2()} onPress={onClose} />
//           </View>
//         </View>
//       </SafeAreaView>
//     </Modal>
//   );
// }

// // const { width } = Dimensions.get("window");

// const styles = StyleSheet.create({
//   modalContainer: {
//     // flex: 1,
//     // justifyContent: "",
//     // alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     width: "100%",
//     height: "100%",
//   },
//   modalContent: {
//     // width: width * 0.9,
//     width: "100%",
//     backgroundColor: "white",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     alignItems: "center",
//     elevation: 5,
//     shadowColor: "#000",
//     marginTop: "auto",
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 3.84,
//   },
//   closeButton: {
//     position: "absolute",
//     top: 15,
//     right: 15,
//     zIndex: 1,
//   },
//   trophyContainer: {
//     marginTop: 20,
//     marginBottom: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     height: 100,
//   },
//   resultContainer: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   pointsText: {
//     fontSize: 20,
//     fontFamily: Fonts.Inter,
//     fontWeight: "600",
//   },
//   pointsValue: {
//     color: "#70E3C7", // Teal/mint color for points
//     fontWeight: "800",
//     fontSize: 20,
//   },
//   fireEmoji: {
//     fontSize: 20,
//   },
//   detailsContainer: {
//     width: "100%",
//     marginBottom: 30,
//   },
//   detailRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//   },
//   detailLabel: {
//     fontSize: 15,
//     fontFamily: Fonts.Inter,
//     color: "#666",
//   },
//   detailValue: {
//     fontSize: 15,
//     fontFamily: Fonts.Inter,
//     fontWeight: "500",
//     color: "#333",
//   },
//   playerResultContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   resultIcon: {
//     marginLeft: 6,
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//     width: "50%",
//     marginBottom: 20,
//   },
//   shareButton: {
//     flex: 1,
//     marginRight: 10,
//     paddingVertical: 15,
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: "#8A3FFC",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   claimButton: {
//     flex: 1,
//     marginLeft: 10,
//     paddingVertical: 15,
//     borderRadius: 30,
//     backgroundColor: "#8A3FFC",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   claimButtonText: {
//     color: "white",
//     fontSize: 15,
//     fontFamily: Fonts.Inter,
//     fontWeight: "600",
//   },
//   bottomIndicator: {
//     width: 40,
//     height: 4,
//     backgroundColor: "#000",
//     borderRadius: 2,
//     marginTop: 10,
//   },
// });

// export default WagerCreatedModal;
