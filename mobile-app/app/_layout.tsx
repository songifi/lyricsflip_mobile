import "../global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import SplashScreenUI from "./components/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from "@/hooks/useColorScheme";
import { darkTheme, lightTheme } from "@/theme/theme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(
    null
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Check if user has seen onboarding
        const onboardingStatus = await AsyncStorage.getItem(
          "hasSeenOnboarding"
        );
        setHasSeenOnboarding(onboardingStatus === "true");

        // Wait for 2 seconds before hiding splash screen
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Hide splash screen
        await SplashScreen.hideAsync();

        // Set isReady to true
        setIsReady(true);
      } catch (error) {
        console.error("Error preparing app:", error);
      } finally {
        // setSplashVisible(false);
      }
    }

    prepare();
  }, []);

  if (!isReady || hasSeenOnboarding === null) {
    return <SplashScreenUI />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {!hasSeenOnboarding ? (
          // Show onboarding for new users
          <Stack.Screen
            name="screens/onboarding/OnboardingScreen"
            options={{ gestureEnabled: false }}
          />
        ) : (
          // Show main app for existing users
          <>
            <Stack.Screen name="index" />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          </>
        )}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
