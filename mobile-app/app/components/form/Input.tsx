"use client";

import type React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CustomInputProps } from "@/app/types/all_types";

const Input: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  validationMessage = "",
  showValidation = false,
  secureTextEntry = false,
  // containerStyle,
  // labelStyle,
  // inputStyle,
  // validationStyle,
  autoCapitalize = "none",
  keyboardType = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        // containerStyle
      ]}
    >
      <Text
        style={[
          styles.label,
          //  labelStyle
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          // inputStyle,
          isFocused && styles.inputFocused,
        ]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />

      <View style={styles.validationContainer}>
        <Ionicons name="checkmark-circle" size={20} color={"#4CAF50"} />
        <Text
          style={[
            styles.validationText,
            { color: "#4CAF50" },
            // validationStyle
          ]}
        >
          {validationMessage}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 207,
    // width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
    color: "#212121",
  },
  input: {
    backgroundColor: "#F7F8F9",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#DBE1E7",
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
  validationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  validationText: {
    marginLeft: 6,
    fontSize: 14,
  },
});

export default Input;
