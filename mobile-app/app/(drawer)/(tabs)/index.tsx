import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Button from "@/app/components/form/Button";
import { router } from "expo-router";

export default function index() {
  // const navigate = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Index</Text>
      <Button
        title="Takes To The Quick Game Form"
        onPress={() => router.push("/screens/quickGameForm/QuickGameForm")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
