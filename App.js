import { Alert, StyleSheet, Button } from 'react-native';
import { addReceipt, getReceipts } from './db/db';

export default function App() {
  return (
    <>
    <Button styles={styles.button}
          title = "Placeholder"
          color = "#F7B05A"
          onPress={() => {}} 
      />
      <Button styles={styles.button}
          title = "Add"
          color = "#F7B05A"
          onPress={() => {addReceipt("test")}} 
      />

      <Button styles={styles.button}
          title = "Drop"
          color = "#F7B05A"
          onPress={() => {console.log(getReceipts())}} 
      />
    </>
  )
}

const styles = StyleSheet.create({
    
  button: {
      color: 'black',
      fontSize: 20,
  },
})