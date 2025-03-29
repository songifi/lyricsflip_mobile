import { Stack } from "expo-router";

export default function JoinAchallengeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="JoinAchallenge"
        options={{ title: "JoinAchallenge" }}
      />
    </Stack>
  );
}
