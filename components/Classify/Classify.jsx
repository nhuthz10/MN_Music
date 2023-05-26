import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Section from '../Content/Section/Section';
import styles from './style';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

const Classify = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [dataAPI, setDataAPI] = useState(null);

  useEffect(() => {
    async function loadContent() {
      const response = await fetch(
        'https://zing-mp3-api.vercel.app/api/category',
      );
      const {data} = await response.json();
      setDataAPI(data);

      [...data.genre].forEach(section => {
        setSections(sections => [...sections, section]);
      });

      setLoading(false);
    }
    loadContent();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // id render playList
  const handleSectionClick = function (id) {
    navigation.navigate('PlayListClassify', {idPlayList: id});
  };

  return (
    <ScrollView style={styles.content} stickyHeaderIndices={[0]}>
      <Header />

      <View style={styles.categoryBanner}>
        <Image
          source={{
            uri: dataAPI.banners[0].cover,
          }}
          style={styles.image}
        />
      </View>

      {sections.map((section, index) => {
        return (
          <Section
            handleClick={handleSectionClick}
            title={section.title}
            items={section.playlists}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

export default Classify;
