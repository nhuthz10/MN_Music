import {Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Slider from '../Slider/Slider';
import Section from '../Section/Section';
import styles from './style';
import Header from '../../Header/Header';
import Loading from '../../Loading/Loading';

const Content = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [sliders, setSliders] = useState(null);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(false);

  useEffect(() => {
    async function loadContent() {
      const response = await fetch(
        'https://api-music-nine.vercel.app/api/home',
        //'https://cors-api-zingmp3.vercel.app/api/home',
        //'https://apizingmp3.vercel.app/api/home',
      );
      const {data} = await response.json();

      for (let i = 0; i < data.items.length; i++) {
        const section = data.items[i];

        switch (section.sectionType) {
          case 'banner':
            setSliders(section);
            break;

          case 'playlist':
            setSections(sections => [...sections, section]);
            break;
        }
      }

      setLoading(false);
    }
    loadContent();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // id reandPlayList
  const handleSectionClick = function (id) {
    //console.log(`ID của playList là: ${id}`);
    navigation.navigate('Playlist', {idPlayList: id});
    setSelectedSection(true);
  };

  return (
    <ScrollView style={styles.content} stickyHeaderIndices={[0]}>
      <Header />
      <Slider
        selected={selectedSection}
        items={sliders.items}
        onItemPress={item => {
          if (item.type === 1) {
            // id render song
            //console.log(`ID bài hát là: ${item.encodeId}`);
          } else {
            navigation.navigate('Playlist', {idPlayList: item.encodeId});
          }
        }}
      />

      {sections.map((section, index) => {
        return (
          <Section
            handleClick={handleSectionClick}
            title={section.title}
            items={section.items}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

export default Content;
