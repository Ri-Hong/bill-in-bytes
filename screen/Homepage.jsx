import { ScrollView } from "react-native-web";
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';
import landingPage from '../assets/landingPage.png';

export default function Homepage() {
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

            <View style={styles.stats_container}>
                <Text style={styles.text_header}>Your Stats</Text>
                <View style={styles.money_container}>
                    <Text style={styles.stats_money}>$25,402.49</Text>
                    <Text style={styles.stats_your_spendings}>Your Spendings</Text>
                </View>
                <View style={styles.timing_container}>
                    <View style={styles.box_container}>
                        <Image source={require('./my-icon.png')} style={styles.image_style}/> 
                        <Text style={styles.number}>125</Text>
                        <Text style={styles.text_under}>Total</Text>
                    </View>

                    <View style={styles.box_container}>
                        <Image source={require('./my-icon.png')} style={styles.image_style}/> 
                        <Text style={styles.number}>123</Text>
                        <Text style={styles.text_under}>Resolved</Text>
                    </View>

                    <View style={styles.box_container}>
                        <Image source={require('./my-icon.png')} style={styles.image_style}/> 
                        <Text style={styles.number}>2</Text>
                        <Text style={styles.text_under}>Unresolved</Text>
                    </View>
                </View>
            </View>

            <View style={styles.transactions_container}>
                <Text style={styles.text_header}>Transactions</Text>
                

                <View>
                    <View style={styles.transactions_text_container}>
                        <Image source={require('./my-icon.png')} style={styles.transactions_image}/>
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.transactions_date}>June 11, 2023</Text>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>
                    
                    <Hr></Hr>

                    <View style={styles.transactions_text_container}>
                        <Image source={require('./my-icon.png')} style={styles.transactions_image}/>
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.transactions_date}>June 11, 2023</Text>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>
                    
                    <Hr></Hr>
                    
                    <View style={styles.transactions_text_container}>
                        <Image source={require('./my-icon.png')} style={styles.transactions_image}/> 
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.transactions_date}>June 11, 2023</Text>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>

                    <Hr></Hr>

                    <View style={styles.transactions_text_container}>
                        <Image source={require('./my-icon.png')} style={styles.transactions_image}/>
                        <Text style={styles.dior_text}>Dior</Text>
                        <Text style={styles.transactions_date}>June 11, 2023</Text>
                        <Text style={styles.transactions_money}>$124.50</Text>
                    </View>
                </View>
            </View>

            <Hr></Hr>
                
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
    
    container:{

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

    transactions_container: {

    },

    transactions_text_container: {

    },

    transactions_image: {

    },

    dior_text: {

    },

    transactions_date: {

    },

    transactions_money: {

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
  
  