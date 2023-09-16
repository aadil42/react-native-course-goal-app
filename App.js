import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enterdGoal, setEnterdGoal] = useState('');
  const [count, setCount] = useState(0);

  const goalInputHandler = (userInput) => {
   setEnterdGoal(userInput);
  }
  const addGoalHandler = () => {
    console.log(enterdGoal);
  }
  const updateCount = () => {
    // setCount(count => count+1);
    for(let i = 0; i < 1000; i++) {
      setCount(count => count+1);
      // setCount(count+i);
    }
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder="Enter your goal." />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
      <View >
        <Text>{count}</Text>
        <Button title="Increase" onPress={updateCount} />
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
