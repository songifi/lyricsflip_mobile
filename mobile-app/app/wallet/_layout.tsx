import { Stack } from 'expo-router';

export default function WagerSinglePlayerLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="WalletDetails"
                options={{ title: 'WalletDetails' }}
            />
            {/* <Stack.Screen
                name="WagerSinglePlayerMode"
                options={{ title: 'WagerSinglePlayerMode' }}
            /> */}
        </Stack>
    );
}
