import TakeAPhotoProvider from "./context/TakeAPhotoProvider";
import TakeAPhoto from "./TakeAPhoto";
import React from "react";

export const TakeAPhotoContainer = ():React.ReactElement => {
    return (
        <TakeAPhotoProvider>
            <TakeAPhoto/>
        </TakeAPhotoProvider>
    )
}