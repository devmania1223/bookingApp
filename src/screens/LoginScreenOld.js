import React, {useEffect, useState} from 'react';
import Register from "../components/Register/Register";
import {Button, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput} from "react-native";
import {signInAsync} from "expo-google-sign-in";
import { Auth } from 'aws-amplify';
const LoginScreenOld = ({route, navigation}) => {
    const SignIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
                console.log(user);
        } catch (err) {
            console.log(err);
            if (err.code === 'UserNotConfirmedException') {
                // The error happens if the user didn't finish the confirmation step when signing up
                // In this case you need to resend the code and confirm the user
                // About how to resend the code and confirm the user, please check the signUp part
            } else if (err.code === 'PasswordResetRequiredException') {
                // The error happens when the password is reset in the Cognito console
                // In this case you need to call forgotPassword to reset the password
                // Please check the Forgot Password part.
            } else if (err.code === 'NotAuthorizedException') {
                // The error happens when the incorrect password is provided
            } else if (err.code === 'UserNotFoundException') {
                // The error happens when the supplied username/email does not exist in the Cognito user pool
            } else {
                console.log(err);
            }
        }
    };
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    return (
            <ScrollView style={styles.list}>
                <Text>username</Text>
                <TextInput style={styles.item} onChangeText={text => setUsername(text)}
                           value={username}/>
                <Text>password</Text>
                <TextInput style={styles.item} onChangeText={text => setPass(text)}
                           value={password}/>
                <Button title={'submit'} onPress={SignIn}/>

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
export default LoginScreenOld;
