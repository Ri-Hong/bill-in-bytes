import { ScrollView } from "react-native-web";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Button, Image, ImageBackground, Pressable } from 'react-native';
import landingPage from '../assets/landingPage.png'

import NavHome from '../assets/NavHome.png'
import NavCalendar from '../assets/NavCalendar.png'
import NavScan from '../assets/NavScan.png'
import NavHistory from '../assets/NavHistory.png'
import NavProfile from '../assets/NavProfile.png'

export default function UnresolvedReceipts({navigation}) {
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

            <View style={styles.unresolvedReceipts_container}>
                <Text style={styles.uRText}>Unresolved Receipts</Text>
                <View style={styles.uRContainer}>
                    <View style={styles.listContainer}>
                        <View style={styles.receipt}>
                            <Image source={require('../assets/gasIcon.png')} style={styles.receiptImage} /> 
                            <View>
                                <Text style={styles.dior_text}>Tesla</Text>
                                <Text style={styles.receiptDate}>June 28, 2022</Text>
                            </View>
                            <Text style={styles.receiptAmount}>$124.50</Text>
                            <Image source={require('../assets/ResolvedReceipts.png')} style={styles.BigCheckmark} /> 
                        </View>
                        <View>
                            <View style={styles.oweMoneyRow}>
                                <Image source={require('../assets/pikachu.jpg')} style={styles.oweMoney} /> 
                                <Text style={styles.receiptName}>Ri Hong</Text>
                                <Text style={styles.receiptAmount}>$4.50</Text>
                                <Image source={require('../assets/ResolvedReceipts.png')} style={styles.SmallerCheckmark} />
                            </View>
                            <View style={styles.oweMoneyRow}>
                                <Image source={require('../assets/elonmusk.jpg')} style={styles.oweMoney} /> 
                                <Text style={styles.receiptName}>Elon Musk</Text>
                                <Text style={styles.receiptAmount}>$120.00</Text>
                                <Image source={require('../assets/ResolvedReceipts.png')} style={styles.SmallerCheckmark} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.listContainer}>
                        <View style={styles.receipt}>
                            <Image source={require('../assets/retailIcon.png')} style={styles.receiptImage} /> 
                            <View>
                                <Text style={styles.dior_text}>Target</Text>
                                <Text style={styles.receiptDate}>May 11, 2023</Text>
                            </View>
                            <Text style={styles.receiptAmount}>$216.97</Text>
                            <Image source={require('../assets/ResolvedReceipts.png')} style={styles.BigCheckmark} /> 
                        </View>
                        <View>
                            <View style={styles.oweMoneyRow}>
                            <Image source={require('../assets/Among-Us-Logo.png')} style={styles.oweMoney} /> 
                                <Text style={styles.receiptName}>Sebastian</Text>
                                <Text style={styles.receiptAmount}>$120.00</Text>
                                <Image source={require('../assets/ResolvedReceipts.png')} style={styles.SmallerCheckmark} />
                            </View>
                            <View style={styles.oweMoneyRow}>
                            <Image source={require('../assets/bill.jpg')} style={styles.oweMoney} /> 
                                <Text style={styles.receiptName}>Bill Gates</Text>
                                <Text style={styles.receiptAmount}>$92.47</Text>
                                <Image source={require('../assets/ResolvedReceipts.png')} style={styles.SmallerCheckmark} />
                            </View>
                            <View style={styles.oweMoneyRow}>
                            <Image source={require('../assets/pikachu.jpg')} style={styles.oweMoney} /> 
                                <Text style={styles.receiptName}>Ri Hong</Text>
                                <Text style={styles.receiptAmount}>$4.50</Text>
                                <Image source={require('../assets/ResolvedReceipts.png')} style={styles.SmallerCheckmark} />
                            </View>
                        </View>
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
    
    container: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
    },

    backgroudImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "cover"
    }, 

    user_container: {
        flexDirection: 'row'
    },

    user_image: {
        width: 43,
        height: 43,
        borderRadius: 43,
    },

    user_text_container: {
        marginLeft: 20
    },

    subheader_text: {
        color: '#F1F1F1',
        fontSize: 16,
        fontFamily: "Rokkitt",
    },

    oweMoneyRow: {
        flexDirection: 'row',
        marginTop: 10
    },

    header_text: {
        color: '#F1F1F1',
        fontSize: 24,
        fontFamily: "Rokkitt",
    },

    unresolvedReceipts_container: {
        marginTop: 20
    },

    uRText: {
        color: '#F1F1F1',
        fontSize: 30,
        fontFamily: "Rokkitt",
    },

    uRContainer: {

    },

    listContainer: {
        marginTop: 20
    },

    receipt: {
        flexDirection: 'row',
        marginTop: 20
    },

    receiptImage: {
        width: 50,
        height: 50,
        marginRight: 20
    },

    dior_text: {
        fontSize: 24,
        fontFamily: "Rokkitt",
        color: '#F1F1F1'
    },

    receiptDate: {
        fontSize: 16,
        fontFamily: "Rokkitt",
        color: '#F1F1F1',
        opacity: 0.5,
    },

    BigCheckmark: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 30,
        position: 'absolute',
        right: 0
    },
    
    oweMoney: {
        width: 32,
        height: 32,
        borderRadius: 32,
        marginLeft: 40,
        marginRight: 10
    },

    receiptName: {
        color: '#F1F1F1',
        fontSize: 20,
        fontFamily: "Rokkitt",
    },

    receiptAmount: {
        fontFamily: "Rokkitt",
        fontSize: 16,
        color: '#F7B360',
        position: 'absolute',
        right: 40
    },

    SmallerCheckmark: {
        width: 24,
        height: 24,
        borderRadius: 24,
        position: 'absolute',
        right: 0,
        resizeMode: 'contain',

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

  });
  
  