//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const SubmitButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.inputStyle} onPress={onPress}>
      <Text style={styles.textStyle}>Submit</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    borderRadius: 10,
    height: 40,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default SubmitButton;
