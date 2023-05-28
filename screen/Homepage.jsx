import { ScrollView } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, SafeAreaView, ImageBackground } from 'react-native';
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

export default function Homepage() {
    return(
        <SafeAreaView style={styles.main_container}>
            <ImageBackground source={landingPage} style={styles.backgroudImage}></ImageBackground>
            <View style={styles.user_container}>
                <View style={styles.user_image}></View>
                {/* <Image source={landingPage} style={styles.user_image} />  */}
                <View style={styles.user_text_container}>
                    <Text style={styles.subheader_text}>Hey!</Text>
                    <Text style={styles.header_text}>Jefferson Chen</Text>
                </View>
            </View>

            <View style={styles.stats_container}>
                <Text style={styles.text_header}>Your Stats</Text>
                <View style={styles.container}>
                    <Image style={styles.stats_background} source={statsBackground}/>
                    <Text style={styles.stats_money}>$25,402.49</Text>
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
                        <Image source={UnresolvedReceipts} style={styles.image_style}/> 
                        <Text style={styles.number}>2</Text>
                        <Text style={styles.text_under}>Unresolved</Text>
                    </View>
                </View>
            </View>

            <View style={styles.transactions_container}>
                <Text style={styles.text_header}>Transactions</Text>
                

                <ScrollView contentContainerStyle={styles.all_transactions}>
                    <View style={styles.transactions_text_container}>

                        <Image source={IconRetail} style={styles.transactions_image}/>
                        <View style={styles.text_containers}>
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.transactions_date}>June 11, 2023</Text>
                        </View>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.transactions_text_container}>
                        <Image source={IconRetail} style={styles.transactions_image}/>
                        <View style={styles.text_containers}>
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.transactions_date}>June 11, 2023</Text>
                        </View>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.transactions_text_container}>
                        <Image source={IconRetail} style={styles.transactions_image}/>
                        <View style={styles.text_containers}>
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.transactions_date}>June 11, 2023</Text>
                        </View>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.transactions_text_container}>
                        <Image source={IconRetail} style={styles.transactions_image}/>
                        <View style={styles.text_containers}>
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.transactions_date}>June 11, 2023</Text>
                        </View>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.transactions_text_container}>
                        <Image source={IconRetail} style={styles.transactions_image}/>
                        <View style={styles.text_containers}>
                            <Text style={styles.dior_text}>Dior</Text>
                            <Text style={styles.transactions_date}>June 11, 2023</Text>
                        </View>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>
                </ScrollView>
            </View>
                
            <View style={styles.nav_bar}>  
                <Image source={NavHome} style={styles.nav_icon}/>
                <Image source={NavCalendar} style={styles.nav_icon}/>
                <View style={styles.camera_container}>
                    <Image source={NavScan} style={styles.nav_icon}/>
                </View>
                <Image source={NavHistory} style={styles.nav_icon}/>
                <Image source={NavProfile} style={styles.nav_icon}/>

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
    },

    header_text: {
        color: '#f1f1f1',
        fontSize: 24,
    },

    text_header: {
        color: '#f1f1f1',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 0,

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
    },

    stats_your_spendings: {
        color: '#1f1f1f',
        fontSize: 16,
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
    },

    text_under: {
        color: '#f1f1f1',
        fontSize: 16,
        lineHeight: 16,
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
        color: '#F7B360'
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
    }




  });
  
  