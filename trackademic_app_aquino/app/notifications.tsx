import React,{useEffect,useState} from "react";

import{
SafeAreaView,
ScrollView,
StyleSheet,
TouchableOpacity,
Text
}from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {router} from "expo-router";

import {Ionicons} from "@expo/vector-icons";

import api from "../api/axiosConfig";

import Header from "../components/Header";

import NotificationCard from "../components/NotificationCard";

export default function NotificationsScreen(){

const[list,setList]=useState<any[]>([]);

const[student,setStudent]=useState<any>(null);

useEffect(()=>{

loadNotifications();

},[]);

async function loadNotifications(){

const data=await AsyncStorage.getItem("student");

if(!data)return;

const currentStudent=JSON.parse(data);

setStudent(currentStudent);

const response=await api.get(`/notifications/${currentStudent.id}`);

setList(response.data);

}

return(

<SafeAreaView style={styles.container}>

<TouchableOpacity
style={styles.back}
onPress={()=>router.back()}
>

<Ionicons
name="arrow-back"
size={22}
color="#0D6EFD"
/>

<Text style={styles.backText}>
Back
</Text>

</TouchableOpacity>

<ScrollView>

<Header
title="Notifications"
subtitle={student?.firstname}
/>

{

list.map((item)=>(

<NotificationCard

key={item.id}

title={item.title}

message={item.message}

date={item.notification_date}

read={item.is_read}

/>

))

}

</ScrollView>

</SafeAreaView>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F7FA",
paddingHorizontal:20
},

back:{
marginTop:55,
flexDirection:"row",
alignItems:"center",
marginBottom:-10
},

backText:{
marginLeft:5,
fontWeight:"600",
color:"#0D6EFD"
}

});