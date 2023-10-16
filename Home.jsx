import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Home = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Text>hello {global.username}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.reset({index: 0, routes: [{name : 'LoginScreen'}]})}}>
                <Text style={{ color: 'white' }}>Log out</Text>
            </TouchableOpacity>

        </View>
    )
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
