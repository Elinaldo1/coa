
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';
const { width, height } = Dimensions.get('window');

export const Imagem = styled.Image`
    width:${props => props.width};
    height:${props => props.height};
    align-self:flex-end;
    border-top-left-radius:16px;
    border-bottom-left-radius:16px;

`;
export const Background = styled.KeyboardAvoidingView `
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: #323832;
`;


export const Styles = StyleSheet.create({

  containerform:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  loginButton:{
    backgroundColor:"#555566",
    padding: 16,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 32,
    marginTop:32,
    width:'50%'
  },
  containerlogo:{
     flex:1,
     alignSelf:"flex-end",
    // justifyContent: 'center',
    top:40,
    // height: height * 0.4,
    justifyContent: "space-between",
    marginBottom:30,
    width:width-10,
    height: height * 0.32,
    // backgroundColor:'#fff'
  },
  containerTitulo:{
    alignItems: 'center',
    position: 'absolute',
    width: width - 80,
    borderBottomWidth: 5,
    marginBottom:10,
    height: height * 0.06,
    bottom: width * 0.05 - 43,
    marginHorizontal: 40,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  container:{
    flex:1,
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    paddingTop:30,
    width: '95%',
   
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    color:"#fff"
  },


});
// export const Texto = styled.Text`
//     font-size: 20;
//     font-weight: bold;
//     color: #fff;
// ` ;

// export const TextTitulo = styled(Texto)`
//     color: #f3f444;
// `;