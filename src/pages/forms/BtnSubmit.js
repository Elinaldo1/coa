import styled from 'styled-components/native';

 const BtnSubmit = (props)=> (
    <BtnContainer/>
);
export default BtnSubmit;

 const BtnContainer = styled.TouchableOpacity`
    background-color:#555;
    width:50%;
    height:50px;
    margin:10px;
    border-bottom-left-radius:7px;
    border-top-right-radius:7px;
    align-items:center;
`;

const ButtonText = styled.Text`
    color:#fff;
    
    
`;