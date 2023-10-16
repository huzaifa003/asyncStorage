import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {

    const [username, onChangeUsername] = useState('');
    const [passsword, onChangePassword] = useState('');
    const [display, setDipslay] = useState('none');
    const navigation = useNavigation();

    const loginBtnPressed = async () => {

        const response = await AsyncStorage.getItem(username);
        console.log(username)
        console.log(response);
        console.log(await AsyncStorage.getItem(username))
        if (response == passsword) { global.username = username; navigation.push('Home') ; }
        else {
            setDipslay('');
        }

        // if(!username.length){
        //     // console.log('Field is Empty')
        //     Alert.alert('username cannnot be empty')
        // }

    }

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 25 }}> Please Enter your name and password to log in </Text>
             {display === '' ? <Text>  PLEASE ENTER THE CORRECT CREDIENTIALS</Text> : ""}
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
                <Text style={{ color: 'white' }}>Sign In</Text>
            </TouchableOpacity>

        <Text></Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignupScreen')}>
                <Text style={{ color: 'white' }}> Want an Account? Sign Up</Text>
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
