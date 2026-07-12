import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props{
    label:string;
    value:string;
}

export default function ProfileCard({label,value}:Props){

    return(

        <View style={styles.card}>

            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={styles.value}>
                {value}
            </Text>

        </View>

    );

}

const styles=StyleSheet.create({

    card:{
        backgroundColor:"#fff",
        padding:16,
        borderRadius:15,
        marginBottom:14,
        elevation:2
    },

    label:{
        color:"#777",
        marginBottom:5,
        fontSize:13
    },

    value:{
        fontSize:16,
        fontWeight:"700",
        color:"#1F2937"
    }

});