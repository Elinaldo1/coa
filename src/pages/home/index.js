import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet , View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Header from '../header/index';
import {styles, Text} from './styles';
import { AntDesign } from '@expo/vector-icons'


export default function Home() {

  const navigation = useNavigation();
  
  const [contador, setContador] = useState(0);
  var texto2 = 'variavel texto2'

  return (
    <>
      <Header caption="Tela 1" />
      <ScrollView /*style={styles.container}*/>
      <AntDesign name = "swap" style = {{fontSize:30}} />
          <TouchableOpacity style={styles.button} onPress = {incrementar}>
            <Text >CONTADOR</Text>
          </TouchableOpacity> 
            
            <Text fontSize> componente styled components</Text>

            <StatusBar style="auto"/>

            <Header caption="header 2" />

            <Text style={styles.title}> {texto2} </Text>

      </ScrollView>
      
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form') }>
            <Text>FORM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form2') }>
            <Text>Form2</Text>
          </TouchableOpacity>

          <Header caption= {contador} />
     
    </>
  );

  function incrementar(){
    setContador(contador+1); 
  }
}

