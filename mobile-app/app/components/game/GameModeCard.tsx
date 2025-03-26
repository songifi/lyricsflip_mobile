import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

interface GameModeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  onPress?: () => void;
}

const GameModeCard: React.FC<GameModeCardProps> = ({
  icon,
  title,
  description,
  iconBgColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 16,
    borderRadius: 10,
    gap: 16,
    width: "100%",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    fontFamily: Fonts.Geist,
    color: Colors.dark.textPurple,
  },
  description: {
    fontSize: 12,
    color: Colors.dark.textPurple,
    fontFamily: Fonts.Geist,
  },
});

export default GameModeCard;
