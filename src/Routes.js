// import { createDrawerNavigator }    from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Teste from './databases/sqlite';
// import Form    from './pages/forms/form1';
// import Form2   from './pages/forms/form2';
// import Grafico from './pages/graficos/index';
import Formi from './pages/forms/formik/index';
import Home from './pages/home/index';
import Login from './pages/login/index';



const AppStack = createStackNavigator();
// const Drawer   = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return(

    <NavigationContainer>
      <Tab.Navigator initialRouteName = "Login"  
      tabBarOptions = {
        {
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          labelStyle: {
            fontSize:14,
            height: 50,
            fontWeight: 'bold',
          },
          tabStyle:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle:{
            fontSize:25,
          },
          
          activeBackgroundColor: "fff",
          inactiveBackgroundColor: "313131"
          

        }
        
      }>
      <Tab.Screen name = "Login" component = {Login} />
      <Tab.Screen name = "Home" component = {Home} />
      {/* <Tab.Screen name = "Form" component = {Form} /> */}
      <Tab.Screen name = "Formik" component = {Formi} />
      <Tab.Screen name = "Teste" component = {Teste} />
      {/* <Tab.Screen name = "Form2" component = {Form2} /> */}
      {/* <Tab.Screen name = "Graficos" component = {Grafico} /> */}
    </Tab.Navigator>
    {/*     <AppStack.Navigator headerMode='none' >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Form" component={Form} />
          <AppStack.Screen name="Form2" component={Form2} />
        </AppStack.Navigator> */}
        {/* <Drawer.Navigator
        
        initialRouteName = "Login" 
        drawerStyle = {style.container} 
        drawerContentOptions= {{ 
          activeBacgroundColor: "#fff",
         inactiveTintColor: "#fff"
        }} >
              <Drawer.Screen name="Login" component  = {Home} 
            options = {
              {
                drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Login</Text>)
                // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
              }
            } 
            />         

            <Drawer.Screen name="Home" component  = {Home} 
            options = {
              {
                drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Tela 1</Text>)
                // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
              }
            } 
            />
            <Drawer.Screen name="Form" component  = {Form}
              options = {
                {
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Tela 2</Text>)
                  // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
                }
              }
            />
            <Drawer.Screen name="Form2" component = {Form2}
              options = {
                {
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Tela 3</Text>)
                  // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
                }
              }          
            />
              <Drawer.Screen name="Graficos" component = {Grafico}
              options = {
                {
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Graficos</Text>)
                  // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
                }
              }          
            />          
        </Drawer.Navigator> */}
    </NavigationContainer>

  );
}

export default Routes;

const style = StyleSheet.create({
  container:{
    backgroundColor: "#363636",
    paddingVertical: 10
  },

});