
import React, { useState } from 'react';
import Routes from './src/Routes';
import { useEffect } from 'react';
import * as Updates from 'expo-updates';

export default function App() {
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
   return(<Routes />);
}
