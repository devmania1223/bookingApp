import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from "react-native";

const Rating = ({rating, style}) => {
    const [mood, setMood] = useState("neutral");
    const [moodColor, setMoodColor] = useState("#A09D9D");
    useEffect(() => {
        setMood(rating);
        if(rating === "positive") setMoodColor("#1EE56E");
        else if(rating === "negative") setMoodColor("#F11A4E");
    });
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'flex-end'}}>
            <Text style={{fontFamily: 'montserratBold', color:'black', fontSize: 12}}>{mood.value}</Text>
            <View style={{flexDirection:'row'}}>
                <View style={[styles.stars, {backgroundColor: moodColor}]}/>
                <View style={[styles.stars, {backgroundColor: moodColor}]}/>
                <View style={[styles.stars, {backgroundColor: moodColor}]}/>
                <View style={[styles.stars, {backgroundColor: moodColor}]}/>
                <View style={[styles.stars, {backgroundColor: moodColor}]}/>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    stars :{
        width: 3,
        height: 10,
        marginLeft: 2,
    }
});
export default Rating;
