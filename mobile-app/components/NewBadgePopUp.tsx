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
import Frame from '@/assets/images/Frame-2.svg';

const { height } = Dimensions.get('window');

interface NewBadgePopUpProps {
    isVisible: boolean;
    onClose: () => void;
}

const NewBadgePopUp: React.FC<NewBadgePopUpProps> = ({
    isVisible,
    onClose,
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

                        <View style={styles.frameContainer}>
                            <Frame width={80} height={80} />
                        </View>

                        <View>
                            <Text style={styles.title}>
                                You just earned a new badge
                            </Text>
                            <Text style={styles.subtitle}>
                                You just earned yourself a new badge. “Music
                                Connoisseur”. Well donee 👏
                            </Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>
                                    Share
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.startButton}>
                                <Text style={styles.startButtonText}>
                                    View Badge
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
    frameContainer: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: '#090909',
        fontWeight: 600,
        lineHeight: 32,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 50,
        color: '#666666',
        fontWeight: 400,
        lineHeight: 28,
        textAlign: 'center',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        paddingVertical: 10,
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

export default NewBadgePopUp;
