import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s ease',
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  heading: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 25,
    fontSize: 18,
    fontWeight: '700',
    borderRadius: 999,
    color: '#000',
    backgroundColor: '#f8e71c',
    shadowColor: '#64646f',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
    pointerEvents: 'none',
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#64646f',
    pointerEvents: 'none',
  },
});

export default styles;
