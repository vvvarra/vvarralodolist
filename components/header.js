import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Header(){
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#073a45",

    },
    text: {
        color: "#FFFFFF",
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    },
});