import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SafeAreaView,
} from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import STRK from '@/assets/images/strk.svg';
import USDT from '@/assets/images/usd.svg';
import {
    ChevronRight,
    Landmark,
    MoveUpRight,
    PartyPopper,
    Plus,
} from 'lucide-react-native';
import WalletDetailsPopUp from '../../../components/WalletDetailsPopUp';

interface Token {
    label: string;
    value: string;
    icon: any;
    balance: string;
    equivalent: string;
}

const tokens: Token[] = [
    {
        label: 'STRK',
        value: 'STRK',
        icon: STRK,
        balance: '24,9087',
        equivalent: '$689.00',
    },
    {
        label: 'USD',
        value: 'USDT',
        icon: USDT,
        balance: '$ 689.00',
        equivalent: '24,9087 STRK',
    },
];

const transactions = [
    {
        id: '1',
        type: 'You earned a reward',
        amount: '+400 USD',
        tokenAmount: '10,654 STRK',
        time: '15 March, 2025 • 12:43 PM',
        icon: <PartyPopper size={20} color="#6B82A2" />,
    },
    {
        id: '2',
        type: 'Bet placed',
        amount: '-400 USD',
        tokenAmount: '10,654 STRK',
        time: '15 March, 2025 • 12:43 PM',
        icon: <MoveUpRight size={20} color="#090909" />,
    },
    {
        id: '3',
        type: 'Wallet Funded',
        amount: '+400 USD',
        tokenAmount: '10,654 STRK',
        time: '15 March, 2025 • 12:43 PM',
        icon: <Plus size={20} color="#090909" />,
    },
];

const WalletScreen = () => {
    const [open, setOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState(tokens[0].value);
    const [isModalVisible, setModalVisible] = useState(false);

    const [items, setItems] = useState<ItemType<string>[]>(
        tokens.map((token) => ({
            label: token.label,
            value: token.value,
            icon: () => <token.icon width={20} height={20} />,
        }))
    );

    const selected = tokens.find((t) => t.value === selectedToken) || tokens[0];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Wallet</Text>
                    <TouchableOpacity style={styles.notification}>
                        <Ionicons
                            name="notifications-outline"
                            size={18}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>

                {/* Token Dropdown */}
                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={open}
                        value={selectedToken}
                        items={items}
                        setOpen={setOpen}
                        setValue={setSelectedToken}
                        setItems={setItems}
                        showArrowIcon={false}
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownList}
                        renderListItem={(props) => {
                            const item = props.item;
                            const token = tokens.find(
                                (t) => t.value === item.value
                            );
                            return (
                                <TouchableOpacity
                                    key={item.value}
                                    style={styles.dropdownItem}
                                    onPress={() => {
                                        if (item.value) {
                                            setSelectedToken(item.value);
                                            setOpen(false);
                                        }
                                    }}
                                >
                                    {token && (
                                        <token.icon width={20} height={20} />
                                    )}
                                    <Text style={styles.tokenText}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <TouchableOpacity
                        style={styles.customDropdown}
                        onPress={() => setOpen(!open)}
                    >
                        {selected && <selected.icon width={20} height={20} />}
                        <Text style={styles.tokenText}>{selected?.label}</Text>
                        <View style={styles.dropdownIcon}>
                            <Ionicons
                                name={open ? 'chevron-up' : 'chevron-down'}
                                size={16}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Wallet Balance */}

                <Text style={styles.walletTitle}>Wallet Balance</Text>

                <View style={styles.balanceContainer}>
                    <Text style={styles.balance}>
                        {selected.balance} {selected.label}
                    </Text>
                    <Text style={styles.equivalent}>{selected.equivalent}</Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actions}>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <MoveUpRight color="#090909" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.actionText}>Send</Text>
                    </View>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity
                            style={[styles.actionButton, styles.fundButton]}
                        >
                            <Plus color="#fff" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.actionText}>Fund</Text>
                    </View>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Landmark color="#090909" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.actionText}>Details</Text>
                    </View>
                </View>

                {/* Transactions */}
                <View style={styles.transactionHeader}>
                    <Text style={styles.sectionTitle}>Recent Transactions</Text>
                    <View style={styles.seeAllContainer}>
                        <Text style={styles.seeAll}>See all</Text>
                        <ChevronRight size={18} color="#9747FF" />
                    </View>
                </View>

                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <View style={styles.transactionIcon}>
                                {item.icon}
                            </View>
                            <View style={styles.transactionDetails}>
                                <Text style={styles.transactionTitle}>
                                    {item.type}
                                </Text>
                                <Text style={styles.transactionTime}>
                                    {item.time}
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={[
                                        styles.transactionAmount,
                                        {
                                            color: item.amount.includes('+')
                                                ? '#0AC660'
                                                : '#090909',
                                        },
                                    ]}
                                >
                                    {item.amount}
                                </Text>
                                <Text style={styles.transactionToken}>
                                    {item.tokenAmount}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <WalletDetailsPopUp
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '42%',
    },
    notification: {
        width: 40,
        height: 40,
        borderColor: '#DBE1E7',
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownIcon: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        width: 130,
        marginInline: 'auto',
    },
    customDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        backgroundColor: '#F8F8F8',
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    tokenText: {
        fontWeight: '500',
        fontSize: 13,
        flex: 1,
    },
    dropdown: {
        display: 'none',
    },
    dropdownList: {
        position: 'absolute',
        top: 40,
        backgroundColor: '#FFF',
        borderRadius: 50,
        borderTopWidth: 0,
        borderColor: '#DBE1E7',
        padding: 5,
        zIndex: 1000,
    },
    walletTitle: {
        textAlign: 'center',
        color: '#767676',
        fontSize: 12,
        lineHeight: 18,
        marginTop: 15,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    balanceContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    balance: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
        lineHeight: 36,
    },
    equivalent: {
        fontSize: 12,
        fontWeight: 500,
        color: '#767676',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        alignItems: 'center',
        marginVertical: 20,
    },
    actionsContainer: {
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        marginVertical: 10,
    },
    actionButton: {
        alignItems: 'center',
        padding: 18,
        backgroundColor: '#F3EBFF',
        borderWidth: 0.5,
        borderColor: '#DAC2FF',
        borderRadius: 50,
    },
    fundButton: {
        backgroundColor: '#9747FF',
        borderRadius: 50,
    },
    actionText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 500,
        color: '#090909',
    },
    transactionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sectionTitle: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
    },
    seeAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    seeAll: {
        color: '#9747FF',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    transactionIcon: {
        backgroundColor: '#F5F6FA',
        borderColor: '#DBE2E8',
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
    transactionDetails: {
        flex: 1,
        marginLeft: 10,
    },
    transactionTitle: {
        fontWeight: '500',
        color: '#090909',
        fontSize: 14,
        lineHeight: 22,
    },
    transactionTime: {
        fontSize: 12,
        color: '#767676',
        lineHeight: 18,
    },
    transactionAmount: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
    },
    transactionToken: {
        fontSize: 12,
        lineHeight: 18,
        color: '#767676',
    },
});

export default WalletScreen;
