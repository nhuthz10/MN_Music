import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const SectionItem = ({id, url, title, singers}) => {
  function loadSingers(artists) {
    if (!artists) return null;
    const len = artists.length - 1;

    return artists.map((artist, index) => {
      return (
        <View>
          <Text style={styles.alias} name={artist.alias}>
            {index !== len ? artist.name + ', ' : artist.name}
          </Text>
        </View>
      );
    });
  }

  return (
    <TouchableOpacity style={styles.sectionListItem} id={id}>
      <View style={styles.sectionListItemImg} id={id}>
        <View style={styles.sectionListItemImg__inner}>
          <Image
            source={{uri: url}}
            resizeMode="cover"
            style={styles.sectionListItemImg__image}
          />
        </View>
      </View>
      <View>
        <Text style={styles.sectionListItem__heading}>{title}</Text>
        <Text style={styles.sectionListItem__desc}>{loadSingers(singers)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionItem;
