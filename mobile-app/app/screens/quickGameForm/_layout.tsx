import React from "react";
import { Stack } from "expo-router";

export default function QuickGameFormLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuickGameForm" options={{ title: "QuickGameForm" }} />
    </Stack>
  );
}
