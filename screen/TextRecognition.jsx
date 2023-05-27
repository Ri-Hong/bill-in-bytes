import * as React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import ImagePickerComponent from "../textRecognition/ImagePickerComponent.js";
import callGoogleVisionAsync from "../textRecognition/helperFunctions.js";

export default function TextRecognition() {
  return (
    <View style={styles.container}>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
