import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Easing,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Fonts } from '@/constants/Fonts';

// Define TypeScript Interfaces
interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownStyles {
  container?: ViewStyle;
  selectionBox?: ViewStyle;
  selectionText?: TextStyle;
  dropdownContainer?: ViewStyle;
  item?: ViewStyle;
  itemText?: TextStyle;
}

interface AnimatedDropdownProps {
  styles?: DropdownStyles;
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
}

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({
  styles = {},
  data = [],
  onSelect,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  const rotateIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={[styles.container, localStyles.container]}>
      {/* Selection Box */}
      <TouchableOpacity style={[localStyles.selectionBox, styles.selectionBox]} onPress={toggleDropdown}>
        <Text style={[localStyles.selectionText, styles.selectionText]}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
          <MaterialIcons name="arrow-drop-down" size={24} color="#B3B3B3" />
        </Animated.View>
      </TouchableOpacity>

      {/* Dropdown List */}
      {isOpen && (
        <Animated.View style={[localStyles.dropdownContainer, styles.dropdownContainer]}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[localStyles.item, styles.item]}
              onPress={() => handleSelect(item)}
            >
              <Text style={[localStyles.itemText, styles.itemText]}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

// Styles
const localStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  selectionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#DBE2E8',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  selectionText: {
    fontSize: 13,
    color: '#333',
    fontFamily: Fonts.Inter
  },
  dropdownContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#DBE2E8',
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#555',
  },
});

export default AnimatedDropdown;