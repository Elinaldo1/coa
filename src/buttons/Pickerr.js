import React from "react";
import { StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export function Pickerr (selectValue,setSelectValue,objeto) {
  return    (
      <Picker style={pickerSelectStyles} selectedValue={selectValue.value}
        onValueChange={(itemValue, index)=>setSelectValue.setValue(itemValue)} >
        {objeto.array.map((item,index)=>{
        return <Picker.Item label ={item} value={item} key={index}/>
        })}
        </Picker>
    );
}

const pickerSelectStyles = StyleSheet.create({
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
export default Pickerr;