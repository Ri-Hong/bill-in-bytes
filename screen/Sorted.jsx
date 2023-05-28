import { ScrollView } from "react-native-web";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';
import { Pressable } from "react-native/types";
import landingPage from '../assets/landingPage.png';

export default function Sorted({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.text_container}>
                <Text style={styles.store_name}>[Store Name]</Text>
                <Text style={styles.text}>belongs to</Text>
                <Text style={styles.restaurant_text}>Restaurant</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Sorting")} style={styles.wrongButton}> <Text style={styles.wrongText}>It's wrong, let me change it</Text>
                </TouchableOpacity>
                <Text style={styles.total}>$124.50</Text>
            </View>

            <View style={styles.button_container}>
                <Pressable onPress={() => navigation.navigate("CameraScreen")} style={styles.returnButton}> 
                <Image source={require('./my-icon.png')} style={styles.returnArrow}/> 
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Sorting")} style={styles.button}> <Text style={styles.buttonText}>Continue</Text>
                </Pressable> 
            </View>
        </SafeAreaView>
        
        
        
    );
  };

  const styles = StyleSheet.create({
    
    container:{

    },

    store_name: {

    },

    text_container:{

    },

    text: {

    },

    restaurant_text: {

    },

    wrongButton: {

    },

    wrongText: {

    },

    total: {

    },

    button_container:{

    },

    returnButton: {

    },

    returnArrow: {

    },

    button: {

    },

    buttonText: {

    }



    
  });
  
  