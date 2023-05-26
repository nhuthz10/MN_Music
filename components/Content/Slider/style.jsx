import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  sliderListItem: {
    flex: 1,
    cursor: 'pointer',
    marginHorizontal: 10,
    transition: 'all 0.2s ease',
    height: 100,
  },
  sliderListItem__img: {
    width: '100%',
    height: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
});

export default styles;
