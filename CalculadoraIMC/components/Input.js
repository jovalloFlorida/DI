import React from "react"
import { Input, Center, NativeBaseProvider } from "native-base"

export function Formulario(props) {

    const { textInput } = props
    return (
        <Input
            mx="3"
            placeholder={textInput}
            w={{
                base: "75%",
                md: "25%",
            }}
        />
    )
}

const styles = StyleSheet.create({

    button: {

        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 15,
        width: '60%'

    },
    buttonText: {
        alignItems: 'center'
    },
})