import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your goal." />
        <Button title="Add" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 24
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 5, 
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
  },

  goalsContainer: {
    flex: 5,
  }
});
