import { useState } from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { CustomDropdownProps } from "@/app/types/all_types";

const Dropdown = ({
  title,
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  disabled = false,
  containerStyle,
  searchable = true,
}: CustomDropdownProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  // const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (currentValue: string) => {
    setSelectedValue(currentValue);
    setModalVisible(false);
    if (onValueChange) {
      onValueChange(currentValue);
    }
  };

  // const filteredOptions = options.filter((option) =>
  //   option.label.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const selectedOption =
  //   options.find((option) => option.value === selectedValue)?.label ||
  //   placeholder;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{title}</Text>

      <TouchableOpacity
        style={[styles.dropdownButton, disabled && styles.disabledButton]}
        onPress={() => !disabled && setModalVisible(true)}
        disabled={disabled}
      >
        <Text style={styles.dropdownButtonText}>{""}</Text>
        <Ionicons name="caret-down" size={20} color="#B3B3B3" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select {title}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color={Colors.light.primary} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    selectedValue === item.value && styles.selectedOptionItem,
                  ]}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedValue === item.value && styles.selectedOptionText,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {selectedValue === item.value && (
                    <Ionicons
                      name="checkmark"
                      size={20}
                      color={Colors.light.primary}
                    />
                  )}
                </TouchableOpacity>
              )}
              style={styles.optionList}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    marginBottom: 8,
    color: "#212121",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DBE2E8",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  dropdownButtonText: {
    fontSize: 16,
    fontFamily: Fonts.Inter,
    color: "#333",
  },
  disabledButton: {
    backgroundColor: "#f5f5f5",
    borderColor: "#eee",
    opacity: 0.7,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Fonts.Inter,
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontFamily: Fonts.Inter,
  },
  optionList: {
    maxHeight: "100%",
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  selectedOptionItem: {
    backgroundColor: "rgba(165, 90, 243, 0.1)",
  },
  optionText: {
    fontSize: 16,
    fontFamily: Fonts.Inter,
    color: "#333",
  },
  selectedOptionText: {
    color: Colors.light.primary,
    fontWeight: "500",
  },
});

export default Dropdown;
