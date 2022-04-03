import React, {useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import axios from 'axios';
import useApi from "../hooks/useApi";
import Header from "../components/Header/Header";
const HomeScreen = () => {
    const [get, results, error] = useApi();
    const makeRequest = async () => {
        await get('/properties');
    };

    return (
        <>
            <View style={styles.container}>

                <Button onPress={makeRequest} title='hello'/>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
