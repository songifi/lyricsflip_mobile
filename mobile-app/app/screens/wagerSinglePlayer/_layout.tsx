import { Stack } from 'expo-router';

export default function WagerSinglePlayerLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="WagerSinglePlayerForm"
                options={{ title: 'WagerSinglePlayerForm' }}
            />
            {/* <Stack.Screen
                name="WagerSinglePlayerMode"
                options={{ title: 'WagerSinglePlayerMode' }}
            /> */}
        </Stack>
    );
}
