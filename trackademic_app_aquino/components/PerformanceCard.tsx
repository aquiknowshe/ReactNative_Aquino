import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  course: string;
  title: string;
  category: string;
  date: string;
  totalItems: number;
  score: number;
  average: number;
  remarks: string;
}

export default function PerformanceCard({
  course,
  title,
  category,
  date,
  totalItems,
  score,
  average,
  remarks,
}: Props) {

  const remarkColor =
    remarks === "Excellent"
      ? "#16A34A"
      : remarks === "Very Good"
      ? "#22C55E"
      : remarks === "Passed"
      ? "#3B82F6"
      : "#EF4444";

  return (
    <View style={styles.card}>

      <Text style={styles.course}>
        {course}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>Category</Text>
        <Text>{category}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Date</Text>
        <Text>
  {date.split("T")[0]}
</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Score</Text>
        <Text>{score} / {totalItems}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Average</Text>
        <Text>{average}%</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Remarks</Text>

        <Text
          style={{
            color: remarkColor,
            fontWeight: "700",
          }}
        >
          {remarks}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },

  course: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0D6EFD",
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  label: {
    color: "#666",
  },

});