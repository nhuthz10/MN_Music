import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './style';

const Error = ({showOrHide, HandleonPress}) => {
  return showOrHide ? (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.icon} onPress={HandleonPress}>
          <Text>
            <AntDesign name="closecircle" size={24} color={'black'} />
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Dành Cho Tài Khoản VIP</Text>
        <Text style={styles.desc}>
          Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để
          nghe bài hát này.
        </Text>
      </View>
    </View>
  ) : null;
};

export default Error;
