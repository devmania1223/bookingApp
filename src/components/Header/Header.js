import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity,  Platform, StatusBar} from "react-native";
import { useNavigation, DrawerActions  } from '@react-navigation/native';

const Header = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Text style={{color:'white'}}>Menu</Text>
            </TouchableOpacity>
            <Image source={require('../../../assets/Logo.png')}/>
            <Text style={{color:'white'}}>Profile</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingHorizontal: 10,
        backgroundColor: "#39A298"
    }
});
export default Header;
