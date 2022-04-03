import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";

const Body = ({body}) => {
    const [isFullTextHidden, setTextHidden] = useState(true);
    useEffect(() => {
        setTextHidden(true);
    }, [body]);
    if(body){
        return (
            <TouchableOpacity onPress={() => setTextHidden(!isFullTextHidden)} activeOpacity={0.8} style={styles.body}>
                <Text style={{fontFamily: 'montserratMed', fontSize: 13, lineHeight: 20}}>
                    {isFullTextHidden && body.length > 100 ? body.substring(0, 100) + "..." : body}
                </Text>
            </TouchableOpacity>
        );
    }
    else return <Text>Something went wrong while loading this comment</Text>
};
const styles = StyleSheet.create({
    body: {
        width: '100%'
    }
});

export default Body;
