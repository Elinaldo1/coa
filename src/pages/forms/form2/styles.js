import React from 'react';
import {StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
     alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#ff38'
  },
  header:{
    
    marginTop:20,
    height:50,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#ff38'
  },
  title:{
    fontSize:18,
    fontWeight: 'bold',
  },
 button:{
   flex:1,
  
  height:50,
  backgroundColor:'green',
  borderRadius: 0,
  paddingHorizontal: 24,
  fontSize: 16,
  alignItems:'center',
  justifyContent:'center'
  }
})