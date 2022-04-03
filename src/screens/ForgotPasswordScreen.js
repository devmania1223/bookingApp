import React from 'react';
import ForgotPassword from "../components/User/ForgotPassword";
import {useDispatch, useSelector} from "react-redux";
import {hideUserError, recoverPassword} from "../redux/user/actions";
import Error from "../components/Common/Error";
import Loading from "../components/Common/Loading";

const ForgotPasswordScreen = ({navigation}) => {
    const {isLoading, errors} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const submit = (values) => {
        const {email} = values;
        const username = email ? email.toLowerCase() : null;
        dispatch(recoverPassword(username));
    };
    if(errors) return <Error cleanUp={() => dispatch(hideUserError())}
                             message={errors ? errors.message : null}/>;
    if(isLoading) return  <Loading/>;
    return (
        <ForgotPassword navigation={navigation} submit={submit}/>
    );
};

export default ForgotPasswordScreen;
