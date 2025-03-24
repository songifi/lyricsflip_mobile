
import Instruction from "@/app/components/Instruction";
import { Fonts } from "@/constants/Fonts";
import { StyleSheet, Text, View } from "react-native";
import Button from "@/app/components/form/Button";
import Dropdown from "@/app/components/DropDown";
import React from "react";

const QuickGameForm = () => {
    const data = [
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' },
    ];

    return (
        <>
            <View style={styles.container} >
                <View style={styles.item_container}>
                    <Text style={styles.label}>
                        Genre
                    </Text>

                    <Dropdown onSelect={() => { }} data={data}
                        placeholder="" styles={{
                            container: {
                                marginTop: 8
                            }
                        }} />
                </View>
                <View style={styles.item_container}>
                    <Text style={styles.label}>
                        Difficulty Level
                    </Text>

                    <Dropdown onSelect={() => { }} data={data}
                        placeholder="" styles={{
                            container: {
                                marginTop: 8
                            }
                        }} />
                </View>
                <View style={styles.item_container}>
                    <Text style={styles.label}>
                        Duration
                    </Text>

                    <Dropdown onSelect={() => { }} data={data}
                        placeholder="" styles={{
                            container: {
                                marginTop: 8
                            }
                        }} />
                </View>

                <Instruction description="A card displaying a lyric from a song will appear along with a list of possible answers. Your goal is to select the correct answer as quickly as possible." />

                <View style={styles.btn_container}>
                    <Button title="Start Game" onPress={() => null} />
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    item_container: {
        width: "100%",
        marginVertical: 16
    },
    label: {
        fontSize: 14,
        color: "#212121",
        fontFamily: Fonts.Inter,
        textAlign: "left",
        fontWeight: "500"
    },
    btn_container:{
        width:"100%",
        marginTop:45
    }
})
export default QuickGameForm;