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
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>

                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>


                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>


                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>


                    <View style={styles.singleitem_container}>
                        {/* <Image style={styles.historyImage}></Image> */}
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.yourhistory_date}>June 11, 2023</Text>
                    </View>
                    <Text style={styles.yourhistory_total}>$124.50</Text>


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

    backgroudImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "cover"
    }, 
    
    container:{
        paddingVertical: 50,
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
    },

    user_container: {
        flexDirection: "row",
        paddingBottom: 30
    },

    user_image: {
        width: 43,
        height: 43,
        borderRadius: 50,
        marginRight: 17
    }, 

    header_text: {
        color: '#f1f1f1',
        fontSize: 20,
    },

    subheader_text:{
        color: '#f1f1f1',
        fontSize: 12,
    },

    yourhistory_container: {

    },

    yourHistoryText: {
        color: '#f1f1f1',
        fontSize: 24,
    },

    list_container: {

    },

    singleitem_container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: '#F1F1F144',
        marginTop: 15,
        alignContent: 'space-between',
        padding: 10,
    },

    historyImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15
    },

    dior_text: {
        color: '#f1f1f1',
        fontSize: 20,
    },

    yourhistory_date: {
        color: '#f1f1f1',
        opacity: 0.5,
        fontSize: 12,
    },

    yourhistory_total: {
        color: '#F7B360',
        fontSize: 12,
        right: 10,
        position: 'absolute',
        top: 30
    },

    nav_bar: {
        display: 'flex',
        flexDirection: 'row',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 50,
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderTopColor: "#f1f1f1",
        height: 100,
        backgroundColor: "#16191D",
    },

    nav_icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },




  });
  
  