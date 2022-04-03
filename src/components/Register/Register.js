import React, {useState} from 'react';
import {Button, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import { Auth } from 'aws-amplify';


const Register = ({navigation}) => {
    console.log(navigation);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');


    const register = () => {
        Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                given_name: name,
                family_name: family// optional - E.164 number convention
                // other custom attributes
            },
            validationData: []  //optional
        })
            .then(data => {
                console.log(data);
                navigation.navigate('Reservations', {
                    screen: "Verify",
                    params: {email, username}
                });
            })
            .catch(err => console.log(err));


    };
    return (
        <ScrollView style={styles.list}>
            <Text>email</Text>
            <TextInput style={styles.item} onChangeText={text => setEmail(text)}
                       value={email}/>
            <Text>username</Text>
            <TextInput style={styles.item} onChangeText={text => setUsername(text)}
                       value={username}/>
            <Text>name</Text>
            <TextInput style={styles.item} onChangeText={text => setName(text)}
                       value={name}/>
            <Text>family</Text>
            <TextInput style={styles.item} onChangeText={text => setFamily(text)}
                       value={family}/>
            <Text>password</Text>
            <TextInput style={styles.item} onChangeText={text => setPass(text)}
                       value={password}/>
                       <Button title={'submit'} onPress={register}/>

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    list: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#E5E5E5",

    },
    item: {
        flex: 1,
        height: 40,
        marginHorizontal: 33,
        marginVertical: 18,
        shadowColor: 'rgba(0, 0, 0, 0.14)',
        elevation: Platform.OS === 'ios' ? 0 : 3,
        borderRadius: 5
    }
});
export default Register;
