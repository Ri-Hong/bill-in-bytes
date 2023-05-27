import { ScrollView } from "react-native-web";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';

export default function Landing() {
    return(
        
        
        <SafeAreaView styles={styles.container}>
            <View styles={styles.image_container}>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} />
            </View>

            <View styles={styles.text_container}>
                <Text styles={styles.text}> Discover your way to managing finances </Text>
                <Text styles={styles.text}> Control your expenses and streamline your way to managing your finances. Financed for you!</Text>
            </View>
           
            <Button styles={styles.button}
                title = "Next"
                color = "#F7B05A"
                onPress={() => Alert.alert('Button with adjusted color pressed')} 
            />


            
        </SafeAreaView>
        
        
    );
  };

  const styles = StyleSheet.create({
    
    button: {
        color: 'black',
        fontSize: 20,
    },
    
    container: {
      
    },

    image_container: {

    },

    text_container:{

    },

    text: {

    }


  });
  
  