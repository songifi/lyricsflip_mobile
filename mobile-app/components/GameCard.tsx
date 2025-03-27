'use client';

import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import { RefreshCcw } from 'lucide-react-native';
import Frame from '@/assets/images/Frame.svg';
import { Fonts } from '@/constants/Fonts';
import WagerSummaryModal from './WagerSummaryModal';
import NewBadgePopUp from './NewBadgePopUp';

interface GameCardProps {
    lyric: string;
}

export default function GameCard({ lyric }: GameCardProps) {
    const [isModalVisible, setModalVisible] = useState(false);

    const showWagerSummary = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={require('@/assets/images/Card.jpg')}
                style={styles.cardBackground}
                imageStyle={{
                    borderRadius: 10,
                    minHeight: 150,
                    resizeMode: 'contain',
                    width: '100%',
                }}
            >
                <TouchableOpacity
                    style={styles.refeshButton}
                    onPress={() => setModalVisible(true)}
                >
                    <RefreshCcw size={16} color="#70E3C7" />
                </TouchableOpacity>

                <View style={styles.cardContent}>
                    <View style={styles.frameContainer}>
                        <Frame width={80} height={80} />
                    </View>
                    <Text
                        style={[styles.cardText, { fontFamily: Fonts.Inter }]}
                    >
                        {lyric}
                    </Text>
                    <Text style={styles.cardTextBottom}>
                        LyricFlip...join the fun🎶🩵
                    </Text>
                </View>
            </ImageBackground>
            <NewBadgePopUp
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
            />
            {/* <WagerSummaryModal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onStartGame={showWagerSummary}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '80%',
        margin: 'auto',
        position: 'relative',
    },
    cardBackground: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 380,
        width: '100%',
        margin: 'auto',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    cardText: {
        fontSize: 16,
        lineHeight: 32,
        color: '#090909',
        textAlign: 'center',
        fontFamily: Fonts.GeistBold,
        fontWeight: 600,
        marginTop: 20,
    },
    cardTextBottom: {
        fontSize: 14,
        lineHeight: 22,
        color: '#090909',
        textAlign: 'center',
        fontFamily: Fonts.Inter,
        position: 'absolute',
        bottom: 30,
    },
    refeshButton: {
        position: 'absolute',
        top: 35,
        right: 25,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5,
    },
    frameContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
