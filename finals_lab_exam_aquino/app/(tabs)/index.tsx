import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";

import StudentForm from "../../components/StudentForm";
import StudentTable from "../../components/StudentTable";
import { Student } from "../../types/Student";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../../services/studentService";

export default function HomeScreen() {
  const [students, setStudents] = useState<Student[]>([]);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [yearLevel, setYearLevel] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      Alert.alert("Error", "Unable to load student records.");
    }
  };

  const clearForm = () => {
    setName("");
    setCourse("");
    setYearLevel("");
    setEditingId(null);
  };

  const validate = () => {
    if (
      name.trim() === "" ||
      course.trim() === "" ||
      yearLevel.trim() === ""
    ) {
      Alert.alert(
        "Validation",
        "Please fill in all fields."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      if (editingId === null) {
        await addStudent(
          name,
          course,
          yearLevel
        );

        Alert.alert(
          "Success",
          "Student added successfully."
        );
      } else {
        await updateStudent(
          editingId,
          name,
          course,
          yearLevel
        );

        Alert.alert(
          "Success",
          "Student updated successfully."
        );
      }

      clearForm();
      loadStudents();

    } catch (error) {

      Alert.alert(
        "Error",
        "Operation failed."
      );

    }
  };

  const handleEdit = (student: Student) => {
    setEditingId(student.id);

    setName(student.name);
    setCourse(student.course);
    setYearLevel(student.year_level);
  };

  const handleDelete = (student: Student) => {
    Alert.alert(
      "Delete Student",
      `Delete ${student.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteStudent(student.id);

              Alert.alert(
                "Deleted",
                "Student deleted successfully."
              );

              loadStudents();

            } catch (error) {

              Alert.alert(
                "Error",
                "Unable to delete record."
              );

            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>
        Student Management System
      </Text>

      <StudentForm
        name={name}
        setName={setName}
        course={course}
        setCourse={setCourse}
        yearLevel={yearLevel}
        setYearLevel={setYearLevel}
        editing={editingId !== null}
        onSubmit={handleSubmit}
        onCancel={clearForm}
      />

      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 25,
    color: "#0d6efd",
  },

});