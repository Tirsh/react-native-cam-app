import {StyleSheet, View} from 'react-native';
import {TakeAPhotoContainer} from "./src/take-a-photo/TakeAPhotoContainer";

export default function App() {
    return (
        <View style={styles.container}>
            <TakeAPhotoContainer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
});
