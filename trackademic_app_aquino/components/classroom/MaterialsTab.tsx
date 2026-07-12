import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const materials = [
  "Course Outline.pdf",
  "Module 1 - Introduction.pdf",
  "Module 2 - React Native.pdf",
  "Laboratory Exercise 1.pdf",
  "Laboratory Exercise 2.pdf",
  "Midterm Reviewer.pdf",
];

export default function MaterialsTab() {

  return (

    <View>

      {materials.map((item, index) => (

        <View
          key={index}
          style={styles.card}
        >

          <View style={styles.left}>

            <Ionicons
              name="document-text"
              size={34}
              color="#E53935"
            />

            <Text style={styles.file}>
              {item}
            </Text>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Download",
                `${item}\n\nDownloading...`
              )
            }
          >

            <Ionicons
              name="download-outline"
              size={20}
              color="white"
            />

          </TouchableOpacity>

        </View>

      ))}

    </View>

  );

}

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#fff",
    padding:16,
    borderRadius:15,
    marginBottom:15,
    elevation:2,

    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  left:{
    flexDirection:"row",
    alignItems:"center",
    flex:1
  },

  file:{
    marginLeft:12,
    fontSize:15,
    flex:1,
    color:"#333"
  },

  button:{
    backgroundColor:"#0D6EFD",
    width:42,
    height:42,
    borderRadius:21,
    justifyContent:"center",
    alignItems:"center"
  }

});