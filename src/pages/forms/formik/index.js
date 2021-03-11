import { AntDesign } from '@expo/vector-icons';
import { withFormik } from 'formik';
import React from 'react';
import { Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { InputText } from '../index';
const { width, height } = Dimensions.get('window');



// const crud = require('../../../services/teste');

const Formi = (props) => (
  <>

  <View >
    <View style={{marginTop:30, flexDirection:'row', justifyContent: 'space-around'}}>
    <InputText
                 value={props.values.matricula}
                 maxLength = {4}
                 keyboardType = 'numeric'
                 onChangeText={text => props.setFieldValue('matricula', text)}
      />
       <InputText
                 value={props.values.responsavel}
            
                 onChangeText={text => props.setFieldValue('responsavel', text)}
      />
    </View>
   
 
  <ScrollView pagingEnabled={true}
      onMomentumScrollEnd={e=>{
        alert('ok')
      }}
  >
  <View style={{backgroundColor:'#ff2', height:height * 0.5, flex:1, alignItems:'center', justifyContent:'center'}}>
        <AntDesign name= "select1" style={{fontSize:30}} />
        <Text>Email</Text>
        <InputText
          keyboardType='email-address'
          
          // style={{backgroundColor:"#fff",width:"50%", borderWidth:1}}
          value={props.values.nome}
          onChangeText={text => props.setFieldValue('nome', text)}
        />
        <View style={{flexDirection:"row", justifyContent:'space-around', alignItems:'center'}} >
              <Text style={{alignSelf:'flex-end'}}>Preco</Text>
              <InputText
                  value={props.values.preco}
                  onChangeText={text => props.setFieldValue('preco', text)}
              ></InputText>
        </View>
        <Text>Descricao</Text>
        <InputText
              value={props.values.descricao}
              onChangeText={text => props.setFieldValue('descricao', text)}
        />
        <TouchableOpacity
          style = {{width:"50%", backgroundColor:"#faa", height:40, alignItems:"center", justifyContent:"center"}}
          onPress={props.handleSubmit}
          title="SALVAR"
        >
          <Text>SALVAR</Text>
        </TouchableOpacity>
    </View>
 
    <View style={{backgroundColor:'#ff2', marginTop:5, height:height * 0.5, flex:1, alignItems:'center', justifyContent:'center'}}></View>
    <View style={{backgroundColor:'#ff2', marginTop:5, height:height * 0.5, flex:1, alignItems:'center', justifyContent:'center'}}></View>
    <View style={{backgroundColor:'#ff2', marginTop:5, height:height * 0.5, flex:1, alignItems:'center', justifyContent:'center'}}></View>
    <View style={{backgroundColor:'#ff2', marginTop:5, height:height * 0.5, flex:1, alignItems:'center', justifyContent:'center'}}></View>
  </ScrollView>
  </View>
  </>
);

// var validar = yup.object().shape({
//     email: yup.string()
//       .email('Email inválido')
//       .required('Email não pode está vazio'),
//     password: yup.string()
//       .min(4,'Senha deve ter mínimo de 4 caracteres')
//       .required('Preencha o campo senha')})

export default withFormik({
  mapPropsToValues: () => ({ nome: '', preco: '',descricao:'',responsavel:'',matricula:'' }),

  // validateOnChange: false,

  // validationSchema: {validar},
  
  
  handleSubmit: (values) => {
    
  
    // props.isSubmitting && <ActivityIndicator />
    // validar
    // .isValid(values)
    // .then(valid => {
         
    // })

    //index.js
    // async () => {
    //     try {
           
    //       crud.busca();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
      
      Alert.alert("DADOS",JSON.stringify(values) );
      console.log(values);
  
  }
})(Formi);
