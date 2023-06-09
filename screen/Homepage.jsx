import React, { useContext } from 'react';
import { StateContext } from '../StateContext';

import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, ImageBackground, Pressable } from 'react-native';
import landingPage from '../assets/landingPage.png'
import statsBackground from '../assets/Stats.png'

import TotalReceipts from '../assets/TotalReceipts.png'
import ResolvedReceipts from '../assets/ResolvedReceipts.png'
import UnresolvedReceipts from '../assets/UnresolvedReceipts.png'

import NavHome from '../assets/NavHome.png'
import NavCalendar from '../assets/NavCalendar.png'
import NavScan from '../assets/NavScan.png'
import NavHistory from '../assets/NavHistory.png'
import NavProfile from '../assets/NavProfile.png'

import Vivian from '../assets/Vivian.jpeg'

import totalIcon from '../assets/totalIcon.png'
import groceryIcon from '../assets/groceryIcon.png'
import restaurantIcon from '../assets/restaurantIcon.png'
import retailIcon from '../assets/retailIcon.png'
import entertainmentIcon from '../assets/entertainmentIcon.png'
import gasIcon from '../assets/gasIcon.png'


export default function Homepage({navigation}) {
    const { state, setState } = useContext(StateContext);

    // Calculate total spendings
    const totalSpendings = state.transactions.reduce(
        (total, transaction) => total + transaction.total,
        0
    );

    return(
        <SafeAreaView style={styles.main_container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.user_container}>
                {/* <View style={styles.user_image}></View> */}
                <Image source={Vivian} style={styles.user_image} /> 
                <View style={styles.user_text_container}>
                    <Text style={styles.subheader_text}>Hey!</Text>
                    <Text style={styles.header_text}>Jefferson Chen</Text>
                </View>
            </View>

            <View style={styles.stats_container}>
                <Text style={styles.text_header}>Your Stats</Text>
                <View style={styles.container}>
                    <Image style={styles.stats_background} source={statsBackground}/>
                    <Text style={styles.stats_money}>${totalSpendings.toFixed(2)}</Text>
                    <Text style={styles.stats_your_spendings}>Your Spendings</Text>
                </View>
                <View style={styles.timing_container}>
                    <View style={styles.box_container}>
                        <Image source={TotalReceipts} style={styles.image_style}/> 
                        <Text style={styles.number}>125</Text>
                        <Text style={styles.text_under}>Total</Text>
                    </View>

                    <View style={styles.box_container}>
                        <Image source={ResolvedReceipts} style={styles.image_style}/> 
                        <Text style={styles.number}>123</Text>
                        <Text style={styles.text_under}>Resolved</Text>
                    </View>

                    <View style={styles.box_container}>
                        <Pressable onPress={() => navigation.navigate("UnresolvedReceipts")} style={styles.uReceipts}>
                            <Image source={UnresolvedReceipts} style={styles.image_style}/> 
                            <Text style={styles.number}>2</Text>
                            <Text style={styles.text_under}>Unresolved</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.transactions_container}>
                <Text style={styles.text_header}>Transactions</Text>
                

                <ScrollView contentContainerStyle={styles.all_transactions}>
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
    
    main_container: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
    },

    user_container: {
        border: '1px solid red',
        display: "flex",
        flexDirection: "row",
        gap: 10
    },

    user_image: {
        width: 50,
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 50
    }, 

    // user_text_container: {
    // }, 

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

    text_header: {
        color: '#f1f1f1',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Rokkitt",

    },

    stats_background: {
        position: "absolute",
        width: '100%',
        height: 120,
        borderRadius: 20,
    },

    container: {
        width: '100%',
        height: 120, 
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    stats_money: {
        color: '#1f1f1f',
        fontSize: 40,
        fontFamily: "Rokkitt",
    },

    stats_your_spendings: {
        color: '#1f1f1f',
        fontSize: 16,
        fontFamily: "Rokkitt",
    },

    timing_container: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
    },
    
    stats_container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },

    all_transactions: {
        // height: 200,
        // overflow: 'scroll',
        flexGrow: 1,
        paddingBottom: 100
    },

    box_container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        width: '33%',
        flexShrink: 1,
        paddingVertical: 20,
        backgroundColor: 'rgba(22, 25, 29, 0.25)',
        borderWidth: 0.5,
        borderColor: 'rgba(241, 241, 241, 0.25)',
        borderRadius: 20
    },

    image_style: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },

    number: {
        color: '#f1f1f1',
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "Rokkitt",
    },

    text_under: {
        color: '#f1f1f1',
        fontSize: 16,
        lineHeight: 16,
        fontFamily: "Rokkitt",
    },

    transactions_container: {
        display: 'flex',
        flexDirection: 'column',
        height: 400,
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

    dior_text: {
        color: "#f1f1f1",
        fontSize: 24,
        fontFamily: "Rokkitt",
    },

    divider: {
        width:'100%',
        height: 0.5,
        backgroundColor : '#f1f1f1',
        opacity: 0.25,
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
        backgroundColor: "#16191D"
    },

    nav_icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    camera_container: {
        backgroundColor: '#f1f1f1',
        borderRadius: 100,
        width: 70,
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
    },
    uReceipts: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    }




  });
  
  