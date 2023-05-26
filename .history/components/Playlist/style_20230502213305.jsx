import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    marginTop: 50,
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
    backgroundColor: 'white',
  },
  generalItem: {
    position: 'relative',
    display: 'flex',
    // alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    // backgroundColor: 'black',
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
    display: 'flex',
    flexDirection: 'column',
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
});
export default styles;
