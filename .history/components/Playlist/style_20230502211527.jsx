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
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    color: 'black',
  },
  listSongInfor__date: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },
  listSongInfor__singers: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },
  listSongInfor__liked: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },
  listSongContent: {
    marginLeft: 330,
    flexGrow: 1,
  },
  listSongContent__desc: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: 'gray',
  },
  listSongContentList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 14,
  },
  listSongContentListHeading: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 14,
    padding: 10,
  },
  listSongContentListHeading__title: {
    width: '33%',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  generalItem: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  generalItemInfor: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    width: '33%',
  },
  generalItemInforImg: {
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden',
  },
  generalItemInforImgImg: {
    width: 40,
    height: 40,
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
  generalItem__album: {
    width: '33%',
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },
  generalItem__time: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },
});
export default styles;
