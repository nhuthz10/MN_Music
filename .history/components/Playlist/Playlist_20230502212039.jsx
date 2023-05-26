import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import Header from '../Header/Header';

const Playlist = () => {
  return (
    <ScrollView style={styles.listSong}>
      <Header />

      <View style={styles.listSongInfor}>
        <View style={styles.listSongInforImg}>
          <Image
            source={{
              uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg',
            }}
            style={styles.listSongInforImgImg}
          />
        </View>
        <Text style={styles.listSongInfor__heading}>Playlist Name</Text>
        <Text style={styles.listSongInfor__date}>Date Created: 06/01/2022</Text>
        <Text style={styles.listSongInfor__singers}>
          Singers: John Doe, Jane Doe
        </Text>
        <Text style={styles.listSongInfor__liked}>Likes: 136</Text>
      </View>

      <View style={styles.listSongContent}>
        <Text style={styles.listSongContent__desc}>
          Playlist Description Here
        </Text>
        <ScrollView style={styles.listSongContentList}>
          <View style={styles.generalItem}>
            <View style={styles.generalItemInfor}>
              <View style={styles.generalItemInforImg}>
                <Image
                  source={require('path/to/image')}
                  style={styles.generalItemInforImgImg}
                />
              </View>
              <View style={styles.generalItemInforSong}>
                <Text style={styles.generalItemInforSong__name}>Song Name</Text>
                <Text style={styles.generalItemInforSong__singer}>
                  Artist Name
                </Text>
              </View>
            </View>
            <Text style={styles.generalItem__album}>Album Name</Text>
            <Text style={styles.generalItem__time}>4:05</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Playlist;
