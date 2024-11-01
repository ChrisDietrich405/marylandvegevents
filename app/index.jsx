import React from 'react';
import { View } from "react-native";
import HomeComponent from "../components/HomeComponent"
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Index() {

  const Stack = createNativeStackNavigator();


  return (
    <View>
      <NavigationContainer>
        <HomeComponent />
      </NavigationContainer>
    </View>
  );
}

