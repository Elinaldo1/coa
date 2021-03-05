import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Styles } from './style';
import { Texto } from '../forms'

export default function Login(){
  return(
    <KeyboardAvoidingView style={ Styles.background }>
      <View style = { Styles.containerlogo } >
        <Image source={require('../../assets/cadastrar.png')} />
      </View>

       <View style = { Styles.container }> 
        <TextInput placeholder = 'User' autoCorrect={ false } onChangeText = {()=>{}} /> 
        <TextInput placeholder = 'Matrícula' keyboardType="numeric" autoCorrect={ false } onChangeText = {()=>{}} />

        <Texto
      keyboardType='email-address'
      //  style={{backgroundColor:"#fff",width:"50%", borderWidth:1, textAlign:'center'}}
      
      onChangeText={text =>{}}
    />

        <TouchableOpacity>
          <Text style={Styles.title}>Acessar</Text>
        </TouchableOpacity>
      </View> 
    </KeyboardAvoidingView>
  );
};