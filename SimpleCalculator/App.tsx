import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const addNumbers = () => {
    const total = Number(num1) + Number(num2);
    setResult(total.toString());
  };

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      <TextInput
        testID="input1"
        style={styles.input}
        placeholder="Enter First Number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        testID="input2"
        style={styles.input}
        placeholder="Enter Second Number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity
        testID="addButton"
        style={styles.button}
        onPress={addNumbers}
      >
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="clearButton"
        style={[styles.button, styles.clearButton]}
        onPress={clearFields}
      >
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text testID="resultText" style={styles.result}>
          Result: {result}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: "#E74C3C",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  result: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
