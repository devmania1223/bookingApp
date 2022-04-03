import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {Button} from "react-native-paper";

const ForgotPassword = ({navigation, submit}) => {
    return (
        <KeyboardAvoidingView style={styles.containerWrapper}>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../../assets/Logo.png')}/>
                    <Text style={styles.logo_text}>BOOKING</Text>
                    <View style={styles.back}>
                        <TouchableOpacity style={styles.arrow} onPress={()=>navigation.goBack()}>
                            <Image style={styles.arrowPic}
                                   source={require('../../../assets/back.png')}

                            />
                        </TouchableOpacity>
                        <Text onPress={()=>navigation.navigate('Register')} style={styles.title}>Recover Password</Text>
                    </View>
                    <Formik
                        initialValues={{email: ''}}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('Invalid Email')
                                .required('Required email')
                        })}
                        onSubmit={(values, actions) => {
                            submit(values);
                        }}>
                        {props => (
                            <View>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                    value={props.values.email}
                                    placeholder="Email Address"
                                    style={styles.input}
                                />
                                {props.touched.email && props.errors.email ? (
                                    <Text style={styles.error}>{props.errors.email}</Text>
                                ) : null}
                                <Button
                                    onPress={props.handleSubmit}
                                    color="#009688"
                                    mode="contained"
                                    loading={props.isSubmitting}
                                    disabled={props.isSubmitting}
                                    style={styles.button}>
                                    <Text style={{lineHeight: 30}}>Recover password</Text>
                                </Button>
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
    back:{
        flex:1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow:{
        height: 20,
        width: 20,
        position: 'absolute',
        left:70,
    },
    arrowPic:{
        height: 20,
        width: 20,
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
export default ForgotPassword;
