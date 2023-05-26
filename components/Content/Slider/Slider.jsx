import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const Slider = ({items, onItemPress}) => {
  return (
    <View style={styles.slider}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => {
          return (
            <TouchableOpacity
              key={item.encodeId}
              style={styles.sliderListItem}
              onPress={() => onItemPress(item)}>
              <Image
                style={styles.sliderListItem__img}
                source={{
                  uri: item.banner,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Slider;
