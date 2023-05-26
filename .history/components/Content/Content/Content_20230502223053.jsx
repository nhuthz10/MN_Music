import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Slider from '../Slider/Slider';
import Section from '../Section/Section';
import styles from './style';
import Header from '../../Header/Header';

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [sliders, setSliders] = useState(null);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(false);
  const [sectionId, setSectionId] = useState(null);

  useEffect(() => {
    async function loadContent() {
      const response = await fetch(`https://zing-mp3-api.vercel.app/api/home`);
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
    return <Text>Loading...</Text>;
  }

  if (sectionId) {
  }

  const handleSectionClick = function (id) {
    setSelectedSection(true);
    setSectionId(id);
  };

  return (
    <ScrollView style={styles.content} stickyHeaderIndices={[0]}>
      <Header />

      <Slider selected={selectedSection} items={sliders.items} />

      {sections.map(section => {
        return <Section title={section.title} items={section.items}></Section>;
      })}
    </ScrollView>
  );
};

export default Content;
