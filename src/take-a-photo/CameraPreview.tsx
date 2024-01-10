import {ImageBackground, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {CameraCapturedPicture} from "expo-camera";
import React from "react";

interface CameraPreviewProps {
    photo: CameraCapturedPicture | null;
    retakePicture: () => void;
    savePhoto: () => void;
}

const CameraPreview:React.FC<CameraPreviewProps> = ({photo, retakePicture, savePhoto}) => {
    return (
        <View style={styles.cameraPreview}>
            <ImageBackground
                source={{uri: (photo && photo.uri) as string}}
                style={styles.image}
            >
                <View style={styles.controlsCanvas}>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            onPress={retakePicture}
                            style={styles.button}
                        >
                            <Text style={styles.text}>
                                Re-take
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={savePhoto}
                            style={styles.button}
                        >
                            <Text style={styles.text}>
                                Save photo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    cameraPreview: {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
    },
    image: {
        flex: 1
    },
    controlsCanvas: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        justifyContent: 'flex-end'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: 130,
        height: 40,
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        color: '#fff',
        fontSize: 24
    }
})

export default CameraPreview;