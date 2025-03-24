import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const Bulb = require("@/assets/images/bulb.png")
interface InstructionProps {
    description: string
}
const Instruction = ({ description }: InstructionProps) => {
    return (
        <>
            <View style={styles.container} >
                <View style={styles.heading_container} >
                    <Image source={Bulb} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.heading}>Instruction</Text>
                </View>

                <View style={styles.description_container} >
                    <Text style={styles.description} >{description}</Text>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#F0F0F0",
        borderRadius: 12,
        padding: 16,
    },
    icon: {
        width: 20,
        height: 20
    },
    heading_container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,

    },
    heading: {
        fontFamily: Fonts.Inter,
        fontWeight: "500",
        fontSize: 12,
        color: Colors.light.primary,
        textTransform: "uppercase",
        width: "100%"
    },
    description_container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#DBE1E7",
        padding: 16,
        borderRadius: 8,
        marginTop: 8
    },
    description: {
        color: "#08090A",
        fontFamily: Fonts.Inter,
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 28
    }
})
export default Instruction;