import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hr: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  listSong: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100%',
    padding: 12,
    backgroundColor: '#f9dbdb',
  },
  listSongInfor: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  listSongInforImg: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    marginVertical: 12,
    borderRadius: 5,
  },
  listSongInforImgImg: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  listSongInfor__heading: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 36,
    color: 'black',
  },
  listSongInfor__date: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
  },
  listSongInfor__singers: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
  },
  listSongInfor__liked: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
  },
  listSongContent: {
    // marginLeft: 330,
    // marginTop: 40,
    paddingBottom: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexGrow: 1,
  },
  listSongContent__desc: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: '#32323d',
    textAlign: 'center',
  },
  listSongContentList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 14,
  },
  generalItem: {
    position: 'relative',
    display: 'flex',
    padding: 10,
    borderRadius: 5,
  },
  generalItemInfor: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    marginRight: 10,
  },
  generalItemInforImg: {
    position: 'relative',
    borderRadius: 5,
  },
  generalItemInforImgImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  generalItemInforSong: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  generalItemInforSong__wapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
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
  generalItemInforSong__name: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 28,
    color: 'black',
  },
  generalItemInforSong__singer: {
    lineHeight: 28,
  },
  btn_back: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    left: 0,
    height: 50,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9dbdb',
    padding: 10,
    elevation: 5,
    shadowColor: '#64646f',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
  },
  header__title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default styles;
