import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import Header from '../Header/Header';

const Playlist = ({id}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadContent() {
      console.log(`https://zing-mp3-api.vercel.app/api/playlist/${id}`);
      const response = await fetch(
        `https://zing-mp3-api.vercel.app/api/playlist/${id}`,
      );
      const {data} = await response.json();
      setData(data);

      setLoading(false);
    }
    loadContent();
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView style={styles.listSong}>
      <Header />

      <View style={styles.listSongInfor}>
        <View style={styles.listSongInforImg}>
          <Image
            source={{
              uri: data.thumbnailM,
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
        <Text style={styles.listSongContent__desc}>{data.sortDescription}</Text>
        <ScrollView style={styles.listSongContentList}>
          <View style={styles.generalItem}>
            <View style={styles.generalItemInfor}>
              <View style={styles.generalItemInforImg}>
                <Image
                  source={{
                    uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg',
                  }}
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
          </View>

          <View style={styles.generalItem}>
            <View style={styles.generalItemInfor}>
              <View style={styles.generalItemInforImg}>
                <Image
                  source={{
                    uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg',
                  }}
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
          </View>

          <View style={styles.generalItem}>
            <View style={styles.generalItemInfor}>
              <View style={styles.generalItemInforImg}>
                <Image
                  source={{
                    uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg',
                  }}
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
          </View>

          <View style={styles.generalItem}>
            <View style={styles.generalItemInfor}>
              <View style={styles.generalItemInforImg}>
                <Image
                  source={{
                    uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg',
                  }}
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
          </View>

          <View style={styles.generalItem}>
            <View style={styles.generalItemInfor}>
              <View style={styles.generalItemInforImg}>
                <Image
                  source={{
                    uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg',
                  }}
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
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Playlist;
