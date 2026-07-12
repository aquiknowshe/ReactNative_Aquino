import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/axiosConfig";

export default function LoginScreen() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!studentNumber || !password) {
      Alert.alert("Error", "Please enter your student number and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        student_number: studentNumber,
        password: password,
      });

      if (response.data.success) {
        await AsyncStorage.setItem(
          "student",
          JSON.stringify(response.data.student)
        );

        router.replace("/home");
      } else {
        Alert.alert("Login Failed", response.data.message);
      }
    } catch (error: any) {
      console.log(error);

      Alert.alert(
        "Connection Error",
        "Unable to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Trackademic</Text>

      <Text style={styles.subtitle}>
        Student Academic Tracking System
      </Text>

      <TextInput
        placeholder="Student Number"
        value={studentNumber}
        onChangeText={setStudentNumber}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Logging in..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#f5f7fb",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E3A8A",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 35,
    color: "#666",
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  button: {
    backgroundColor: "#0B5ED7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});