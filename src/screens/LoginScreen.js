import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import Login from '../components/User/Login';
import {hideUserError, setUserError, signInGoogle, signInUser} from "../redux/user/actions";
import Error from "../components/Common/Error";
import Loading from "../components/Common/Loading";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from 'expo-auth-session';
import axios from "axios";
import { Auth } from 'aws-amplify';
import {SIGN_IN_GOOGLE_ERROR, SIGN_IN_GOOGLE_SUCCESS} from "../redux/user/actionTypes";

const LoginScreen = ({navigation}) => {
    useFocusEffect(() => {
        if(token) navigation.navigate('ProfileHome');
    });
    const {token, errors, isLoading} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const submitLogin = ({email, password}) => {
        const username = email ? email.trim() : null;
        return dispatch(signInUser(username, password));
    };
    const loginGoogle = async () => {
        let redirectUrl = AuthSession.getRedirectUrl();
        console.log(redirectUrl);
        let result = await AuthSession.startAsync({
            authUrl:
                `https://booking-user-pool-domain-customer.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=CODE&client_id=5vpqdi2hlkvqjsjqd3gsama9c8&scope=email%20profile%20openid`
        });

        if (result.type !== 'success') {
            dispatch({type: SIGN_IN_GOOGLE_ERROR, payload: {message:'Login failed, please try again'}});
            return;
        }
        let accessToken = result.params.code;
        dispatch(signInGoogle(accessToken));
    };
    const loginBackHandler = () => {
        dispatch(hideUserError());
        navigation.navigate('Profile');
    };
    if(errors) return <Error pressHandler={loginBackHandler}
                             message={errors.message} />;
    if(isLoading) return <Loading/>;
    if(token) navigation.navigate('ProfileHome');
    return (
        <Login navigation={navigation} submit={submitLogin} loginGoogle={loginGoogle}/>
    );
};

export default LoginScreen;
