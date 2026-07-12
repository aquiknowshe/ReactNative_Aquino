import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import api from "../api/axiosConfig";

import Header from "../components/Header";
import PerformanceCard from "../components/PerformanceCard";

export default function PerformanceScreen() {

  const [student, setStudent] = useState<any>(null);
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    loadPerformance();
  }, []);

  async function loadPerformance() {

    try {

      const data = await AsyncStorage.getItem("student");

      if (!data) return;

      const currentStudent = JSON.parse(data);

      setStudent(currentStudent);

      const response = await api.get(`/performance/${currentStudent.id}`);

      setRecords(response.data);

    } catch (error) {
      console.log(error);
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

      <ScrollView showsVerticalScrollIndicator={false}>

        <Header
          title="Performance"
          subtitle={
            student
              ? `${student.firstname} ${student.lastname}`
              : ""
          }
        />

        {records.map((item, index) => (

          <PerformanceCard

            key={index}

            course={item.course_title}

            title={item.title}

            category={item.category}

            date={item.activity_date}

            totalItems={item.total_items}

            score={item.score}

            average={item.average}

            remarks={item.remarks}

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

  back: {
    marginTop: 55,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -10,
  },

  backText: {
    marginLeft: 5,
    color: "#0D6EFD",
    fontWeight: "600",
    fontSize: 16,
  },

});