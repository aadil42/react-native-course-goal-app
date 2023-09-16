import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [enterdGoal, setEnterdGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (userInput) => {
   setEnterdGoal(userInput);
  }
  const addGoalHandler = () => {
    setGoalList(goalList => [enterdGoal, ...goalList]);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder="Enter your goal." />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {goalList.map((goal, index) => (
            <View key={index} style={styles.goalContainer}>
                <Text style={styles.goalText} >{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
  },
  goalContainer:  {
    backgroundColor: '#5e0acc',
    marginBottom: 8,
    padding: 8,
    borderRadius: 10
  },
  goalText: {
    color: '#fff'
  }
});
