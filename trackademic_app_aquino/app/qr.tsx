import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

export default function QRScreen() {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    loadStudent();
  }, []);

  async function loadStudent() {
    const data = await AsyncStorage.getItem("student");

    if (data) {
      setStudent(JSON.parse(data));
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity
        style={styles.back}
        onPress={() => router.back()}
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

      <View style={styles.card}>

        <Text style={styles.title}>
          Student QR Code
        </Text>

        {student && (
          <>
            <QRCode
              value={student.student_number}
              size={220}
            />

            <Text style={styles.name}>
              {student.firstname} {student.lastname}
            </Text>

            <Text style={styles.info}>
              {student.student_number}
            </Text>

            <Text style={styles.info}>
              {student.course}
            </Text>

            <Text style={styles.info}>
              {student.section}
            </Text>
          </>
        )}

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
  },

  back: {
    marginTop: 55,
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    marginLeft: 5,
    color: "#0D6EFD",
    fontWeight: "600",
    fontSize: 16,
  },

  card: {
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 3,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 25,
    color: "#0D6EFD",
  },

  name: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },

  info: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
  },

});