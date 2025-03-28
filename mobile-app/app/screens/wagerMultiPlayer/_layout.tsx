import { Stack } from "expo-router";

export default function WagerMultiPlayerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="WagerMultiPlayerForm"
        options={{ title: "WagerMultiPlayerForm" }}
      />
    </Stack>
  );
}
