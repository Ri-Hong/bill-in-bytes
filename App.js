import * as Permissions from 'expo-permissions';
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { styles } from "./styles/Style";

export default function App() {
  const [startCamera,setStartCamera] = React.useState(false)
  const [type, setType] = useState(CameraType.back);
  const [status, setStatus] = Camera.useCameraPermissions();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setStatus(status);
    };

    getCameraPermissions();
  }, []);

  const goBack = () => {
    setStartCamera(false);
  }

  const takePic = function (){
    setStartCamera(true); // 💀💀💀💀
  }

  const analyzeText = () => {

  }

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera  style={styles.camera}
        ref={(r) => {
          camera = r
        }} type={type}> 
        <TouchableOpacity style={styles.button} onPress={goBack}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={analyzeText}
            style={styles.cameraButton}
            />
      </Camera>
      ) :
      (
        <><Text>Hihi magic placeholder text something something 🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃</Text><TouchableOpacity
            onPress={takePic}
            style={styles.button}
          >
            <Text
              style={styles.text}
            >
              Scan receipt
            </Text>
          </TouchableOpacity><StatusBar style="auto" /></>
      )}
      
    </View>
  );
}

