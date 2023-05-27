import * as Permissions from 'expo-permissions';
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import CameraScreen from './screen/Camera.jsx'
import Landing from './screen/Landingpage.jsx'
import TextRecognition from './screen/TextRecognition.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
     
      
      <Stack.Screen 
        name="Landingpage"
        component={Landing}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="CameraScreen"
        component={CameraScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="TextRecognitionScreen"
        component={TextRecognition}
        options={{headerShown: false}}
      />

    </Stack.Navigator>

  </NavigationContainer>
  );
};