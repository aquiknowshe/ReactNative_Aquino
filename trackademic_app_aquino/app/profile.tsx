import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import api from "../api/axiosConfig";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

export default function ProfileScreen() {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const data = await AsyncStorage.getItem("student");

    if (!data) return;

    const currentStudent = JSON.parse(data);

    const response = await api.get(`/profile/${currentStudent.id}`);

    setStudent(response.data);
  }

  async function handleLogout() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("student");
            router.replace("/");
          },
        },
      ]
    );
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

        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Student Profile"
          subtitle="Personal Information"
        />

        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={70}
            color="white"
          />
        </View>

        <ProfileCard
          label="Student Number"
          value={student?.student_number || ""}
        />

        <ProfileCard
          label="Student Name"
          value={`${student?.firstname ?? ""} ${student?.lastname ?? ""}`}
        />

        <ProfileCard
          label="Course"
          value={student?.course || ""}
        />

        <ProfileCard
          label="Section"
          value={student?.section || ""}
        />

        <ProfileCard
          label="School Year"
          value={student?.school_year || ""}
        />

        <ProfileCard
          label="Semester"
          value={student?.semester || ""}
        />

        <TouchableOpacity
          style={styles.qrButton}
          onPress={() => router.push("/qr")}
        >
          <Text style={styles.qrText}>
            View QR Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={22}
            color="white"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

      </ScrollView>
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
    marginBottom: -10,
  },

  backText: {
    marginLeft: 5,
    fontWeight: "600",
    color: "#0D6EFD",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#0D6EFD",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 25,
  },

  qrButton: {
    backgroundColor: "#0D6EFD",
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 15,
  },

  qrText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

  logoutButton: {
    backgroundColor: "#DC2626",
    padding: 18,
    borderRadius: 15,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8,
  },

});