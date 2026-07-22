import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface StudentFormProps {
  name: string;
  setName: (text: string) => void;

  course: string;
  setCourse: (text: string) => void;

  yearLevel: string;
  setYearLevel: (text: string) => void;

  editing: boolean;

  onSubmit: () => void;

  onCancel: () => void;
}

export default function StudentForm({
  name,
  setName,
  course,
  setCourse,
  yearLevel,
  setYearLevel,
  editing,
  onSubmit,
  onCancel,
}: StudentFormProps) {
  return (
    <View style={styles.card}>
      <TextInput
        placeholder="Student Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Course (e.g., BSIT)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />

      <TextInput
        placeholder="Year Level (e.g., 3rd Year)"
        value={yearLevel}
        onChangeText={setYearLevel}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>
          {editing ? "UPDATE RECORD" : "ADD STUDENT"}
        </Text>
      </TouchableOpacity>

      {editing && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
        >
          <Text style={styles.buttonText}>
            CANCEL EDIT
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  primaryButton: {
    backgroundColor: "#0d6efd",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  cancelButton: {
    backgroundColor: "#495057",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});