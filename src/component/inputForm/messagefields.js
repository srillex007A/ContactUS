import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

// create a component
const MessageInput = ({onChangeText}) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholderTextColor={'darkgrey'}
      textAlign={'left'}
      underlineColorAndroid={'transparent'}
      maxLength={100}
      keyboardType={'default'}
      textContentType={'none'}
      multiline={true}
      numberOfLines={3}
      textAlignVertical={'top'}
      onChangeText={onChangeText}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    color: 'black',
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    height: '20%',
    padding: 10,
    marginBottom: 10,
  },
});

//make this component available to the app
export default MessageInput;
