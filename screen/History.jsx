import { ScrollView } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, Pressable, ImageBackground } from 'react-native';
import landingPage from '../assets/landingPage.png';

import NavHome from '../assets/NavHome.png'
import NavCalendar from '../assets/NavCalendar.png'
import NavScan from '../assets/NavScan.png'
import NavHistory from '../assets/NavHistory.png'
import NavProfile from '../assets/NavProfile.png'

export default function History({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.user_container}>
                {/* <Image source={require('./my-icon.png')} style={styles.user_image} />  */}
                <View style={styles.user_text_container}>
                    <Text style={styles.subheader_text}>Hey!</Text>
                    <Text style={styles.header_text}>Jefferson Chen</Text>
                </View>
            </View>

            <View style={styles.yourhistory_container}>
                <Text style={styles.yourHistoryText}>Your History</Text>
                <View style={styles.list_container}> 
                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>
                    
                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>
                    
                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                        <Text style={styles.yourhistory_total}>$124.50</Text>
                    </View>

                </View>
            </View>


            
            <View style={styles.nav_bar}>  
                <Pressable onPress={() => navigation.navigate("Homepage")}><Image source={NavHome} style={styles.nav_icon}/></Pressable>
                <Image source={NavCalendar} style={styles.nav_icon}/>
                <View style={styles.camera_container}>
                    <Pressable onPress={() => navigation.navigate("CameraScreen")}><Image source={NavScan} style={styles.nav_icon}/></Pressable>    
                </View>
                <Pressable onPress={() => navigation.navigate("History")}><Image source={NavHistory} style={styles.nav_icon}/></Pressable> 
                <Pressable onPress={() => navigation.navigate("Profile")}><Image source={NavProfile} style={styles.nav_icon}/></Pressable>

            </View>
        </SafeAreaView>
        
        
        
    );
  };

  const styles = StyleSheet.create({
    
    container:{

    },

    user_container: {

    },

    user_image: {

    }, 

    header_text: {

    },

    subheader_text:{

    },

    yourhistory_container: {

    },

    yourHistoryText: {

    },

    list_container: {

    },

    singleitem_container: {

    },

    historyImage: {

    },

    dior_text: {

    },

    yourhistory_date: {

    },

    yourhistory_total: {

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
  
  