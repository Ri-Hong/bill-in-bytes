import { ScrollView } from "react-native-web";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, Pressable, ImageBackground } from 'react-native';
import landingPage from '../assets/landingPage.png';
import changeToRestaurant from '../assets/changeToRestaurant.png'
import backArrow from '../assets/backArrow.png';

import NavHome from '../assets/NavHome.png'
import NavCalendar from '../assets/NavCalendar.png'
import NavScan from '../assets/NavScan.png'
import NavHistory from '../assets/NavHistory.png'
import NavProfile from '../assets/NavProfile.png'

import React, { useContext } from 'react';

import { StateContext } from '../StateContext';


export default function Sorting({navigation}) {
    const { state, setState } = useContext(StateContext);

    const addThing = () => {
        state.transactions.push({
            storeName: "Tim Hortons",
            date: "May 22, 2023",
            total: "$5.57",
            category: "restaurant"
        })
        setState(state);
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.text_container}>
                <Text style={styles.store_name}>Tim Hortons</Text>
                <Text style={styles.text}>belongs to</Text>
                <Image source={changeToRestaurant} style={styles.restaurantButton}/> 
                <Text style={styles.total}>$5.57</Text>
            </View>

            <View style={styles.button_container}>
                <Pressable style={styles.returnButton} onPress={() => navigation.navigate("CameraScreen")}><Image source={backArrow} style={styles.returnArrow}/></Pressable>
                <Pressable style={styles.button} onPress={() =>  {addThing(); navigation.navigate("Profile");}}><Text style={styles.buttonText}>Sort it!</Text></Pressable>
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
    
    container: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
    },

    text_container:{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        paddingTop: 100,
        alignItems: "center"

    },

    store_name: {
        color: '#f1f1f1',
        textAlign: "center",
        fontSize: 40,
        fontFamily: "Rokkitt",
    },

    text: {
        color: '#f1f1f1',
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Rokkitt",
    },

    restaurant_text: {
        color: '#f1f1f1',
        textAlign: "center",
        fontSize: 40,
        fontFamily: "Rokkitt",

    },

    wrongButton: {

    },

    wrongText: {
        color: '#f1f1f1',
        opacity: 0.5,
        textAlign: "center",
        textDecorationLine: 'underline'
    },

    total: {
        color: "#F7B360",
        textAlign: "center",
        fontSize: 40,
        marginTop: 40,
        fontFamily: "Rokkitt",
    },

    button_container:{
        width: "100%",
        position: "absolute",
        bottom: 50,
        left: 30,
        right: 30,
        display: "flex",
        flexDirection: 'row',
        gap: 10
    },

    returnButton: {
        borderColor: "#F7B360",
        borderWidth: 1,
        borderRadius: 20,
        width: 50,
        height: 50,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center"
    },

    returnArrow: {
        width: 24, height: 24, resizeMode: 'contain'
    },

    button: {
        backgroundColor: "#F7B360",
        flexGrow: 1,
        display: "flex",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonText: {  
        color: '#1f1f1f',
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Rokkitt",

    },

    restaurantButton: {
        width: 250,
        height: 250,
        resizeMode: 'cover', 
        marginVertical: 20
    },

    



    
  });
  
  