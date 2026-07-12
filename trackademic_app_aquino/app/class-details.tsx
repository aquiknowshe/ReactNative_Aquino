import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import StreamTab from "../components/classroom/StreamTab";
import MaterialsTab from "../components/classroom/MaterialsTab";
import ClassmatesTab from "../components/classroom/ClassmatesTab";
import AttendanceTab from "../components/classroom/AttendanceTab";

export default function ClassDetails() {

  const [selectedTab, setSelectedTab] = useState("stream");

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

        <Text style={styles.title}>
          Application Development
        </Text>

        <Text style={styles.instructor}>
          Instructor: Jason C. Magsino
        </Text>

        <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.tabs}
>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "stream" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("stream")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "stream" && styles.activeText,
              ]}
            >
              Stream
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "materials" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("materials")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "materials" && styles.activeText,
              ]}
            >
              Materials
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "classmates" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("classmates")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "classmates" && styles.activeText,
              ]}
            >
              Classmates
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "attendance" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("attendance")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "attendance" && styles.activeText,
              ]}
            >
              Attendance
            </Text>
          </TouchableOpacity>

        </ScrollView>

        {selectedTab === "stream" && <StreamTab />}
        {selectedTab === "materials" && <MaterialsTab />}
        {selectedTab === "classmates" && <ClassmatesTab />}
        {selectedTab === "attendance" && <AttendanceTab />}

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

  backButton: {
    marginTop: 55,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  backText: {
    marginLeft: 5,
    color: "#0D6EFD",
    fontWeight: "600",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D6EFD",
  },

  instructor: {
    color: "#666",
    marginBottom: 20,
    marginTop: 5,
  },

tabs: {
    flexDirection: "row",
    paddingBottom: 15,
},

tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#E5E7EB",
    marginRight: 10,
},

  activeTab: {
    backgroundColor: "#0D6EFD",
  },

  tabText: {
    color: "#444",
    fontWeight: "600",
  },

  activeText: {
    color: "#FFFFFF",
  },

});