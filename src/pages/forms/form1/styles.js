import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor:'#00b33c'
  },
  inputContainer: {
    margin: 20,
    alignItems: 'stretch',
   //  backgroundColor:''
  },
  topImage:{
    margin: 20, 
    
  },
  title:{
    fontSize:20,
    color:"#fff"
  },
  input:{
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor:'green',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color:'#fff',
    fontWeight:'bold',
  }
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop:10,
    height:60,
    backgroundColor:"#ff1",
    borderRadius:10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
    fontWeight: 'bold',
  },
  inputAndroid: {
    marginTop:10,
    height:60,
    backgroundColor:"#ff1",
    borderRadius:10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
    fontWeight: 'bold',
  }
});