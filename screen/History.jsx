import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, Pressable, ImageBackground } from 'react-native';
import landingPage from '../assets/landingPage.png';

import NavHome from '../assets/NavHome.png'
import NavCalendar from '../assets/NavCalendar.png'
import NavScan from '../assets/NavScan.png'
import NavHistory from '../assets/NavHistory.png'
import NavProfile from '../assets/NavProfile.png'

import { StateContext } from "../StateContext";
import { useContext } from 'react';

import totalIcon from '../assets/totalIcon.png'
import groceryIcon from '../assets/groceryIcon.png'
import restaurantIcon from '../assets/restaurantIcon.png'
import retailIcon from '../assets/retailIcon.png'
import entertainmentIcon from '../assets/entertainmentIcon.png'
import gasIcon from '../assets/gasIcon.png'


export default function History({navigation}) {
    const { state, setState } = useContext(StateContext);
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.user_container}>
                <Image source={require('../assets/Vivian.jpeg')} style={styles.user_image} /> 
                <View style={styles.user_text_container}>
                    <Text style={styles.subheader_text}>Hey!</Text>
                    <Text style={styles.header_text}>Jefferson Chen</Text>
                </View>
            </View>

            <View style={styles.transactions_container}>
            <Text style={styles.yourHistoryText}>Your History</Text>
                <ScrollView style={styles.yourhistory_container}>
                    {state.transactions.map((transaction, index) => (
                            <View key={index} style={styles.transactions_text_container}>
                            {transaction.category === 'grocery' && (
                                <Image source={groceryIcon} style={styles.transactions_image} />
                            )}
                            {transaction.category === 'restaurant' && (
                                <Image source={restaurantIcon} style={styles.transactions_image} />
                            )}
                            {transaction.category === 'retail' && (
                                <Image source={retailIcon} style={styles.transactions_image} />
                            )}
                            {transaction.category === 'entertainment' && (
                                <Image source={entertainmentIcon} style={styles.transactions_image} />
                            )}
                            {transaction.category === 'gas' && (
                                <Image source={gasIcon} style={styles.transactions_image} />
                            )}

                            <View style={styles.text_containers}>
                                <Text style={styles.dior_text}>{transaction.storeName}</Text>
                                <Text style={styles.transactions_date}>{transaction.date}</Text>
                            </View>
                            <Text style={styles.transactions_money}>${transaction.total}</Text>
                            </View>
                        ))}
                </ScrollView>
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

    subheader_text: {
        color: '#f1f1f1',
        fontSize: 16,
        fontFamily: "Rokkitt",
    },

    header_text: {
        color: '#f1f1f1',
        fontSize: 24,
        fontFamily: "Rokkitt",
    },

    yourHistoryText: {
        color: '#f1f1f1',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Rokkitt",

    },

    yourhistory_container: {
        flexGrow: 1,
        paddingBottom: 500
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
        color: "#f1f1f1",
        fontSize: 24,
        fontFamily: "Rokkitt",
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
    transactions_container: {
        display: 'flex',
        flexDirection: 'column',
        height: 600,
    },

    transactions_text_container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        alignItems: "center"
    },

    text_containers: {
        display: "flex",
        flexDirection: 'column',
        gap: 4,
        flexGrow: 1,
        paddingHorizontal: 10
    },

    transactions_image: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        paddingRight: 60
    },

    transactions_date: {
        color: "#f1f1f1",
        opacity: 0.5,
        fontSize: 16,
        display: 'flex',
        flexShrink: 1,
        fontFamily: "Rokkitt",
    },
    transactions_money: {
        fontSize: 16,
        color: '#F7B360',
        fontFamily: "Rokkitt",
    },


  });
  
  