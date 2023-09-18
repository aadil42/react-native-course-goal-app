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
        <View style={styles.goalContainer}>
          <Pressable 
          android_ripple={{color: '#210644', borderless: true}} 
          onPress={deleteItem.bind(this, goalData.item.id)}
          style={({pressed}) => pressed && styles.pressedRipple}
          >
            <Text style={styles.goalText} >{goalData.item.text}</Text>
          </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalContainer:  {
      backgroundColor: '#5e0acc',
      marginBottom: 8,
      borderRadius: 10
    },
    pressedRipple: {
      color: '#210644'
    },
    goalText: {
      padding: 8,
      color: '#fff'
    }
  });
  

export default GoalItem;