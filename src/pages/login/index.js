import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Styles } from './style';

export default function Login(){
  return(
    <KeyboardAvoidingView style={ Styles.background }>
      <View style = { Styles.containerlogo } >
        <Image source={require('../../assets/cadastrar.png')} />
      </View>

      <View style = { Styles.container }> 
        {/* <TextInput placeholder = 'User' autoCorrect={ false } onChangeText = {()=>{}} /> */}
        <TextInput placeholder = 'Matrícula' keyboardType="numeric" autoCorrect={ false } onChangeText = {()=>{}} />

        <TouchableOpacity>
          <Text style={Styles.title}>Acessar</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <Text>Criar Contar</Text>
        </TouchableOpacity> */}

      </View>
    </KeyboardAvoidingView>
  )
}