import {
        StyleSheet, 
        View, 
        Text, 
        Pressable } from 'react-native';

const GoalItem = ({goalData, deleteGoal}) => {

    const deleteItem = (id) => {
      deleteGoal(id);
    } 

    return (
      <Pressable onPress={deleteItem.bind(this, goalData.item.id)}>
        <View style={styles.goalContainer}>
            <Text style={styles.goalText} >{goalData.item.text}</Text>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({
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
  

export default GoalItem;