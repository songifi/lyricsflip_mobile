import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "@/constants/Fonts";

export default function WagerCard() {
  return (
    <View className="flex  bg-#F0F0F0 border border-[#DBE1E7] rounded-xl p-4  w-11/12 ">
      <Text style={styles.text} className="text-lg font-medium pb-4 ]">
        YOUR WAGER
      </Text>
      <Text style={[styles.text, { paddingBottom: 105 }]}>
        Wallet Balance:
        <Text className="text-base font-medium text-[#9747FF] ">
          {" "}
          18,678 STRK (5,678 USD){" "}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.Inter,
  },
});
