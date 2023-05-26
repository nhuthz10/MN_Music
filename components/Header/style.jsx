import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: '#f9dbdb',
    elevation: 5,
    shadowColor: '#64646f',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
  },
  icon: {
    fontSize: 20,
    color: '#696969',
  },
  input: {
    // flex: 1,
    borderRadius: 999,
    fontFamily: 'Inter',
    fontSize: 16,
    height: 44,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    backgroundColor: '#ecd0d0',
  },
  popup: {
    position: 'absolute',
    right: 0,
    top: 70,
    width: 240,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fbe6e6',
    color: '#696969',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.16,
    shadowRadius: 36,
    elevation: 5,
  },
  popupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'transparent',
  },
  popupIcon: {
    fontSize: 20,
    minWidth: 20,
    marginHorizontal: 10,
    color: '#696969',
  },
  popupText: {
    fontSize: 14,
    color: '#32323d',
  },
  logout: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
});
export default styles;
