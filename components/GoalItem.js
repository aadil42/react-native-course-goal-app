import {
        StyleSheet, 
        View, 
        Text } from 'react-native';

const GoalItem = ({goalData}) => {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText} >{goalData.item.text}</Text>
        </View>
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