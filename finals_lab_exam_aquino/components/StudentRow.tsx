import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Student } from "../types/Student";

interface StudentRowProps {
  student: Student;
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

export default function StudentRow({
  student,
  onEdit,
  onDelete,
}: StudentRowProps) {
  return (
    <View style={styles.row}>

      <Text style={styles.name}>
        {student.name}
      </Text>

      <Text style={styles.course}>
        {student.course}
      </Text>

      <Text style={styles.year}>
        {student.year_level}
      </Text>

      <View style={styles.actions}>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(student)}
        >
          <Text style={styles.buttonText}>
            Edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(student)}
        >
          <Text style={styles.buttonText}>
            Delete
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },

  name: {
    flex: 2,
    fontSize: 12,
  },

  course: {
    flex: 1.5,
    textAlign: "center",
    fontSize: 12,
  },

  year: {
    flex: 1.2,
    textAlign: "center",
    fontSize: 12,
  },

  actions: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  editButton: {
    backgroundColor: "#FFC107",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },

  deleteButton: {
    backgroundColor: "#DC3545",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },

});