import React from 'react';
import { Button, View, Text } from 'react-native';
import { Texto, BtnSubmit } from '../index';

import { withFormik } from 'formik';

import * as yup from 'yup';

const Formi = (props) => (
  <View style={{backgroundColor:'#ff2', flex:1, alignItems:'center', justifyContent:'center'}}>
    <Texto
      keyboardType='email-address'
      // style={{backgroundColor:"#fff",width:"50%", borderWidth:1}}
      value={props.values.nome}
      onChangeText={text => props.setFieldValue('email', text)}
    />
    
    <View style={{borderWidth:1, width:"90%"}}>
      <Text>GEMAS</Text>
      <Texto 
      keyboardType=''
      // style={{backgroundColor:"#f11", width:"50%", marginBottom:5}}
        value={props.values.preco}
        onChangeText={text => props.setFieldValue('password', text)}
      />
    <Texto
    // style={{backgroundColor:"#f11", width:"50%"}}
      value={props.values.descricao}
      onChangeText={text => props.setFieldValue('teste', text)}
    />
    </View>


    <Button
      onPress={props.handleSubmit}
      title="SALVAR"
    />
  </View>
);

// var validar = yup.object().shape({
//     email: yup.string()
//       .email('Email inválido')
//       .required('Email não pode está vazio'),
//     password: yup.string()
//       .min(4,'Senha deve ter mínimo de 4 caracteres')
//       .required('Preencha o campo senha')})

export default withFormik({
  mapPropsToValues: () => ({ nome: '', preco: '',descricao:'' }),

  validateOnChange: false,

  // validationSchema: {validar},
  
  
  handleSubmit: (values) => {
    // props.isSubmitting && <ActivityIndicator />
    // validar
    // .isValid(values)
    // .then(valid => {
         
    // })
    console.log(values);
  }
})(Formi);
