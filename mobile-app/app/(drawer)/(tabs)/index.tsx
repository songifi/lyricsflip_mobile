import GameModeCard from '@/app/components/game/GameModeCard';
import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {
    Play,
    User,
    Users2,
    Trophy,
    Bell,
    Zap,
    Drum,
    Handshake,
    Target,
} from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { RelativePathString, router } from 'expo-router';

const gameModes = [
    {
        icon: <Zap size={18} color="white" />,

        title: 'Quick Game',
        description:
            'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        bgImage: require('@/assets/images/bg.png'),
        iconBgColor: '#9747FF',
        route: '../../../screens/quickGame/QuickGameForm',
    },
    {
        icon: <Drum size={18} color="white" />,
        title: 'Wager (Single Player)',
        description:
            'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        bgImage: require('@/assets/images/bg-1.png'),
        iconBgColor: '#3F8AB6',
        route: '../../../screens/wagerSinglePlayer/WagerSinglePlayerForm',
    },
    {
        icon: <Handshake size={18} color="white" />,
        title: 'Wager (Multi Player)',
        description:
            'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        bgImage: require('@/assets/images/bg-2.png'),
        iconBgColor: '#DF7A16',
        route: '',
    },
    {
        icon: <Target size={18} color="white" />,
        title: 'Join a Challenge',
        description:
            'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        bgImage: require('@/assets/images/bg-3.png'),
        iconBgColor: '#7D1D3F',
        route: '',
    },
];

// const path = '/screens/quickGameForm/QuickGameForm' as RelativePathString;

export default function index() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome 👋</Text>
                        <Text style={styles.username}>thetimileyin48</Text>
                    </View>
                    <View style={styles.bellContainer}>
                        <Bell color="#08090A" size={18} />
                    </View>
                </View>

                <Text style={styles.sectionTitle}>
                    CHOOSE YOUR PREFERRED GAME MODE
                </Text>

                {gameModes.map((mode, index) => (
                    <ImageBackground
                        key={index}
                        source={mode.bgImage}
                        style={styles.gameModeBackground}
                    >
                        <GameModeCard
                            onPress={() =>
                                router.push(mode.route as RelativePathString)
                            }
                            icon={mode.icon}
                            title={mode.title}
                            description={mode.description}
                            iconBgColor={mode.iconBgColor}
                        />
                    </ImageBackground>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    bellContainer: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#DBE1E7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell: {
        color: '#08090A',
    },
    welcomeText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#5A5B5C',
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.dark.textBold,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16,
    },
    gameModeBackground: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
});
