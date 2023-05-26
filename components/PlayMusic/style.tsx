import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    miniPlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#D14D72',
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header__img: {
        height: 44,
        width: 44,
    },
    header__content: {
        marginLeft: 14,
    },
    header__contentTitile: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    header__contentArtists: {
        fontSize: 16
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginHorizontal: 16,
    },
    slider: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 6,
    },
    progressBar: {
        height: 16,
        flex:1,
    },
    progressLableText: {
        fontSize: 16,
    }
});

export default styles;