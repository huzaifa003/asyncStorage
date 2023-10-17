import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default Home = () => {
    const navigation = useNavigation();

    const [color, setColor] = useState('black')

    const changeColor = ()=>{
    
        console.log(color)
        if (color == 'black'){
            setColor('white')
        }
        else{
            setColor('black');
        }
    }
    return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color}}>
            <View>
            <Text>hello {global.username}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{ AsyncStorage.removeItem("username"); navigation.reset({index: 0, routes: [{name : 'LoginScreen'}]})}}>
                <Text style={{ color: 'white' }}>Log out</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={changeColor}>
                <Text style={{ color: 'white' }}>Change Color</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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
