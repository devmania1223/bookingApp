import React from 'react';
import {Button, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {signOutUser} from "../redux/user/actions";
import {Loading} from "aws-amplify-react-native";
import Error from "../components/Common/Error";

const ProfileScreen = ({navigation}) => {
    const {profile, isLoading, errors} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signOutUser());
    };
    if(isLoading) return <Loading/>;
    if(errors || !profile) return <Error/>; //@TODO...
    return (
        <>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{JSON.stringify(profile)}</Text>
            </View>
            <Button title={'sign out'} onPress={logout}/>
        </>

    );
};

export default ProfileScreen;
