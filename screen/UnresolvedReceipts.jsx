import { ScrollView } from "react-native-web";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Button, Image, ImageBackground, Pressable } from 'react-native';
import landingPage from '../assets/landingPage.png'

export default function Landing() {
    return(
        
        
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            
            <View style={styles.user_container}>
                <Image source={require('./my-icon.png')} style={styles.user_image} /> 
                <View style={styles.user_text_container}>
                    <Text style={styles.subheader_text}>Hey!</Text>
                    <Text style={styles.header_text}>Jefferson Chen</Text>
                </View>
            </View>

            <View style={styles.unresolvedReceipts_container}>
                <Text style={styles.uRText}>Unresolved Receipts</Text>
                <View style={styles.uRContainer}>
                    <View style={styles.listContainer}>
                        <View style={styles.receipt}>
                            <Image source={require('./my-icon.png')} style={styles.receiptImage} /> 
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.receiptDate}>June 11, 2023</Text>
                            <Image source={require('./my-icon.png')} style={styles.BigCheckmark} /> 
                        </View>
                        <Text style={styles.receiptName}>Ri Hong</Text>
                        <Text style={styles.receiptAmount}>$4.50</Text>
                        <Image source={require('./my-icon.png')} style={styles.SmallerCheckmark} />
                        <Text style={styles.receiptName}>Ri Hong</Text>
                        <Text style={styles.receiptAmount}>$120.00</Text>
                        <Image source={require('./my-icon.png')} style={styles.SmallerCheckmark} />
                    </View>

                    <View>
                        <View style={styles.receipt}>
                            <Image source={require('./my-icon.png')} style={styles.receiptImage} />  
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.receiptDate}>June 11, 2023</Text>
                            <Image source={require('./my-icon.png')} style={styles.BigCheckmark} /> 
                        </View>
                            <Text style={styles.receiptName}>Ri Hong</Text>
                            <Text style={styles.receiptAmount}>$4.50</Text>
                            <Image source={require('./my-icon.png')} style={styles.SmallerCheckmark} />
                            <Text style={styles.receiptName}>Ri Hong</Text>
                            <Text style={styles.receiptAmount}>$120.00</Text>
                            <Image source={require('./my-icon.png')} style={styles.SmallerCheckmark} />
                     </View>
                </View>
            </View>

            <View style={styles.nav_bar}>  
                <Pressable onPress={() => navigation.navigate("Homepage")}> <Image source={require('./my-icon.png')} style={styles.nav_home}/> </Pressable>
                <Pressable> <Image source={require('./my-icon.png')} style={styles.nav_calendar}/> </Pressable> 
                <View style={styles.camera_container}>
                    <Pressable onPress={() => navigation.navigate("CameraScreen")}> <Image source={require('./my-icon.png')} style={styles.nav_camera}/> </Pressable>
                </View>
                <Pressable onPress={() => navigation.navigate("History")}> <Image source={require('./my-icon.png')} style={styles.nav_clock}/> </Pressable>
                <Pressable onPress={() => navigation.navigate("Profile")}> <Image source={require('./my-icon.png')} style={styles.nav_user}/> </Pressable>

            </View>



            
        </SafeAreaView>
        
        
    );
  };

  const styles = StyleSheet.create({
    
    container: {

    },

    backgroundImage: {

    },

    user_container: {

    },

    user_image: {

    },

    user_text_container: {

    },

    subheader_text: {

    },

    header_text: {

    },

    unresolvedReceipts_cointainer: {

    },

    uRText: {

    },

    uRContainer: {

    },

    listContainer: {

    },

    receipt: {

    },

    receiptImage: {

    },

    dior_text: {

    },

    receiptDate: {

    },

    BigCheckmark: {

    },
    
    receiptName: {

    },

    receiptAmount: {

    },

    SmallerCheckmark: {

    },

    nav_bar: {

    },

    nav_home: {

    },

    nav_calendar: {

    },

    camera_container: {

    },

    nav_camera: {

    },

    nav_clock: {

    },

    nav_user: {

    }

  });
  
  