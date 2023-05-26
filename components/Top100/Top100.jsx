import {Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Section from '../Content/Section/Section';
import styles from './style';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

const Top100 = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);
      const response = await fetch(
        'https://api-music-nine.vercel.app/api/top100',
        //`https://cors-api-zingmp3.vercel.app/api/top100`,
        //`https://apizingmp3.vercel.app/api/top100`,
      );
      const {data} = await response.json();

      setSections(data);
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
    navigation.navigate('PlaylistTop100', {idPlayList: id});
  };

  return (
    <ScrollView style={styles.content} stickyHeaderIndices={[0]}>
      <Header />

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

export default Top100;
