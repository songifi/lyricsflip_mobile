// import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { X, Clipboard, Copy, QrCode, ChevronRight } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { Fonts } from '@/constants/Fonts';
import { router } from 'expo-router';

const { height } = Dimensions.get('window');

const WalletDetailsPopUp: React.FC<{
    isVisible: boolean;
    onClose: () => void;
}> = ({ isVisible, onClose }) => {
    const handleViewWallet = () => {
        router.push('/wallet/WalletDetails');
        onClose();
    };
    return (
        <Modal transparent={true} visible={isVisible} animationType="slide">
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
                            <X color="gray" size={18} />
                        </TouchableOpacity>

                        <View style={styles.addressContainer}>
                            <Text style={styles.walletTitle}>
                                Your Wallet Address
                            </Text>
                            <View style={styles.walletBox}>
                                <Text style={styles.walletAddress}>
                                    0x0Bbed4Daf99d43D4aBa58fa6eD5A7550f6555327
                                </Text>
                                <TouchableOpacity style={styles.copy}>
                                    <Copy color="#5256A3" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.viewWalletContainer}
                            onPress={handleViewWallet}
                        >
                            <View style={styles.viewWalletButton}>
                                <View style={styles.copy}>
                                    <QrCode color="#090909" size={20} />
                                </View>
                                <Text style={styles.viewWalletText}>
                                    View your wallet address
                                </Text>
                            </View>
                            <ChevronRight color="#767676" />
                        </TouchableOpacity>
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
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#DBE1E7',
    },
    walletTitle: {
        fontSize: 14,
        lineHeight: 21,
        color: '#5B5B5B',
        marginBottom: 5,
    },
    addressContainer: {
        borderWidth: 1,
        borderColor: '#DBE1E7',
        marginTop: 30,
        borderRadius: 10,
        padding: 15,
    },
    walletBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
        width: '100%',
    },
    walletAddress: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 26,
        fontFamily: Fonts.Bricolage,
        wordWrap: 'wrap',
        color: '',
        width: '80%',
    },
    copy: {
        backgroundColor: '#F2F2F8',
        padding: 12,
        borderRadius: 50,
    },

    viewWalletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewWalletButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#EEE',
        gap: 10,
    },
    viewWalletText: {
        fontSize: 16,
        color: '#090909',
        fontWeight: 400,
        lineHeight: 24,
        textAlign: 'center',
    },
});

export default WalletDetailsPopUp;
