import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         View, 
         Button, 
         FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enterdGoal, setEnterdGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (userInput) => {
   setEnterdGoal(userInput);
  }
  const addGoalHandler = () => {
    setGoalList(goalList => [{text: enterdGoal, id:  Math.random().toString()}, ...goalList]);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput goalInputHandler={goalInputHandler} styles={styles}/>
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
         data={goalList}
         renderItem={(itemData) => {
          return (
            <GoalItem goalData={itemData}/>
          );
         }}
         keyExtractor={(item, index) => item.id}
         alwaysBounceVertical={false}
        />
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
  goalsContainer: {
    flex: 5,
  }
});
