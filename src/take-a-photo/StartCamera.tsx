import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";

interface StartCameraProps {
    pressStartHandler: () => void,
    title: string
}

const StartCamera:React.FC<StartCameraProps> = ({pressStartHandler, title}) => {
    return (
        <View style={styles.startCamera}>
            <TouchableOpacity
                onPress={pressStartHandler}
                style={styles.button}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    startCamera: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 130,
        borderRadius: 4,
        backgroundColor: '#14274e',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StartCamera;
