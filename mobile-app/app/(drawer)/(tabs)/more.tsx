import { View, Text } from "react-native";
import React from "react";
import WagerCard from "@/app/components/game/WagerCard";

export default function more() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>more</Text>
      {/*import card Wager for Test, can be removed to be imported in the right page/screen */}
      <WagerCard />
    </View>
  );
}
