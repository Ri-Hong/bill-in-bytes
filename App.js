import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [startCamera,setStartCamera] = React.useState(false)

  const takePic = async function (){
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      // Handle permission denied scenario
    }
    // setStartCamera(true)
    // const {status} = await Camera.getCameraPermissionsAsync()
    // if(status === 'granted'){
    //   // do something
    //   setStartCamera(true)
    // }else{
    //   Alert.alert("Access denied")
    // }
  }
  

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera
        style={{flex: 1,width:"100%"}}
        ref={(r) => {
          camera = r
        }}
      ></Camera>
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
