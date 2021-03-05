import React from 'react'
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 100,
    // backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    //flex:1,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#ff1'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#d3f6',
    padding: 10,
    borderRadius: 10,
  }
});

 const Text = styled.Text`
/* deve ficar na pasta components */
 font-weight: 'bold';
 font-size: 20px;
 color:#fff;
 /* backgroundColor:#f11; */

`;
 const BotaoContainer = styled.TouchableOpacity`
  margin-top:10px;
  width:50%;
  height:40px;
  align-items: center;
  background-color: "#d3f6";
  padding:10px;
  border-radius: 10px;
`;