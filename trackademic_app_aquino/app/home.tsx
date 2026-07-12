import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import api from "../api/axiosConfig";

import Header from "../components/Header";
import MenuButton from "../components/MenuButton";
import AnnouncementCard from "../components/AnnouncementCard";

export default function HomeScreen() {
  const [student, setStudent] = useState<any>(null);
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    loadStudent();
    loadAnnouncements();
  }, []);

  async function loadStudent() {
    const data = await AsyncStorage.getItem("student");

    if (data) {
      setStudent(JSON.parse(data));
    }
  }

  async function loadAnnouncements() {
    try {
      const res = await api.get("/home");
      setAnnouncements(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Header
          title="Trackademic"
          subtitle={
            student
              ? `Welcome, ${student.firstname}!`
              : "Student Academic Tracking System"
          }
          onNotificationPress={() =>
            router.push("/notifications")
          }
        />

        <Text style={styles.sectionTitle}>
          Quick Menu
        </Text>

        <MenuButton
          title="My Classes"
          icon="school-outline"
          onPress={() => router.push("/classes")}
        />

        <MenuButton
          title="Performance"
          icon="bar-chart-outline"
          onPress={() => router.push("/performance")}
        />

        <MenuButton
          title="Profile"
          icon="person-outline"
          onPress={() => router.push("/profile")}
        />

        <Text style={styles.sectionTitle}>
          Announcement Section
        </Text>

        {announcements.map((item) => (
          <AnnouncementCard
            key={item.id}
            title={item.title}
            message={item.message}
            postedBy={item.posted_by}
          />
        ))}

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

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 10,
    color: "#1F2937",
  },

});