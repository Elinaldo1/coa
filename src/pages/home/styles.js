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

export const Text = styled.Text`
/* deve ficar na pasta components */
 /* font-weight: 'bold'; */
 font-size: 20px;
 /* backgroundColor:#f11; */

`;
