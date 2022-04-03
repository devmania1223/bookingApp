import React from 'react';
import {Button, View} from "react-native";
import * as Google from 'expo-google-app-auth';
import {Auth} from "aws-amplify";

const ProfileScreen = props => {
    const  signIn = async () => {
        const { type, token, expires, user } = await Google.logInAsync({
            issuer: 'https://accounts.google.com',
            androidClientId: "784980094016-8mufpr3rbgrohv7t962bkrvrq9h7g10i.apps.googleusercontent.com",
            scope: ["profile", "email"]
        });
        if (type === 'success') {
            // sign in with federated identity
            Auth.federatedSignIn('google', { token, expires_at: expires}, { name: 'USER_NAME' })
                .then(credentials => {
                    console.log('get aws credentials', credentials);
                }).catch(e => {
                console.log(e);
            });
        }
    };
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title={"sign in"} onPress={signIn}/>
        </View>
    );
};

export default ProfileScreen;
