import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const ThemeButton = ({title, pressHandler, customStyles}) => {
    return (
        <TouchableOpacity onPress={pressHandler}>
            <LinearGradient style={[styles.button, customStyles]}
                            colors={["rgba(189, 189, 189, 0.3)", "rgba(189, 189, 189, 0.3)", "#009688"]}>
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#39A298",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 5,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        position: 'relative',
        zIndex: 3
    },
    text: {
        color: "#fff",
        fontFamily: 'montserratMed',

    }
});

export default ThemeButton;
