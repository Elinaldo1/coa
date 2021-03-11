import React from "react";
import { Text, View } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { useState } from "react/cjs/react.development";
import { InputText } from '../forms';
import { Background, Imagem, Styles } from './style';


export default function Login(){

  const [dimensaoImagem, setdimensaoImagem] = useState(null);
  return(
    
    <Background>
      {/* <View style={{marginTop:50, alignItems:'center'}}>
        <Text>Qualidade Plantio</Text>
      </View> */}

      <View 
        onLayout = {({ nativeEvent: { layout:{width, height}}}) => setdimensaoImagem({width, height})}
        style = { Styles.containerlogo } >
        {/* <Image source={require('../../assets/BSA-WALLPAPER-LU.png')} resizeMode="cover" style={Styles.imagem} /> */}
        <Imagem
            source={require('../../assets/BSA-WALLPAPER-LU.png')} 
            resizeMode="cover"
            width = {'100%'}
            height = {'100%'}
        />

              <View style={Styles.containerTitulo}>
           <Text>QUALIDADE PLANTIO</Text>
        </View>
      </View>

       <View style = { Styles.container }> 
          <InputText
            placeholder = "MATRÍCULA"
            keyboardType="numeric"
            onChangeText={text =>{}}
          />
          <InputText
            placeholder = "RESPONSÀVEL"
            onChangeText={text =>{}}
          />
          {/* <TouchableOpacity>
            <Text style={Styles.title} >Acessar</Text>
          </TouchableOpacity> */}
          <RectButton style= {Styles.loginButton}>
              <Text>INICIAR</Text>
          </RectButton>
      </View> 
    </Background>
    
  );
};