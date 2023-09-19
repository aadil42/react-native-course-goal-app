import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";
import { useState } from 'react';

const GoalInput = ({addGoalHandler, modalVisibility, hideModal}) => {
    
    const [enterdGoal, setEnterdGoal] = useState('');

    const goalInputHandler = (userInput) => {
        setEnterdGoal(userInput);
    }
    const addGoal = () => {
        addGoalHandler(enterdGoal);
        setEnterdGoal('');
        hideModal();
    }

    return (
    <Modal visible={modalVisibility} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput onChangeText={goalInputHandler} 
                    style={styles.textInput}  
                    placeholder="Enter your goal."
                    value={enterdGoal}
                    placeholderTextColor="#ffffff"
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add" onPress={addGoal} color="#335adaf9" />
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={hideModal} color="#335adaf9" />
                </View>
            </View>    
        </View>
    </Modal>    
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#06217af9'
    },
    textInput: {
      borderWidth: 1,
      padding: 5, 
      borderColor: '#cccccc',
      width: '85%',
      marginRight: 8,
      borderRadius: 5,
      color: "#ffffff"
    },
    buttonContainer: {
        flexDirection: 'row', 
    },
    button: {
        width: '25%',
        marginHorizontal: 16,
        marginTop: 15,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16
    }
});

export default GoalInput;
// #020d31f9