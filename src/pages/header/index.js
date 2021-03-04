import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


 import {styles} from './styles';

function Header(texto) {
  return (
  <View style= {styles.container}>
   
    <Text style={styles.headertext}> {texto.caption} </Text>
  </View>
  );
}
export default Header;

