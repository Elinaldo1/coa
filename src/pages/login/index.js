import React from "react";
import { KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Background, Input } from './style';

export default function Login(){
  return(
    <KeyboardAvoidingView style={ Styles.background }>
      <View style = { Styles.containerlogo } >
        <Image source={require('../../assets/cadastrar.png')} />
      </View>

      <View style = { Styles.container }> 
        <TextInput keyboardType='numeric' style={Styles.input} placeholder = 'Matrícula' autoCorrect={ false } onChangeText = {()=>{}} />
        {/* <TextInput style={Styles.input} placeholder = 'Senha' autoCorrect={ false } onChangeText = {()=>{}} /> */}

        <TouchableOpacity style={Styles.btnsubmit}>
          <Text>Acessar</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={Styles.btnsubmit}>
          <Text>Criar Contar</Text>
        </TouchableOpacity> */}

      </View>
    </KeyboardAvoidingView>
  )
}