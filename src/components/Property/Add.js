import React, {useState} from 'react';
import {Button, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput} from "react-native";
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

const Add = props => {
    const [name, setName] = useState('');
    const [description , setDescription] = useState('');
    const [cover, setCover] = useState(null);
    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };
    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });
        if (!result.cancelled) {
            setCover(result.uri);
        }
    };
    const submit = async () => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('cover_image', cover);
      axios({
            method: 'post',
            url: 'https://api.booking.knine.xyz/properties',
            data: formData,
        }).then(res => console.log(res)).catch(e => console.log(e));
    };
    return (
        <>
            <Text>name</Text>
            <TextInput style={styles.item} onChangeText={text => setName(text)}
                       value={name}/>
            <Text>description</Text>
            <TextInput style={styles.item} onChangeText={text => setDescription(text)}
                       value={description}/>
            <Text>Cover image</Text>
            <Button title={'pick and image'} onPress={_pickImage} />
            <Button title={'submit'} onPress={submit}/>

        </>
    );
};
const styles = StyleSheet.create({
    list: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#E5E5E5",

    },
    item: {
        flex: 1,
        height: 40,
        marginHorizontal: 33,
        marginVertical: 18,
        shadowColor: 'rgba(0, 0, 0, 0.14)',
        elevation: Platform.OS === 'ios' ? 0 : 3,
        borderRadius: 5
    }
});
export default Add;
