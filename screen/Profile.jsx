import React, { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View, Pressable, Button, Image, SafeAreaView, ImageBackground } from 'react-native';
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

import IconRetail from '../assets/IconRetail.png'
import Vivian from '../assets/Vivian.jpeg'
import statsBackgroundTransparent from '../assets/statsTransparent.png'

import totalIcon from '../assets/totalIcon.png'
import groceryIcon from '../assets/groceryIcon.png'
import restaurantIcon from '../assets/restaurantIcon.png'
import retailIcon from '../assets/retailIcon.png'
import entertainmentIcon from '../assets/entertainmentIcon.png'
import gasIcon from '../assets/gasIcon.png'


export default function Profile({navigation}) {
    const [selectedButton, setSelectedButton] = useState('weekly');
    const [selectedCategory, setSelectedCategory] = useState('total');
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        const generateRandomNumber = () => {
          const min = 100;
          const max = 3000;
          const decimalPlaces = 2;
          const randomNumber = (Math.random() * (max - min) + min).toFixed(decimalPlaces);
          setRandomNumber(randomNumber);
        };
    
        generateRandomNumber();
      }, [selectedButton, selectedCategory]);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleCategoryPress = (buttonName) => {
        setSelectedCategory(buttonName);
    };

    return(
        <SafeAreaView style={styles.main_container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.user_container}>
                <Image source={Vivian} style={styles.user_image} /> 
                <Text style={styles.header_text}>Jefferson Chen</Text>
            </View>


            <View style={styles.stats_container}>
                <View style={styles.monthContainer}>
                    <Image style={styles.month_stats_background} source={statsBackgroundTransparent}/>
                    <Text style={styles.stats_money_lite}>${randomNumber}</Text>
                    <Text style={styles.stats_your_spendings_lite}>Your Spendings</Text>
                </View>

                <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[
                    styles.button,
                    selectedButton === 'weekly' && styles.buttonSelected,
                    ]}
                    onPress={() => handleButtonPress('weekly')}
                >
                    <Text
                        style={[
                        styles.buttonText,
                        selectedButton === 'weekly' && { color: '#1F1F1F' },
                        ]}
                    >
                        Weekly
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.button,
                    selectedButton === 'monthly' && styles.buttonSelected,
                    ]}
                    onPress={() => handleButtonPress('monthly')}
                >
                    <Text
                        style={[
                        styles.buttonText,
                        selectedButton === 'monthly' && { color: '#1F1F1F' },
                        ]}
                    >
                        Monthly
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.button,
                    selectedButton === 'yearly' && styles.buttonSelected,
                    ]}
                    onPress={() => handleButtonPress('yearly')}
                >
                    <Text
                        style={[
                        styles.buttonText,
                        selectedButton === 'yearly' && { color: '#1F1F1F' },
                        ]}
                    >
                        Annually
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.timing_container}>
                    <TouchableOpacity
                        style={[
                        styles.cButton,
                        selectedCategory === 'total' && styles.cbSelected,
                        ]}
                        onPress={() => handleCategoryPress('total')}
                    >
                        <Image source={TotalReceipts} style={styles.image_style}/> 
                        <Text style={styles.cbNumber}>125</Text>
                        <Text style={styles.cbText}>Total</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                        styles.cButton,
                        selectedCategory === 'restaurant' && styles.cbSelected,
                        ]}
                        onPress={() => handleCategoryPress('restaurant')}
                    >
                        <Image source={restaurantIcon} style={styles.image_style}/> 
                        <Text style={styles.cbNumber}>4</Text>
                        <Text style={styles.cbText}>Restaurant</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                        styles.cButton,
                        selectedCategory === 'grocery' && styles.cbSelected,
                        ]}
                        onPress={() => handleCategoryPress('grocery')}
                    >
                        <Image source={groceryIcon} style={styles.image_style}/> 
                        <Text style={styles.cbNumber}>52</Text>
                        <Text style={styles.cbText}>Grocery</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.timing_container}>
                    <TouchableOpacity
                        style={[
                        styles.cButton,
                        selectedCategory === 'retail' && styles.cbSelected,
                        ]}
                        onPress={() => handleCategoryPress('retail')}
                    >
                        <Image source={retailIcon} style={styles.image_style}/> 
                        <Text style={styles.cbNumber}>52</Text>
                        <Text style={styles.cbText}>Retail</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                        styles.cButton,
                        selectedCategory === 'entertainment' && styles.cbSelected,
                        ]}
                        onPress={() => handleCategoryPress('entertainment')}
                    >
                        <Image source={entertainmentIcon} style={styles.image_style}/> 
                        <Text style={styles.cbNumber}>52</Text>
                        <Text style={styles.cbText}>Entertainment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                        styles.cButton,
                        selectedCategory === 'gas' && styles.cbSelected,
                        ]}
                        onPress={() => handleCategoryPress('gas')}
                    >
                        <Image source={gasIcon} style={styles.image_style}/> 
                        <Text style={styles.cbNumber}>42</Text>
                        <Text style={styles.cbText}>Gas</Text>
                    </TouchableOpacity>

                </View>
            </View>
                
            <View style={styles.nav_bar}>  
                <Pressable onPress={() => navigation.navigate("Homepage")}><Image source={NavHome} style={styles.nav_icon}/></Pressable>
                <Pressable onPress={() => navigation.navigate("Calendar")}><Image source={NavCalendar} style={styles.nav_icon}/></Pressable>
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
        // borderColor: 'red',
        // borderWidth: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 40,
    },

    user_image: {
        width: 100,
        height: 100,
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
        fontSize: 24,
        marginTop: 20,
        marginBottom: 0,
        fontFamily: "Rokkitt",
    },

    stats_background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
        width: '100%',
        height: 104,
        borderRadius: 20,
    },

    month_stats_background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
        width: '100%',
        height: 104,
    },

    container: {
        width: '100%',
        height: 100, 
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    
    monthContainer: {
        width: '100%',
        height: 100, 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
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

    stats_money_lite: {
        color: '#F1F1F1',
        fontSize: 40,
        fontFamily: "Rokkitt",
    },

    stats_your_spendings_lite: {
        color: '#F1F1F1',
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
        fontSize: 16,
        lineHeight: 18,
        fontFamily: "Rokkitt",
    },

    text_under: {
        color: '#f1f1f1',
        fontSize: 12,
        lineHeight: 12,
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
        width: 65,
        height: 65,
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
        opacity: 0.25
    },

    transactions_date: {
        color: "#f1f1f1",
        opacity: 0.5,
        fontSize: 16,
        display: 'flex',
        flexShrink: 1,
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
        paddingBottom: 30,
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderTopColor: "#f1f1f1",
        height: 80,
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

    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
      },
    
      button: {
        flex: 0.3,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F7B360',
        borderRadius: 13,
        paddingVertical: 10,
        marginRight: 10,
        backgroundColor: 'transparent',
      },
    
      buttonSelected: {
        backgroundColor: '#F7B360',
      },
    
      buttonText: {
        color: '#F7B360',
        fontSize: 12,
        fontFamily: "Rokkitt",
      },

      cbContainer: {
        flexDirection: 'row',
        marginVertical: 20,
      },
  
      cButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F7B360',
        borderRadius: 13,
        paddingVertical: 10,
        width: 120,
        height: 120,
        backgroundColor: 'transparent',
      },
  
      cbSelected: {
        opacity: 0.5,
        color: '#000000',
        backgroundColor: '#F7B360',
      },
  
      cbNumber: {
        fontFamily: 'Rokkitt',
        paddingTop: 7,
        paddingBottom: 5,
        color: '#F1F1F1',
        fontSize: 16,
      },
  
      cbText: {
        color: '#F1F1F1',
        fontSize: 12,
        fontFamily: 'Rokkitt',
      },

  });
  
  