import React from "react";
import { StyleSheet } from "react-native";
import ProductHistory from "./screens/ProductHistory";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import productsList from "./global_var";
import Home from "./screens/Home";

const Stack = createStackNavigator();

const App = () => {
  productsList.push({id:String(productsList.length+1), productName:'Jus d\'orange'});
  const fetch = require('node-fetch');

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductHistory" component={ProductHistory} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;