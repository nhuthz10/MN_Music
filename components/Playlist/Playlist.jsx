import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import PlayMusic from '../PlayMusic/PlayMusic';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const Playlist = ({navigation, route}) => {
  const id = route.params.idPlayList;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [listSong, setListSong] = useState([]);
  const [listSongPlayMusic, setListSongPlayMusic] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [showVip, setShowVip] = useState(false);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  let time = null;
  if (!id) {
    // eslint-disable-next-line no-const-assign
    id = 'ZWZB969E';
  }

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
      setLoading(true);
      const response = await fetch(
        `https://api-music-nine.vercel.app/api/detailplaylist?id=${id}`,
        //`https://cors-api-zingmp3.vercel.app/api/detailplaylist?id=${id}`,
        //`https://apizingmp3.vercel.app/api/detailplaylist?id=${id}`,
      );
      const {data} = await response.json();

      let listIdSong;
      if (data && data.song && data.song.items) {
        listIdSong = data.song.items.reduce((acc, song) => {
          acc.push(song.encodeId);
          return acc;
        }, []);
      }

      const newInfoSong = await Promise.all(
        listIdSong.map(async songId => {
          const response = await fetch(
            `https://api-music-nine.vercel.app/api/infosong?id=${songId}`,
            //`https://cors-api-zingmp3.vercel.app/api/infosong?id=${songId}`,
            //`https://apizingmp3.vercel.app/api/infosong?id=${songId}`,
          );
          const {data} = await response.json();
          return {
            id: data.encodeId,
            title: data.title,
            artist: data.artistsNames,
            artwork: data.thumbnailM,
          };
        }),
      );
      const fullInfoSong = await Promise.all(
        newInfoSong.map(async song => {
          const response = await fetch(
            `https://api-music-nine.vercel.app/api/song?id=${song.id}`,
            //`https://cors-api-zingmp3.vercel.app/api/song?id=${song.id}`,
            //`https://apizingmp3.vercel.app/api/song?id=${song.id}`,
          );
          const {data} = await response.json();
          if (data) {
            return {
              ...song,
              url: data['128'],
              err: 0,
            };
          } else {
            return {
              ...song,
              url: null,
              err: 1,
            };
          }
        }),
      );
      const fullListSong = fullInfoSong.filter(song => song.url !== null);
      setData(data);
      setListSong(fullInfoSong);
      setListSongPlayMusic(fullListSong);
      setLoading(false);
    }
    loadContent();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const date = new Date(data.contentLastUpdate * 1000);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth()}`.slice(-2);
  time = `${day}/${month}/${date.getFullYear()}`;

  const handleOnPressBack = () => {
    navigation.navigate('Content');
  };

  const handleHide = () => {
    setShowVip(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {showMiniPlayer && (
        <PlayMusic listPlaySong={listSongPlayMusic} indexSong={currentSong} />
      )}
      {showVip && <Error showOrHide={showVip} HandleonPress={handleHide} />}
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn_back} onPress={handleOnPressBack}>
          <AntDesign name="left" size={24} color={'#32323d'} />
        </TouchableOpacity>
        <Text style={styles.header__title}>{data.title}</Text>
      </View>
      <ScrollView
        style={styles.listSong}
        contentContainerStyle={{paddingBottom: 180}}>
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
          <Text style={styles.listSongContent__desc}>
            {data.sortDescription}
          </Text>
          <View style={styles.listSongContentList}>
            {listSong.map((item, index) => {
              if (item.err === 0) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.generalItem}
                    onPress={() => {
                      setCurrentSong(item.id);
                      setShowMiniPlayer(true);
                      let newlist = [...listSongPlayMusic];
                      setListSongPlayMusic(newlist);
                      //console.log(item.id);
                    }}>
                    <View style={styles.generalItemInfor}>
                      <View style={styles.generalItemInforImg}>
                        <Image
                          source={{
                            uri: item.artwork,
                          }}
                          style={styles.generalItemInforImgImg}
                        />
                      </View>
                      <View style={styles.generalItemInforSong}>
                        <Text style={styles.generalItemInforSong__name}>
                          {item.title}
                        </Text>
                        <Text style={styles.generalItemInforSong__singer}>
                          {item.artist}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.generalItem}
                    onPress={() => {
                      setShowVip(true);
                    }}>
                    <View style={styles.generalItemInfor}>
                      <View style={styles.generalItemInforImg}>
                        <Image
                          source={{
                            uri: item.artwork,
                          }}
                          style={styles.generalItemInforImgImg}
                        />
                      </View>
                      <View style={styles.generalItemInforSong}>
                        <View style={styles.generalItemInforSong__wapTitle}>
                          <Text style={styles.generalItemInforSong__name}>
                            {item.title}
                          </Text>
                          <Text style={styles.Vip}>VIP</Text>
                        </View>
                        <Text style={styles.generalItemInforSong__singer}>
                          {item.artist}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Playlist;
