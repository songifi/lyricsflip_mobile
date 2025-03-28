import { Stack } from "expo-router";

export default function JoinAchallenge() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="JoinAchallenge"
        options={{ title: "JoinAchallenge" }}
      />
    </Stack>
  );
}
