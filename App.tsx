import React, { useEffect, useState } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./screens/Home";
import ProductHistory from "./screens/ProductHistory";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  
  const fetch = require('node-fetch');

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductHistory" component={ProductHistory} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;