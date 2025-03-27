'use client';

import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { router, useNavigation } from 'expo-router';
import CustomDropdown from '@/app/components/form/Dropdown';
import Dropdown from '@/app/components/form/Dropdown';

// Define dropdown options
const genreOptions = [
    { value: 'rock', label: 'Rock' },
    { value: 'pop', label: 'Pop' },
    { value: 'hip-hop', label: 'Hip Hop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'classical', label: 'Classical' },
    { value: 'electronic', label: 'Electronic' },
    { value: 'r-and-b', label: 'R&B' },
    { value: 'country', label: 'Country' },
    { value: 'folk', label: 'Folk' },
    { value: 'metal', label: 'Metal' },
    { value: 'blues', label: 'Blues' },
    { value: 'reggae', label: 'Reggae' },
];

const difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'hard', label: 'Hard' },
];

const durationOptions = [
    { value: '10min', label: '10 minutes' },
    { value: '20min', label: '20 minutes' },
    { value: '30min', label: '30 minutes' },
];

export default function QuickGameForm() {
    const navigation = useNavigation();

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={24}
                            color="#08090A"
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Quick Game</Text>
                    <View style={styles.placeholder} />
                </View>

                {/* Description */}
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum.
                </Text>

                {/* Dropdowns */}
                <View style={styles.formSection}>
                    <Dropdown
                        title="Genre"
                        options={genreOptions}
                        value={selectedGenre}
                        onValueChange={setSelectedGenre}
                        placeholder="Select genre"
                    />

                    <Dropdown
                        title="Difficulty Level"
                        options={difficultyOptions}
                        value={selectedDifficulty}
                        onValueChange={setSelectedDifficulty}
                        placeholder="Select difficulty"
                    />

                    <Dropdown
                        title="Duration"
                        options={durationOptions}
                        value={selectedDuration}
                        onValueChange={setSelectedDuration}
                        placeholder="Select duration"
                    />
                </View>

                {/* Instruction Box */}
                <View style={styles.instructionContainer}>
                    <View style={styles.instructionHeader}>
                        <AntDesign
                            name="bulb1"
                            size={14}
                            color={Colors.light.primary}
                        />
                        <Text style={styles.instructionTitle}>INSTRUCTION</Text>
                    </View>
                    <View style={styles.instructionContent}>
                        <Text style={styles.instructionText}>
                            A card displaying a lyric from a song will appear
                            along with a list of possible answers. Your goal is
                            to select the correct answer as quickly as possible.
                        </Text>
                    </View>
                </View>

                {/* Start Game Button */}
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() =>
                        router.push('../../../screens/quickGame/QuickGameMode')
                    }
                >
                    <Text style={styles.startButtonText}>Start Game</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Fonts.Inter,
        textAlign: 'center',
    },
    placeholder: {
        width: 24, // Same width as back button for centering
    },
    description: {
        fontSize: 14,
        color: '#120029',
        marginBottom: 24,
        fontFamily: Fonts.Inter,
        lineHeight: 22,
    },
    formSection: {
        marginBottom: 24,
    },
    instructionContainer: {
        backgroundColor: '#F0F0F0',
        borderColor: '#DBE1E7',
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: 68,
        overflow: 'hidden',
    },
    instructionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        paddingBottom: 8,
    },
    instructionTitle: {
        color: Colors.light.primary,
        fontFamily: Fonts.Inter,
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 8,
    },
    instructionContent: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        margin: 8,
        marginTop: 0,
    },
    instructionText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#08090A',
        fontFamily: Fonts.Inter,
    },
    startButton: {
        backgroundColor: Colors.light.primary,
        borderRadius: 28,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    startButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Inter,
    },
    pageIndicator: {
        alignItems: 'center',
        marginBottom: 20,
    },
    indicatorDot: {
        width: 40,
        height: 4,
        backgroundColor: '#000',
        borderRadius: 2,
    },
});
