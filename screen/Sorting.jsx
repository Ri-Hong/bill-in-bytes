import { ScrollView } from "react-native-web";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, Pressable, ImageBackground } from 'react-native';
import landingPage from '../assets/landingPage.png';

export default function Sorting() {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.text_container}>
                <Text style={styles.store_name}>[Store Name]</Text>
                <Text style={styles.text}>belongs to</Text>
                <Pressable> 
                    {/* <Image source={require('./my-icon.png')} style={styles.restaurantButton}/>  */}
                </Pressable>
                <Text style={styles.total}>$124.50</Text>
            </View>

            <View style={styles.button_container}>
                <Pressable onPress={() => navigation.navigate("Sorting")} style={styles.returnButton}> 
                {/* <Image source={require('./my-icon.png')} style={styles.returnArrow}/>  */}
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Sorting")} style={styles.button}> 
                    <Text style={styles.buttonText}>Sort it!</Text>
                </Pressable> 
            </View>
        </SafeAreaView>
        
        
        
    );
  };

  const styles = StyleSheet.create({
    
    container:{

    },
    
    text_container:{

    },

    store_name: {

    },

    text: {

    },

    restaurantButton:{

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
  
  