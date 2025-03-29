import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { X } from 'lucide-react-native';
import { router } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';
import * as Clipboard from 'expo-clipboard';

const { width } = Dimensions.get('window');

const WalletDetailsScreen: React.FC = () => {
    const walletAddress = '0x0Bbed4Daf99d43D4aBa58fa6eD5A7550f6555327';

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(walletAddress);
        alert('Wallet Address Copied!');
    };



    return (
        <View style={styles.container}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
                <X color="black" size={18} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Wallet Address</Text>

            {/* QR Code Box */}
            <TouchableOpacity style={styles.qrBox} onPress={copyToClipboard}>
                <Text style={styles.copyText}>TAP TO COPY</Text>
                <QRCode value={walletAddress} size={width * 0.6} />
            </TouchableOpacity>

            {/* Wallet Address */}
            <Text style={styles.walletAddress}>{walletAddress}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        padding: 5,
        borderRadius: 50,
        borderColor: '#DBE1E7',
        borderWidth: 1
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        color: '#000',
        marginBottom: 20,
    },
    qrBox: {
        backgroundColor: '#F8F8F8',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyText: {
        fontSize: 12,
        color: '#0AC660',
        fontWeight: '500',
        lineHeight: 18,
        marginVertical: 10,
    },
    walletAddress: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default WalletDetailsScreen;
