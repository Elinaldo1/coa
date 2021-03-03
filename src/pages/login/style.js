import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(121, 231, 121)'
  },
  containerlogo:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
   
  },
  input:{
    backgroundColor:"#fff",
    width:'50%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10

  },
  btnsubmit:{
    backgroundColor:"#35aaff",
    width:'50%',
    height:45,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  }
});