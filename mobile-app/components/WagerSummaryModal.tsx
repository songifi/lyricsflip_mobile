import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Lightbulb, X } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

const { height } = Dimensions.get('window');

interface WagerSummaryModalProps {
    isVisible: boolean;
    onClose: () => void;
    onStartGame: () => void;
}

const WagerSummaryModal: React.FC<WagerSummaryModalProps> = ({
    isVisible,
    onClose,
    onStartGame,
}) => {
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <BlurView intensity={20} style={styles.overlay}>
                <TouchableOpacity
                    style={styles.overlayTouchable}
                    activeOpacity={1}
                    onPress={onClose}
                />

                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={onClose}
                        >
                            <X color="gray" size={16} />
                        </TouchableOpacity>

                        <Text style={styles.title}>Wager Summary</Text>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Genre</Text>
                            <Text style={styles.detailValue}>Hip Hop</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>
                                Difficulty Level
                            </Text>
                            <Text style={styles.detailValue}>Expert</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Duration</Text>
                            <Text style={styles.detailValue}>10 Mins</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Odds</Text>
                            <Text style={styles.detailValue}>
                                10 odds (get everything right)
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Wager Amount</Text>
                            <Text style={styles.detailValue}>
                                10,000 STRK (100 USD)
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>You Win</Text>
                            <Text style={styles.detailValue}>
                                80,000 STRK (800 USD)
                            </Text>
                        </View>

                        <View style={styles.instructionBox}>
                            <View style={styles.instructionHeader}>
                                <Lightbulb size={16} color="#9747FF" />
                                <Text style={styles.instructionTitle}>
                                    INSTRUCTION
                                </Text>
                            </View>
                            <Text style={styles.instructionText}>
                                A card displaying a lyric from a song will
                                appear along with a list of possible answers.
                                Your goal according to the odd you picked is to
                                get 80% of the lyrics presented you.
                            </Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={onClose}
                            >
                                <Text style={styles.cancelButtonText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.startButton}
                                onPress={onStartGame}
                            >
                                <Text style={styles.startButtonText}>
                                    Start Game
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    overlayTouchable: {
        flex: 1,
    },
    modalContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 20,
    },
    modalContent: {
        padding: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        padding: 4,
        borderRadius: 50,
        borderColor: '#DBE1E7',
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: '#08090A',
        fontWeight: 500,
        lineHeight: 32,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    detailLabel: {
        color: '#636363',
        fontSize: 14,
        lineHeight: 23,
        fontWeight: '400',
    },
    detailValue: {
        fontWeight: '500',
        color: '#202020',
        fontSize: 15,
    },
    instructionBox: {
        borderColor: '#DBE1E7',
        borderWidth: 1,
        backgroundColor: '#F0F0F0',
        padding: 15,
        borderRadius: 10,
        marginVertical: 15,
    },
    instructionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    instructionTitle: {
        color: '#9747FF',
        fontWeight: '500',
        fontSize: 12,
    },
    instructionText: {
        color: '#08090A',
        fontSize: 16,
        lineHeight: 28,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        marginRight: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#9747FF',
        borderRadius: 50,
    },
    cancelButtonText: {
        color: '#9747FF',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 500,
        textAlign: 'center',
    },
    startButton: {
        flex: 1,
        padding: 15,
        backgroundColor: '#9747FF',
        borderRadius: 50,
    },
    startButtonText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 500,
        textAlign: 'center',
    },
});

export default WagerSummaryModal;
