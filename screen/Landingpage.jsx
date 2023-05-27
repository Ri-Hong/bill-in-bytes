import { ScrollView } from "react-native-web";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, ImageBackground, Pressable } from 'react-native';
import landingPage from '../assets/landingPage.png'

export default function Landing() {
    return(
        
        
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.image_container}>
                {/* <Image source={landingPage} /> */}
            </View>

            <View style={styles.text_container}>
                <Text style={styles.header}>Discover your way to managing finances</Text>
                <Text style={styles.text}>Control your expenses and streamline your way to managing your finances. Financed for you!</Text>
            </View>

            <Pressable style={styles.button} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
{/*            
            <Button style={styles.button}
                title = "Next"
                color = "#F7B05A"
                onPress={() => Alert.alert('Button with adjusted color pressed')} 
            /> */}


            
        </SafeAreaView>
        
        
    );
  };

  const styles = StyleSheet.create({
    
    backgroudImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "cover"
    }, 
    
    container: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
    },

    image_container: {
        height: '50%',
        width: '100%'
    },

    // text_container:{
    // },

    header:{
        color: '#f1f1f1',
        fontSize: 40,

    },

    text: {
        color: '#f1f1f1',
        opacity: 0.5,
        fontSize: 16,
    },
       
    button: {
        backgroundColor: '#F7B05A',
        borderRadius: 20,
        height: 60,
        width: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 40,
        right: 30
    },

    buttonText: {
        color: '#16191D',
        fontSize: 20,
    }

  });
  
  