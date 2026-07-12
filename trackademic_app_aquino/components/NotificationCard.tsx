import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props{
    title:string;
    message:string;
    date:string;
    read:number;
}

export default function NotificationCard({
title,
message,
date,
read
}:Props){

return(

<View style={[
styles.card,
!read && styles.unread
]}>

<Text style={styles.title}>
{title}
</Text>

<Text style={styles.message}>
{message}
</Text>

<Text style={styles.date}>
{new Date(date).toLocaleString()}
</Text>

</View>

);

}

const styles=StyleSheet.create({

card:{
backgroundColor:"white",
padding:18,
borderRadius:15,
marginBottom:15,
elevation:2
},

unread:{
borderLeftWidth:5,
borderLeftColor:"#0D6EFD"
},

title:{
fontWeight:"700",
fontSize:16,
marginBottom:8,
color:"#0D6EFD"
},

message:{
color:"#555",
lineHeight:21
},

date:{
marginTop:12,
fontSize:12,
color:"#999"
}

});