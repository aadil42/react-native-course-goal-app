import { StyleSheet, TextInput } from "react-native";

const GoalInput = ({goalInputHandler}) => {
    return (
        <TextInput onChangeText={goalInputHandler} 
                   style={styles.textInput}  
                   placeholder="Enter your goal."
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      paddingLeft: 5, 
      borderColor: '#cccccc',
      width: '80%',
      marginRight: 8,
    },
});

export default GoalInput;