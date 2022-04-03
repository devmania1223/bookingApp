import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import NavigatorComponent from "../NavigatorComponent";
import {loadFonts} from "../redux/font/actions";
import Loading from "../components/Common/Loading";
import {AppLoading} from "expo";

const Navigator = () => {

    const [font, setFont] = useState(false);
    useEffect(() => {
        async function loadFontsAsync(){
            await Font.loadAsync({
                //...Ionicons.font,
                'montserratMed': require('../../assets/fonts/Montserrat-Medium.ttf'),
                'montserratBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
            });
            setFont(true);
        }
        loadFontsAsync();

    },[font]);
    return font ? <NavigatorComponent isBitch={true}/> : <Loading/>;

};



export default Navigator;
