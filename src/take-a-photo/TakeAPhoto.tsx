import React, {useContext} from 'react';
import {Alert, StyleSheet, View} from "react-native";
import {Camera} from "expo-camera";
import {TakeAPhotoContext} from "./context/TakeAPhotoContext";
import StartCamera from "./StartCamera";
import CameraBlock from "./CameraBlock";
import CameraPreview from "./CameraPreview";

const TakeAPhoto = () => {
    const context = useContext(TakeAPhotoContext);

    const startCameraHandler = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
            context.setStartCamera(true);
        } else {
            Alert.alert('Access denied')
        }
    }

    const retakePictureHandler = () => {
        context.setCapturedImage(null);
        context.setPreviewVisible(false);
    }

    const savePhotoHandler = () => {
        console.log(context.capturedImage);
        context.setStartCamera(false);
        context.setPreviewVisible(false);
        context.setCapturedImage(null);
    }

    return (
        <View style={styles.takeAPhoto}>
            {context.startCamera ? context.previewVisible ?
                <CameraPreview photo={context.capturedImage} retakePicture={retakePictureHandler}
                               savePhoto={savePhotoHandler}/> :
                <CameraBlock/> : <StartCamera pressStartHandler={startCameraHandler} title={'Lets start'}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    takeAPhoto: {
        flex: 1,
        width: '100%',
    },
});

export default TakeAPhoto;
