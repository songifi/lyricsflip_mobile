import type React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";
import { useNavigation } from "expo-router";

export type ScreensHeaderProps = {
  title: string;
  description?: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
  containerStyle?: object;
  titleStyle?: object;
  descriptionStyle?: object;
};

export function ScreensHeader({
  title,
  description,
  onBackPress,
  showBackButton = true,
  rightComponent,
  containerStyle,
  titleStyle,
  descriptionStyle,
}: ScreensHeaderProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* Header */}
      <View style={styles.header}>
        {showBackButton ? (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Ionicons name="chevron-back" size={24} color="#08090A" />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}

        <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>

        {rightComponent ? rightComponent : <View style={styles.placeholder} />}
      </View>

      {/* Description (optional) */}
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: (props: ScreensHeaderProps) => (props.description ? 16 : 0),
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
    marginBottom: 16,
    fontFamily: Fonts.Inter,
    lineHeight: 22,
  },
});

export default ScreensHeader;
