import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f9dbdb',
        paddingHorizontal: 12,
    },
    chart: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FF6969',
        marginTop: 6,
    },
    generalItem: {
        paddingVertical: 10,
        borderRadius: 5,
    },
    generalItemInfor: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        marginRight: 10,
    },
    generalItemInforImg: {
        borderRadius: 5,
    },
    generalItemInforImgImg: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    generalItemInforSong: {
        flexDirection: 'column',
        flex: 1,
    },
    generalItemInforSong__name: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    generalItemInforSong__singer: {
        lineHeight: 28,
    },
    generalItemInforSong__wapTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    Vip: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        marginLeft: 6,
        paddingHorizontal: 4,
        borderRadius: 4,
    },
});

export default styles;