import React, {useMemo} from "react";
import {CameraCapturedPicture, CameraType, FlashMode} from "expo-camera";
import {TakeAPhotoContext} from "./TakeAPhotoContext";

const TakeAPhotoProvider:React.FC = ({children}) => {
    const [startCamera, setStartCamera] = React.useState<boolean>(false);
    const [previewVisible, setPreviewVisible] = React.useState<boolean>(false);
    const [capturedImage, setCapturedImage] = React.useState<CameraCapturedPicture>(null);
    const [cameraType, setCameraType] = React.useState<CameraType>(CameraType.back);
    const [flashMode, setFlashMode] = React.useState<FlashMode>(FlashMode.off);

    const defaultProps = useMemo(() => ({
        startCamera,
        setStartCamera,
        previewVisible,
        setPreviewVisible,
        capturedImage,
        setCapturedImage,
        cameraType,
        setCameraType,
        flashMode,
        setFlashMode,
    }), [startCamera, previewVisible, capturedImage, cameraType, flashMode]);

    return (
        <TakeAPhotoContext.Provider value={defaultProps}>
            {children}
        </TakeAPhotoContext.Provider>
    );
};

export default TakeAPhotoProvider;