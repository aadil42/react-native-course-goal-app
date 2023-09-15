import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your goal." />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 5, 
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8
  }
});
