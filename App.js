import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         View, 
         Button, 
         FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = () => {
    setIsModalVisible(false);
  }
  const showModal = () => {
    setIsModalVisible(true); 
  }
  const addGoalHandler = (enterdGoal) => {
    setGoalList(goalList => [{text: enterdGoal, id:  Math.random().toString()}, ...goalList]);
  }
  const deleteGoal = (id) => {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goalItem) => goalItem.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title="Add Goal" color="#335adaf9" onPress={showModal}/>
      <GoalInput hideModal={hideModal} modalVisibility={isModalVisible} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
         data={goalList}
         renderItem={(itemData) => {
          return (
            <GoalItem deleteGoal={deleteGoal} goalData={itemData}/>
          );
         }}
         keyExtractor={(item, index) => item.id}
         alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#021546" // this color should be added in app.json file so it applys to all the pages. For some reason it's not  working there.
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16
  },
});
