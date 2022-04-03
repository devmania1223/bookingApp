import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Loading from "../../Common/Loading";
import {Button} from "react-native-paper";

const RegisterSuccess = ({login}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You were successfully registered and can now login</Text>
            <Button
                onPress={login}
                color="#009688"
                mode="contained"
                style={styles.button}>
                <Text style={{lineHeight: 30}}>Continue</Text>
            </Button>
        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        marginBottom: 30,
        marginTop: 20,
        fontFamily: 'montserratBold',
    }
});

export default RegisterSuccess;
