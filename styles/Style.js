import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        width: 130,
        borderRadius: 4,
        backgroundColor: '#14274e',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    camera: {flex: 1, width:"100%"},
    cameraButton: {
        position: 'absolute',
        margin: 'auto',
        alignSelf: 'center',
        width: 70,
        height: 70,
        bottom: 25,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export { styles }