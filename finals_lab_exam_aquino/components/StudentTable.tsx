import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import StudentRow from "./StudentRow";
import { Student } from "../types/Student";

interface StudentTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

export default function StudentTable({
  students,
  onEdit,
  onDelete,
}: StudentTableProps) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={[styles.headerText, { flex: 2 }]}>
          Name
        </Text>

        <Text style={[styles.headerText, { flex: 1.5 }]}>
          Course
        </Text>

        <Text style={[styles.headerText, { flex: 1.2 }]}>
          Year
        </Text>

        <Text style={[styles.headerText, { flex: 2 }]}>
          Actions
        </Text>

      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StudentRow
            student={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No student records found.
            </Text>
          </View>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    backgroundColor: "#212529",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },

  headerText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },

  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },

  emptyText: {
    color: "#777",
    fontStyle: "italic",
  },

});