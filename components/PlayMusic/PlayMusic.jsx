import React, {useEffect, useState} from 'react';
import styles from './style';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
import {setupPlayer, addTrack} from '../../service';
import Loading from '../Loading/Loading';

const PlayMusic = ({listPlaySong, indexSong}) => {
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const [repeatMode, setRepeatMode] = useState('off');
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkSetup, setCheckSetup] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  //const [listRandom, setListRandom] = useState([]);

  //setUp TrackPlayer
  useEffect(() => {
    //console.log(listPlaySong);
    async function setup() {
      setCheckSetup(false);
      let isSetup = await setupPlayer();
      if (isSetup) {
        if (listPlaySong.length > 0) {
          await TrackPlayer.reset();
          await addTrack(listPlaySong);

          TrackPlayer.setRepeatMode(RepeatMode.Queue);
          //console.log(await TrackPlayer.getQueue());
        }
      }
      setCheckSetup(true);
      setLoading(false);
    }
    setup();
  }, [listPlaySong]);

  //handleChangeSong
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (checkSetup) {
      switch (event.type) {
        case Event.PlaybackTrackChanged:
          const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
          setTrack(playingTrack);
          break;
      }
    }
  });

  //next
  const skipToNext = async () => {
    if (checkSetup) {
      await TrackPlayer.skipToNext();
    }
  };
  // Previous
  const skipToPrevious = async () => {
    if (checkSetup) {
      await TrackPlayer.skipToPrevious();
    }
  };

  // Play and Pause
  const togglePlayback = async playback => {
    if (checkSetup) {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      if (currentTrack !== null) {
        if (playback === State.Paused || playback === State.Ready) {
          await TrackPlayer.play();
        } else {
          await TrackPlayer.pause();
        }
      }
    }
  };
  // Repeat
  const handleRepeat = () => {
    if (checkSetup) {
      if (repeatMode === 'off') {
        TrackPlayer.setRepeatMode(RepeatMode.Track);
        setRepeatMode('track');
      }
      if (repeatMode === 'track') {
        //TrackPlayer.setRepeatMode(RepeatMode.Off);
        TrackPlayer.setRepeatMode(RepeatMode.Queue);
        setRepeatMode('off');
      }
      // if (repeatMode === 'repeat') {
      //   TrackPlayer.setRepeatMode(RepeatMode.Track);
      //   setRepeatMode('track');
      // }
    }
  };

  //Skip to Song
  // indexSong = 1;
  useEffect(() => {
    if (checkSetup) {
      async function skipToSong() {
        if (indexSong) {
          const index = await listPlaySong.findIndex(
            song => song.id === indexSong,
          );
          //console.log(index);
          await TrackPlayer.skip(index);
          await TrackPlayer.play();
        }
      }
      skipToSong();
    }
  }, [checkSetup, indexSong, listPlaySong]);

  //Random
  const toggleRandom = async () => {
    setIsRandom(!isRandom);
  };
  // async function Random() {
  //   //const getCurrentTrack = await TrackPlayer.getCurrentTrack();
  //   let newlistSong = [...listPlaySong];
  //   const shuffledList = newlistSong.sort(() => Math.random() - 0.5);
  //   await TrackPlayer.reset();
  //   await addTrack(shuffledList);
  //   //let currentID = listPlaySong[getCurrentTrack].id;
  //   //let currentSong = shuffledList.findIndex(song => song.id === currentID);
  //   //await TrackPlayer.skip(currentSong);
  //   await TrackPlayer.play();
  //   //setListRandom(shuffledList);
  // }
  // async function noRandom() {
  //   //const getCurrentTrack = await TrackPlayer.getCurrentTrack();
  //   await TrackPlayer.reset();
  //   await addTrack(listPlaySong);
  //   //let currentID = listRandom[getCurrentTrack].id;
  //   //let currentSong = listPlaySong.findIndex(song => song.id === currentID);
  //   //await TrackPlayer.skip(currentSong);
  //   await TrackPlayer.play();
  // }

  // useEffect(() => {
  //   if (checkSetup) {
  //     if (isRandom) {
  //       Random();
  //     } else {
  //       noRandom();
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isRandom]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.miniPlay}>
      <View style={styles.header}>
        {track?.artwork && (
          <Image style={styles.header__img} source={{uri: track?.artwork}} />
        )}
        <View style={styles.header__content}>
          <Text style={styles.header__contentTitile}>{track?.title}</Text>
          <Text style={styles.header__contentArtists}>{track?.artist}</Text>
        </View>
      </View>
      <View style={styles.slider}>
        <Text style={styles.progressLableText}>
          {new Date(progress.position * 1000)
            .toLocaleTimeString()
            .substring(3, 8)}
        </Text>
        <Slider
          style={styles.progressBar}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          minimumTrackTintColor="pink"
          maximumTrackTintColor="white"
          thumbTintColor="pink"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <Text style={styles.progressLableText}>
          {new Date(progress.duration * 1000)
            .toLocaleTimeString()
            .substring(3, 8)}
        </Text>
      </View>
      <View style={styles.control}>
        <TouchableOpacity style={styles.btn} onPress={toggleRandom}>
          {/* <Entypo
            name="shuffle"
            color={isRandom ? 'pink' : 'black'}
            size={22}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={skipToPrevious}>
          <AntDesign name="stepbackward" color={'black'} size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => togglePlayback(playBackState)}>
          <AntDesign
            name={
              playBackState === State.Playing ? 'pausecircleo' : 'playcircleo'
            }
            color={'black'}
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={skipToNext}>
          <AntDesign name="stepforward" color={'black'} size={22} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleRepeat}>
          <MaterialCommunityIcons
            //name={repeatMode === 'track' ? 'repeat-once' : 'repeat'}
            name={'repeat'}
            color={repeatMode !== 'off' ? 'pink' : 'black'}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayMusic;
