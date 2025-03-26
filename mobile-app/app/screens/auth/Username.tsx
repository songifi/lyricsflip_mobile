import React, { useState } from "react";
import { View } from "react-native";
import Header from "@/app/components/auth/Header";
import WalletConnection from "@/app/components/auth/WalletConnection";
import Button from "@/app/components/form/Button";
import Input from "@/app/components/form/Input";
import { router } from "expo-router";

const Username = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        title="CREATE USERNAME"
        subtitle="Choose a unique username that represents you."
      />
      <Input
        label="Enter Username"
        placeholder="johnabrazzi99"
        validationMessage="Username available"
      />

      <View style={{ flex: 1, margin: "auto", width: "90%" }}>
        <Button
          title={"Create Username"}
          //  onPress={() => null}
          onPress={() => router.push("/(drawer)/(tabs)")}
        />
      </View>
    </View>
  );
};

export default Username;
