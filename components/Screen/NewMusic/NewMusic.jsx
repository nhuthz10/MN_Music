import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Header from '../../Header/Header';
import Error from '../../Error/Error';
import PlayMusic from '../../PlayMusic/PlayMusic';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loading from '../../Loading/Loading';

const NewMusic = () => {
  const [loading, setLoading] = useState(true);
  const [fullData, setFullData] = useState(null);
  const [listSong, setListSong] = useState([]);
  const [listSongPlayMusic, setListSongPlayMusic] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [showVip, setShowVip] = useState(false);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);
      const response = await fetch(
        'https://api-music-nine.vercel.app/api/newreleasechart',
        //'https://cors-api-zingmp3.vercel.app/api/newreleasechart',
        //`https://apizingmp3.vercel.app/api/newreleasechart`,
      );
      const {data} = await response.json();
      let listIdSong;
      if (data) {
        listIdSong = data.items.reduce((acc, song) => {
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
      setFullData(data);
      setListSong(fullInfoSong);
      setListSongPlayMusic(fullListSong);
      setLoading(false);
    }
    loadContent();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleHide = () => {
    setShowVip(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      {showMiniPlayer && (
        <PlayMusic listPlaySong={listSongPlayMusic} indexSong={currentSong} />
      )}
      {showVip && <Error showOrHide={showVip} HandleonPress={handleHide} />}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 150}}>
        <Image style={styles.banner} source={{uri: fullData.banner}} />
        <View>
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
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        color:
                          index === 0
                            ? '#4a90e2'
                            : index === 1
                            ? '#50e3c2'
                            : index === 2
                            ? '#e35050'
                            : 'black',
                        fontSize: 30,
                        fontWeight: 700,
                        textAlign: 'center',
                        width: 60,
                      }}>
                      {index + 1}
                    </Text>
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
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        color:
                          index === 0
                            ? '#4a90e2'
                            : index === 1
                            ? '#50e3c2'
                            : index === 2
                            ? '#e35050'
                            : 'black',
                        fontSize: 30,
                        fontWeight: 700,
                        width: 60,
                        textAlign: 'center',
                      }}>
                      {index + 1}
                    </Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewMusic;
