import React, {useEffect, useState} from 'react';
import PropertyContainer from "../components/Property/Container";
import Header from "../components/Header/Header";
import {Button, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import { Auth } from 'aws-amplify';

const VerificationScreen = ({route, navigation}) => {
    const verifyUser = () => {
        // After retrieving the confirmation code from the user
        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => console.log(data))
            .catch(err => console.log(err));

/*        Auth.resendSignUp(username).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });*/
    };
    const resendCode = () => {
        Auth.resendSignUp(username).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    };
    const {email, username} = route.params;
    const [code, setCode] = useState('');
    return (
        <ScrollView style={styles.list}>
            <Text>email : {email}, username: {username}</Text>
            <TextInput style={styles.item} onChangeText={text => setCode(text)}
                       value={code}/>
                       <Button title={'verify'} onPress={verifyUser}/>

            <TouchableOpacity onPress={resendCode}>
                <Text>Send me another verification code</Text>
            </TouchableOpacity>
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
export default VerificationScreen;
