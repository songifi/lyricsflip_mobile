import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

// Define option type
interface DropdownOption {
    value: string;
    label: string;
}

// Dropdown component props
interface DropdownProps {
    title: string;
    options: DropdownOption[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    title,
    options,
    value,
    onValueChange,
    placeholder,
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelect = (selectedValue: string) => {
        onValueChange(selectedValue);
        setModalVisible(false);
    };

    const selectedLabel =
        options.find((option) => option.value === value)?.label || placeholder;

    return (
        <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownTitle}>{title}</Text>
            <TouchableOpacity
                style={styles.dropdownTrigger}
                onPress={() => setModalVisible(true)}
            >
                <Text
                    style={value ? styles.dropdownText : styles.placeholderText}
                >
                    {selectedLabel}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#888" />
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContent}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={styles.modalOption}
                                onPress={() => handleSelect(option.value)}
                            >
                                <Text style={styles.modalOptionText}>
                                    {option.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

export default function WagerSinglePlayerForm() {
    const navigation = useNavigation();

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedOdds, setSelectedOdds] = useState('');
    const [wagerAmount, setWagerAmount] = useState('');
    const [yourWin, setYourWin] = useState('');

    // Date Picker State
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const genreOptions: DropdownOption[] = [
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'movies', label: 'Movies' },
        { value: 'history', label: 'History' },
        { value: 'science', label: 'Science' },
        { value: 'pop-culture', label: 'Pop Culture' },
    ];

    const difficultyOptions: DropdownOption[] = [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
        { value: 'expert', label: 'Expert' },
    ];

    const durationOptions: DropdownOption[] = [
        { value: '5min', label: '5 Minutes' },
        { value: '10min', label: '10 Minutes' },
        { value: '15min', label: '15 Minutes' },
        { value: '30min', label: '30 Minutes' },
        { value: '1hour', label: '1 Hour' },
    ];

    const oddsOptions: DropdownOption[] = [
        { value: '1:1', label: '1:1' },
        { value: '2:1', label: '2:1' },
        { value: '3:1', label: '3:1' },
        { value: '5:1', label: '5:1' },
        { value: '10:1', label: '10:1' },
    ];

    const onDateChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
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
                    <Text style={styles.headerTitle}>
                        Wager (Single Player)
                    </Text>
                    <View style={styles.placeholder} />
                </View>

                {/* Description */}
                <Text style={styles.description}>
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum,
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

                    <Dropdown
                        title="Odds"
                        options={oddsOptions}
                        value={selectedOdds}
                        onValueChange={setSelectedOdds}
                        placeholder="Select odds"
                    />

                    {/* Date Picker
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.dropdownTitle}>Date</Text>
                        <TouchableOpacity
                            style={styles.dropdownTrigger}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={styles.dropdownText}>
                                {date.toLocaleDateString()}
                            </Text>
                            <Ionicons name="calendar" size={20} color="#888" />
                        </TouchableOpacity>

                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onDateChange}
                            />
                        )}
                    </View> */}

                    <View style={styles.dropdownContainerInputs}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.dropdownTitle}>Your Wager</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={wagerAmount}
                                onChangeText={setWagerAmount}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.dropdownTitle}>Your Win</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    { backgroundColor: '#F5F6F8' }, // Makes input look disabled
                                ]}
                                keyboardType="numeric"
                                value={yourWin}
                                editable={false}
                                onChangeText={setYourWin}
                            />
                        </View>
                    </View>

                    <Text style={styles.balanceText}>
                        Wallet Balance:{' '}
                        <Text style={styles.balanceValue}>
                            18,678 STRK ($5,678 USD)
                        </Text>
                    </Text>
                </View>

                {/* Start Game Button */}
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => {
                        // Start game logic here
                    }}
                >
                    <Text style={styles.startButtonText}>Start Game</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

// ... (styles remain the same as in the previous implementation)

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
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        fontFamily: Fonts.Inter,
        textAlign: 'center',
    },
    placeholder: {
        width: 24,
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
    dropdownContainer: {
        marginBottom: 16,
    },
    dropdownContainerInputs: {
        flexDirection: 'row',
        gap: 20,
    },
    inputContainer: {
        flex: 1,
    },
    dropdownTitle: {
        fontSize: 14,
        marginBottom: 8,
        fontFamily: Fonts.Inter,
        color: '#08090A',
    },
    dropdownTrigger: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DBE1E7',
        borderRadius: 8,
        padding: 12,
    },
    dropdownText: {
        fontSize: 12,
        fontFamily: Fonts.Inter,
    },
    placeholderText: {
        fontSize: 12,
        fontFamily: Fonts.Inter,
        color: '#888',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DBE1E7',
        borderRadius: 8,
        padding: 12,
        fontSize: 12,
        fontFamily: Fonts.Inter,
        width: '100%',
    },
    balanceText: {
        color: '#090909',

        marginTop: 5,
        fontSize: 12,
        fontWeight: 500,
        fontFamily: Fonts.GeistRegular,
    },
    balanceValue: {
        color: '#9747FF',
    },
    startButton: {
        backgroundColor: Colors.light.primary,
        borderRadius: 28,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 'auto',
    },
    startButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Inter,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalOption: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    modalOptionText: {
        fontSize: 16,
        fontFamily: Fonts.Inter,
    },
});
