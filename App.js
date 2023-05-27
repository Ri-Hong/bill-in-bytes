import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [startCamera,setStartCamera] = React.useState(false)
  const [type, setType] = useState(CameraType.back);
  const [status, setStatus] = Camera.useCameraPermissions();

  const goBack = () => {
    setStartCamera(false);
  }

  const takePic = function (){
    
    if (status.granted) {
      setStartCamera(true);
    } else {
      // Handle permission denied scenario
    }
  }

  const analyzeText = () => {

  }

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera  style={{flex: 1,width:"100%"}}
        ref={(r) => {
          camera = r
        }} type={type}>
        <TouchableOpacity style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }} onPress={goBack}>
            <Text style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={analyzeText}
            style={{
            position: 'absolute',
            margin: 'auto',
            alignSelf: 'center',
            width: 70,
            height: 70,
            bottom: 25,
            borderRadius: 50,
            backgroundColor: '#fff'
            }}
            />
      </Camera>
      ) :
      (
        <><Text>Hihi magic placeholder text something something 🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃</Text><TouchableOpacity
            onPress={takePic}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Scan receipt
            </Text>
          </TouchableOpacity><StatusBar style="auto" /></>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
