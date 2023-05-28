import * as Permissions from 'expo-permissions';
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function CameraScreen({navigation}) {
  const [type, setType] = useState(CameraType.back);
  const [status, setStatus] = Camera.useCameraPermissions();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setStatus(status);
    };

    getCameraPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Camera  style={styles.camera}
        ref={(r) => {
          camera = r
        }} type={type}> 

          <TouchableOpacity
            onPress={() => {navigation.navigate("Sorted")}}
            style={styles.cameraButton}
            />
      </Camera>
      
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