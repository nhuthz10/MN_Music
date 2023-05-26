import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  section: {
    position: 'relative',
    marginTop: 15,
    paddingHorizontal: 12,
  },
  section__heading: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // paddingHorizontal: 12,
    marginBottom: 20,
  },
});
export default styles;
