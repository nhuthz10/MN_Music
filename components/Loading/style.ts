import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9dbdb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingDesc: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    circle: {
        width: 46,
        height: 46,
        marginTop: 8,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#ff6bcb',
        borderBottomColor: '#ffa400',
    },
});

export default styles;