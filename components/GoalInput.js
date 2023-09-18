import { StyleSheet, TextInput, Button, View } from "react-native";
import { useState } from 'react';

const GoalInput = ({addGoalHandler}) => {

    const [enterdGoal, setEnterdGoal] = useState('');

    const goalInputHandler = (userInput) => {
        setEnterdGoal(userInput);
    }
    const addGoal = () => {
        addGoalHandler(enterdGoal);
        setEnterdGoal('');
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} 
                   style={styles.textInput}  
                   placeholder="Enter your goal."
                   value={enterdGoal}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
    );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;