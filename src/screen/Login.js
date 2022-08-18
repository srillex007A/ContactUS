import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';

import Input from '../component/inputForm/fields';
import MessageInput from '../component/inputForm/messagefields';
import SubmitButton from '../component/Button/submitbtn';

// create a component
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [add, setAdd] = useState('');

  // console.log(name);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex:1}}>
        <View style={styles.mainContainer}>
          <Text style={styles.ContactUS}>Contact Us</Text>
          <Input
            placeholder={'Name'}
            keyboardType={'default'}
            textContentType={'name'}
            onChangeText={text => setName(text)}
          />
          <Input
            placeholder={'Email id'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder={'Mobile No'}
            keyboardType={'phone-pad'}
            textContentType={'telephoneNumber'}
            onChangeText={text => setMobile(text)}
          />

          <MessageInput onChangeText={text => setAdd(text)} />
          <SubmitButton
            onPress={() => console.log({name, email, mobile, add})}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainContainer: {
    marginHorizontal: '10%',
  },
  ContactUS: {
    color: 'black',
    marginVertical: '20%',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: '20%',
  },
});

//make this component available to the app
export default Login;
