import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false, contentStyle: {
                backgroundColor: "white"
            }
        }}>
            <Stack.Screen name="QuickGame" options={{
                title: "Quick Game",

                headerBackVisible: true,
                headerShown: true,
                headerTitleStyle: { color: "#000" },
                headerStyle: {
                    backgroundColor: "white"
                }
            }} />
        </Stack>
    );
}