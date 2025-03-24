import QuickGameForm from "./QuickGameForm";
import { Fonts } from "@/constants/Fonts";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const QuickGame = () => {
    return (
        <>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingTop: 25,
                paddingBottom: 20,
            }} >
                <View>
                    <Text style={styles.heading} >Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Text>
                </View>

                <QuickGameForm />
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 14,
        fontWeight: "400",
        color: "#120029",
        marginBottom: 20,
        fontFamily: Fonts.Inter,
    },
})
export default QuickGame;