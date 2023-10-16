import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen() {
  
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');

  const navigation = useNavigation();

  const loginBtnPressed = async () => {
    
    await AsyncStorage.setItem(username,passsword)
    console.log(await AsyncStorage.getItem(username))
    navigation.push('LoginScreen')

    // if(!username.length){
    //     // console.log('Field is Empty')
    //     Alert.alert('username cannnot be empty')
    // }

  }

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:25}}> Please Enter your name and password to sign up </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="User Name"
      />

      <TextInput
      
        style={styles.input}
        onChangeText={onChangePassword}
        value={passsword}
        placeholder="Password"
        // keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{color:'white'}}>Sign Up</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LoginScreen')}>
        <Text style={{color:'white'}}>Have an account? Log in</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
