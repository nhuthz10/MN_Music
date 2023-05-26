import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.header}>
      <Icon name="search" style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát, ..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />

      <TouchableOpacity onPress={() => setIsMenuVisible(!isMenuVisible)}>
        <Icon name="user" style={styles.icon} />
      </TouchableOpacity>

      {isMenuVisible && (
        <View style={styles.popup}>
          {/* <TouchableOpacity style={styles.popupItem}>
            <Icon name="info" style={styles.popupIcon} />
            <Text style={styles.popupText}>Thông tin</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.popupItem}>
            <Icon name="upload" style={styles.popupIcon} />
            <Text style={styles.popupText}>Nâng cấp VIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popupItem, styles.logout]}>
            <Icon name="sign-out" style={styles.popupIcon} />
            <Text style={styles.popupText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
