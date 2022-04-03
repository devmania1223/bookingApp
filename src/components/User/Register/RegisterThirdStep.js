import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import {Button} from "react-native-paper";
import {Formik} from "formik";
import * as Yup from "yup";

const RegisterThirdStep = ({verify, resendCode}) => {
    return (
        <KeyboardAvoidingView style={styles.containerWrapper}>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../../../assets/Logo.png')}/>
                    <Text style={styles.logo_text}>BOOKING</Text>
                    <Text style={styles.title}>Sign up</Text>
                    <Formik
                        initialValues={{code: ''}}
                        validationSchema={Yup.object({
                            code: Yup.string()
                                .required('Code is required')
                        })}
                        onSubmit={(values) => {
                            verify(values);
                        }}>
                        {props => (
                            <View>
                                <Text style={styles.label}>Verification code</Text>
                                <TextInput
                                    onChangeText={props.handleChange('code')}
                                    onBlur={props.handleBlur('code')}
                                    value={props.values.password}
                                    placeholder="Enter the verification code that was sent to your email"
                                    style={styles.input}
                                    secureTextEntry
                                />
                                {props.touched.code && props.errors.code ? (
                                    <Text style={styles.error}>{props.errors.code}</Text>
                                ) : null}
                                <Button
                                    onPress={props.handleSubmit}
                                    color="#009688"
                                    mode="contained"
                                    loading={props.isSubmitting}
                                    disabled={props.isSubmitting}
                                    style={styles.button}>
                                    <Text style={{lineHeight: 30}}>Register</Text>
                                </Button>
                                <TouchableOpacity onPress={resendCode}>
                                    <Text style={styles.question}>Didn't receive any code?</Text>
                                    <Text style={styles.question} >Tap here to resend the code</Text>
                                </TouchableOpacity>
                            </View>

                        )}
                    </Formik>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 10,
    },
    logo: {
        height: 100,
        width: 100,
    },
    logo_text: {
        color: '#575757',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        fontFamily: 'montserratMed',
    },
    title: {
        margin: 24,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'montserratBold',
        color: '#181818'
    },
    error: {
        marginTop: 5,
        fontSize: 10,
        color: '#FE6A6A',
        fontFamily: 'montserratBold',
    },
    input: {
        height: 40,
        paddingHorizontal: 3,
        width: 280,
        borderColor: '#fff',
        borderBottomColor: '#009688',
        borderWidth: 2,
        backgroundColor: '#fff',
        fontFamily: 'montserratBold',

    },
    label: {
        fontSize: 13,
        fontWeight: 'normal',
        marginTop: 15,
        color: '#181818',
        fontFamily: 'montserratBold',

    },
    button: {
        borderRadius: 5,
        marginBottom: 30,
        marginTop: 20,
        fontFamily: 'montserratBold',
    },
    question: {
        color: '#009688',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'montserratMed',
        lineHeight: 16,
    }
});
export default RegisterThirdStep;
