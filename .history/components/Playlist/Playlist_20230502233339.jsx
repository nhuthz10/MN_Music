import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import Header from '../Header/Header';

const Playlist = ({id}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  let time = null;

  function loadSingers(artists) {
    if (!artists) return null;
    const len = artists.length - 1;

    return artists.map((artist, index) => {
      return (
        <Text key={index} style={styles.alias} name={artist.alias}>
          {index !== len ? artist.name + ', ' : artist.name}
        </Text>
      );
    });
  }

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

  const date = new Date(data.contentLastUpdate * 1000);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth()}`.slice(-2);
  time = `${day}/${month}/${date.getFullYear()}`;

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
        <Text style={styles.listSongInfor__heading}>{data.title}</Text>
        <Text style={styles.listSongInfor__date}>Cập nhật: {time}</Text>
        <Text style={styles.listSongInfor__singers}>
          Ca sĩ: {loadSingers(data.artists)}
        </Text>
        <Text style={styles.listSongInfor__liked}>Likes: {data.like}</Text>
      </View>

      <View style={styles.hr} />

      <View style={styles.listSongContent}>
        <Text style={styles.listSongContent__desc}>{data.sortDescription}</Text>
        <ScrollView style={styles.listSongContentList}>
          {data.song.items.map((item, index) => {
            return (
              <View style={styles.generalItem}>
                <View style={styles.generalItemInfor}>
                  <View style={styles.generalItemInforImg}>
                    <Image
                      source={{
                        uri: item.thumbnailM,
                      }}
                      style={styles.generalItemInforImgImg}
                    />
                  </View>
                  <View style={styles.generalItemInforSong}>
                    <Text style={styles.generalItemInforSong__name}>
                      {item.title}
                    </Text>
                    <Text style={styles.generalItemInforSong__singer}>
                      {item.album && loadSingers(item.album.artists)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Playlist;
