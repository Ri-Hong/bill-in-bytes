import { ScrollView } from "react-native-web";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import landingPage from '../assets/landingPage.png';

import NavHome from '../assets/NavHome.png'
import NavCalendar from '../assets/NavCalendar.png'
import NavScan from '../assets/NavScan.png'
import NavHistory from '../assets/NavHistory.png'
import NavProfile from '../assets/NavProfile.png'

export default function Profile({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.user_container}>
                {/* <Image source={require('./my-icon.png')} style={styles.user_image} />  */}
                <Text style={styles.header_text}>Jefferson Chen</Text>
            </View>

            <View style={styles.stats_container}>
                <Text style={styles.text_header}>Your Total Stats</Text>
                <View style={styles.money_container}>
                    <Text style={styles.stats_money}>$25,402.49</Text>
                    <Text style={styles.stats_your_spendings}>Your Spendings</Text>
                </View>
                <View style={styles.timing_container}>
                    <View style={styles.box_container}>
                        {/* <Image source={require('./my-icon.png')} style={styles.image_style}/>  */}
                        <Text style={styles.number}>125</Text>
                        <Text style={styles.text_under}>Total</Text>
                    </View>

                    <View style={styles.box_container}>
                        {/* <Image source={require('./my-icon.png')} style={styles.image_style}/>  */}
                        <Text style={styles.number}>123</Text>
                        <Text style={styles.text_under}>Resolved</Text>
                    </View>

                    <View style={styles.box_container}>
                        {/* <Image source={require('./my-icon.png')} style={styles.image_style}/>  */}
                        <Text style={styles.number}>2</Text>
                        <Text style={styles.text_under}>Unresolved</Text>
                    </View>
                </View>
            </View>

            <View style={styles.Monthstats_container}>
                <Text style={styles.text_header}>Your Month's Stats</Text>
                
                <View style={styles.monthstatsmoney_container}>
                    <Text style={styles.monthstats_money}>$25,402.49</Text>
                    <Text style={styles.monthstats_your_spendings}>Your Spendings</Text>
                </View>
                <View style={styles.timing_container}>
                    <View style={styles.box_container}>
                        {/* <Image source={require('./my-icon.png')} style={styles.image_style}/>  */}
                        <Text style={styles.number}>125</Text>
                        <Text style={styles.text_under}>Total</Text>
                    </View>

                    <View style={styles.box_container}>
                        {/* <Image source={require('./my-icon.png')} style={styles.image_style}/>  */}
                        <Text style={styles.number}>123</Text>
                        <Text style={styles.text_under}>Resolved</Text>
                    </View>

                    <View style={styles.box_container}>
                        {/* <Image source={require('./my-icon.png')} style={styles.image_style}/>  */}
                        <Text style={styles.number}>2</Text>
                        <Text style={styles.text_under}>Unresolved</Text>
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

    stats_container: {

    },

    text_header: {

    },

    money_container: {

    },

    stats_money: {

    },

    stats_your_spendings: {

    },

    timing_container: {

    },

    box_container: {

    },

    image_style: {

    },

    number: {

    },

    text_under: {

    },

    Monthstats_container:{

    },

    monthstatsmoney_container: {

    },

    monthstats_money: {

    },

    monthstats_your_spendings: {

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
  
  