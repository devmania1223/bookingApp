import {
    HIDE_USER_ERROR, SET_USER_ERROR,
    SIGN_IN, SIGN_IN_FORGOT, SIGN_IN_GOOGLE,
    SIGN_OUT,
    SIGN_UP,
    SIGN_UP_FIRST_STEP,
    SIGN_UP_RESEND_CODE,
    SIGN_UP_VERIFY, UPDATE_USER
} from "./actionTypes";

export function signInUser(email,password) {
    return {
        type: SIGN_IN,
        payload: { email,password }
    };
}
export function signInGoogle(token) {
    return {
        type: SIGN_IN_GOOGLE,
        payload: {token}
    };
}

export function signOutUser() {
    return {
        type: SIGN_OUT
    };
}

export function hideUserError() {
    return {
        type: HIDE_USER_ERROR
    }
}
export function setUserError(error) {
    return {
        type: SET_USER_ERROR,
        payload: error
    }
}
export function signUpUser(fields) {
    return {
        type: SIGN_UP_FIRST_STEP,
        payload: { fields }
    };
}
export function verifyUser(username, code) {
    return {
        type: SIGN_UP_VERIFY,
        payload: {username, code}
    };
}
export function resendVerificationCode(username){
    return {
        type: SIGN_UP_RESEND_CODE,
        payload: {username}
    };
}
export function updateUser(arr){
    return{
        type: UPDATE_USER,
        payload:{arr}
    }
}
export function recoverPassword(username){
    return {
        type: SIGN_IN_FORGOT,
        payload: {username}
    }
}
