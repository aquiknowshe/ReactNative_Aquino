import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import api from "../api/axiosConfig";

import Header from "../components/Header";
import ClassCard from "../components/ClassCard";

export default function ClassesScreen() {
  const [classes, setClasses] = useState<any[]>([]);
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    loadClasses();
  }, []);

  async function loadClasses() {
    try {
      const data = await AsyncStorage.getItem("student");

      if (!data) return;

      const student = JSON.parse(data);

      setStudent(student);

      const response = await api.get(`/classes/${student.id}`);

      setClasses(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
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

      <ScrollView showsVerticalScrollIndicator={false}>

        <Header
          title="My Classes"
          subtitle={
            student
              ? `${student.firstname} ${student.lastname}`
              : ""
          }
        />

{classes.length === 0 ? (

    <Text style={styles.empty}>
        No enrolled classes found.
    </Text>

) : (

    <>
        {classes.map((item) => (

<ClassCard
    key={item.id}
    course={item.course_title}
    instructor={item.instructor}
    status={item.status}
    day1={item.day1}
    time1={item.time1}
    day2={item.day2}
    time2={item.time2}
    onPress={() => router.push("/class-details")}
/>

        ))}

        <TouchableOpacity
            style={styles.joinCard}
            activeOpacity={0.8}
        >

            <Ionicons
                name="add-circle"
                size={42}
                color="#0D6EFD"
            />

            <Text style={styles.joinTitle}>
                Join a Class
            </Text>

            <Text style={styles.joinSubtitle}>
                Enter a class code provided by your instructor.
            </Text>

        </TouchableOpacity>

    </>

)}

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  joinCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#0D6EFD",
},

joinTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#0D6EFD",
},

joinSubtitle: {
    marginTop: 6,
    textAlign: "center",
    color: "#666",
    fontSize: 14,
},

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
  },

  backButton: {
    marginTop: 55,

    flexDirection: "row",

    alignItems: "center",

    marginBottom: -10,
  },

  backText: {
    marginLeft: 5,

    color: "#0D6EFD",

    fontSize: 16,

    fontWeight: "600",
  },

  empty: {
    marginTop: 50,

    textAlign: "center",

    color: "gray",
  },

});