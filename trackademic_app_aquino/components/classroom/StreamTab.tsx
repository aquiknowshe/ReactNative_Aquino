import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function StreamTab() {

  return (

    <View>

      <View style={styles.card}>

        <View style={styles.row}>

          <Ionicons
            name="key-outline"
            size={24}
            color="#0D6EFD"
          />

          <View style={styles.info}>

            <Text style={styles.label}>
              Class Code
            </Text>

            <Text style={styles.value}>
              APPDEV2026
            </Text>

          </View>

        </View>

      </View>

      <View style={styles.card}>

        <View style={styles.row}>

          <Ionicons
            name="videocam-outline"
            size={24}
            color="#0D6EFD"
          />

          <View style={styles.info}>

            <Text style={styles.label}>
              Google Meet
            </Text>

            <Text style={styles.link}>
              meet.google.com/app-dev
            </Text>

          </View>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert(
              "Google Meet",
              "Opening meeting..."
            )
          }
        >

          <Text style={styles.buttonText}>
            JOIN MEETING
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 18,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  label: {
    color: "#777",
    fontSize: 13,
  },

  value: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0D6EFD",
    marginTop: 5,
  },

  link: {
    marginTop: 5,
    color: "#0D6EFD",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#0D6EFD",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

});