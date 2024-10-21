import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);

    };

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впиши задачу.."

            />
            <Button
                style={styles.button}
                color="#073a45"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: "#858585",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
       paddingStart: 20,
    },

    button: {
        marginBottom: 30,
        borderRadius: 30,
        fontFamily: "Inter",
    }
});