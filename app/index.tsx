import React from 'react';
import { View } from "react-native";
import Home from '@/components/Home';
import MarylandEvents from '@/components/MarylandEvents';
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Index() {

  const Stack = createNativeStackNavigator();


  return (
    <View>
      <NavigationContainer>
        <h1>hello</h1>
        {/* <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
     
        </Stack.Navigator> */}

      </NavigationContainer>
    </View>
  );
}

