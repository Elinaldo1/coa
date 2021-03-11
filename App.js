
import * as Updates from 'expo-updates';
import React, { useEffect } from 'react';
// import { Cores } from '../../cores';
import Routes from './src/Routes';

const Cores = {
   inputs: '',
   textInputs: '',
   buttons: '',
   background: '#f455',
   titulos: '',
   subtitulos: '',
 }

export default function App() {
   // if (__DEV__) {
   //    require('react-devtools');
   //  }
   useEffect(() => {
      async function updateapp(){
         const { isAvailable } = await Updates.checkForUpdateAsync()

         if (isAvailable) {
            await Updates.fetchUpdateAsync()
            await Updates.reloadAsync()
         }
      }
      updateapp();
   },[]);

   return(
      // <TeamProvider theme={Cores}>
         <Routes />
      
   );
}
