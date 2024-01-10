import {createContext} from "react";
import {CameraCapturedPicture, CameraType, FlashMode} from "expo-camera";

interface TakeAPhotoContextProps {
    startCamera: boolean;
    setStartCamera: (value: boolean) => void;
    previewVisible: boolean;
    setPreviewVisible: (value: boolean) => void;
    capturedImage: CameraCapturedPicture | null;
    setCapturedImage: (picture: CameraCapturedPicture | null) => void;
    cameraType?: CameraType;
    setCameraType?: (type: CameraType) => void;
    flashMode?: FlashMode;
    setFlashMode?: (mode: FlashMode) => void;
}

export const TakeAPhotoContext = createContext<TakeAPhotoContextProps>({
        capturedImage: null, previewVisible: false, setCapturedImage(): void {
        }, setPreviewVisible(): void {
        }, setStartCamera(): void {
        }, startCamera: false
    } )
;
