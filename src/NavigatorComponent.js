import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import PropertiesScreen from "./screens/PropertiesScreen";
import PropertyScreen from "./screens/PropertyScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const PropertyStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const PropertiesNavigator = () => {
    return (
        <PropertyStack.Navigator initialRouteName="Properties" headerMode='none'>
            <PropertyStack.Screen name="Properties" component={PropertiesScreen}/>
            <PropertyStack.Screen name="Property" component={PropertyScreen}/>
        </PropertyStack.Navigator>
    );
};
const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator initialRouteName="Login" headerMode='none'>
            <ProfileStack.Screen name="Login" component={LoginScreen}/>
            <ProfileStack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <ProfileStack.Screen name="Register" component={RegisterScreen}/>
            <ProfileStack.Screen name="ProfileHome" component={ProfileScreen}/>
        </ProfileStack.Navigator>
    );
};

const BottomTabNavigator = () => {
        return (
            <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Search') {
                            iconName = 'ios-search'
                        } else if (route.name === 'Reservations') {
                            iconName = 'ios-calendar'
                        } else if (route.name === 'Profile') {
                            iconName = 'ios-person'
                        } else if (route.name === 'More') {
                            iconName = 'ios-more'
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: '#303030',
                    style: {backgroundColor: '#39A298', borderTopColor: 'white'},
                    keyboardHidesTabBar: true,
                }}
            >
                <Tab.Screen name="Search" component={PropertiesNavigator}/>
                <Tab.Screen name="Reservations" component={PropertiesScreen}/>
                <Tab.Screen name="Profile" component={ProfileNavigator}/>
                <Tab.Screen name="More" component={ProfileScreen}/>
            </Tab.Navigator>
        )
};


const NavigatorComponent = (props) => {
        return (
            <NavigationContainer>
                <AppStack.Navigator initialRouteName="SignInScreen" headerMode='none'>
                    {
                        props.authToken === '' ? (
                            <>
                                <AppStack.Screen
                                    name="SignInScreen"
                                    component={LoginScreen}
                                />
                                <AppStack.Screen
                                    name="SignUpScreenFirst"
                                    component={SignUpScreenFirst}
                                />
                                <AppStack.Screen
                                    name="SignUpScreenSecond"
                                    component={SignUpScreenSecond}
                                />
                            </>
                        ) : (
                            <AppStack.Screen
                                name="HomeNav"
                                component={BottomTabNavigator}/>
                        )
                    }
                </AppStack.Navigator>
            </NavigationContainer>
        );
};

export default NavigatorComponent;


