import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function CustomButton(props) {

    const { color, onPress, text, textColor } = props 
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: color
            }}
            onPress = { onPress }
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: textColor,
                    fontWeight: 'bold'
                }}

            >
                {text}
            </Text>
        </TouchableOpacity>
    )

}


export function Buttons(props) {

    const { onPress, text } = props 
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: '#0a0a0a'
            }}
            onPress = { onPress }
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}

            >
                {text}
            </Text>
        </TouchableOpacity>
    )

}

export function OtherButtons(props) {

    const { onPress, text } = props 
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: '#f1f1f1'
            }}
            onPress = { onPress }
        >
            <Text
                style={{
                    ...styles.buttonText,
                    
                }}

            >
                {text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    button: {

        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 15,
        width: '60%',
        borderColor: 'blue',
        borderWidth: 1,

    },
    buttonText: {
        alignItems: 'center'
    },
})


