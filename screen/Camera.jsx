import * as Permissions from 'expo-permissions';
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function CameraScreen() {
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

const styles = StyleSheet.create({
  button: {
      width: 130,
      borderRadius: 4,
      backgroundColor: '#14274e',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40
  },
  camera: {flex: 1, width:"100%"},
  cameraButton: {
      position: 'absolute',
      margin: 'auto',
      alignSelf: 'center',
      width: 70,
      height: 70,
      bottom: 25,
      borderRadius: 50,
      backgroundColor: '#fff'
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
  },
});