import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Texto, BtnSubmit } from '../index';

import { withFormik } from 'formik';

import * as yup from 'yup';
  const Produto = require( '../../../models/produto');

  const database = require('../../../databases/index');
async function Criar (props) {
  console.log('criar')
  try {
    const resultado = await database.sync();
     console.log(resultado);
    Alert.alert('Sync','ok');
    const resutadoOperacao = await   Produto.create(props);
    console.log(resutadoOperacao)
  } catch(error) {
    console.log(error)
  }
}; 

const Formi = (props) => (
  <View style={{backgroundColor:'#ff2', flex:1, alignItems:'center', justifyContent:'center'}}>
    <Text>Email</Text>
    <Texto
      keyboardType='email-address'
      // style={{backgroundColor:"#fff",width:"50%", borderWidth:1}}
      value={props.values.nome}
      onChangeText={text => props.setFieldValue('nome', text)}
    />
    <Text>Preco</Text>
    <TextInput style={{height:40, backgroundColor:"#fff", width:"50%", textAlign:'center'}}
        value={props.values.preco}
        onChangeText={text => props.setFieldValue('preco', text)}
    ></TextInput>

    <Text>Descricao</Text>
    <Texto
           value={props.values.descricao}
          onChangeText={text => props.setFieldValue('descricao', text)}
    />
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

  // validateOnChange: false,

  // validationSchema: {validar},
  
  
  handleSubmit: (values) => {

    Criar(values);
    // props.isSubmitting && <ActivityIndicator />
    // validar
    // .isValid(values)
    // .then(valid => {
         
    // })
    console.log(values);
  }
})(Formi);
