import {Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Playlist from './components/Playlist/Playlist';
import Content from './components/Content/Content/Content';

const App = () => {
  return (
    <View>
      {/* <Playlist></Playlist> */}
      <Content></Content>
    </View>
  );
};

export default App;
