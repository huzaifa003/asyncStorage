import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from './SignupScreen';
import Home from './Home';

export default function LoginScreen() {

    const [username, onChangeUsername] = useState('');
    const [passsword, onChangePassword] = useState('');
    const [display, setDipslay] = useState('none');
    const navigation = useNavigation();
    

    

    useEffect(()=>{
        const checkSignin = async ()=>{
            if (await AsyncStorage.getItem("username")  == null)
            {
                setLogin(false);
            }
            else{
                setLogin(true);
            }
        }
        checkSignin();

    }, [login]);
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

    const [login, setLogin] = useState(false);

    


    return (
        <>
        {console.log(AsyncStorage.getItem("Huzai"))}
        {console.log(login)}
            {login === false ? <SignupScreen/> : <Home/>}
        </>
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
