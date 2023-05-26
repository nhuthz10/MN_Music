import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  section__more: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#757575',
  },
  sectionListItem: {
    width: '48%',
    marginBottom: 24,
  },
  sectionListItemImg: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    overflow: 'hidden',
    borderRadius: 5,
  },
  sectionListItemImgHover: {
    transform: [{scale: 1.15}],
  },
  sectionListItemImg__inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  sectionListItemImg__image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover', // to ensure the image covers the whole area and doesn't get stretched
  },
  sectionListItem__heading: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212121',
    flexWrap: 'wrap',
  },
  sectionListItem__headingHover: {
    color: '#7B1FA2',
  },
  sectionListItem__desc: {
    fontSize: 14,
    lineHeight: 20,
    color: '#757575',
  },
});
export default styles;
