import React from 'react';
import { Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Input = Props => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={Props.placeholder}
      placeholderTextColor={'darkgrey'}
      textAlign={'left'}
      underlineColorAndroid={'transparent'}
      maxLength={25}
      keyboardType={Props.keyboardType}
      textContentType={Props.textContentType}
      onChangeText={Props.onChangeText}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // alignContent: 'flex-start',
    // textAlign: 'left',
  },
  inputStyle: {
    marginBottom: 10,
    color: 'black',
    borderColor: 'grey',
    // borderBottomWidth: 0.5,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
});

//make this component available to the app
export default Input;
