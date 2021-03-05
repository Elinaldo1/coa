import React from 'react';
import { Alert } from 'react-native';

async function Criar (props) {
  const Produto = require('../models/produto');

  const database = require('../databases');
  try {
    const resultado = await database.sync();
    //  console.log(resultado);
    Alert.alert('Sync','ok');
    const resutadoOperacao = await   Produto.create(props.data);
    console.log(resutadoOperacao)
  } catch(error) {
    console.log(error)
  }
}; 
export default Criar;
async function insert(){
  try{
    Produto.create({
    nome: 'mouse',
    preco: 10,
    descricao: 'teste insert'
})
  } catch(error){console.log('não deu')}
}

 
 