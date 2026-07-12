import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const attendance = [
  { date: "Jul 01", time: "7:28 AM", status: "Present", points: 0 },
  { date: "Jul 03", time: "7:41 AM", status: "Late", points: -3 },
  { date: "Jul 08", time: "--:--", status: "Absent", points: -5 },
  { date: "Jul 10", time: "7:26 AM", status: "Present", points: 0 },
  { date: "Jul 15", time: "7:30 AM", status: "Present", points: 0 },
  { date: "Jul 17", time: "7:44 AM", status: "Late", points: -3 },
  { date: "Jul 22", time: "7:29 AM", status: "Present", points: 0 },
];

const totalPoints = attendance.reduce(
  (sum, item) => sum + item.points,
  100
);

const present = attendance.filter(a => a.status === "Present").length;
const late = attendance.filter(a => a.status === "Late").length;
const absent = attendance.filter(a => a.status === "Absent").length;

export default function AttendanceTab() {

  return (
    <View>

      <View style={styles.summaryCard}>

        <Text style={styles.summaryTitle}>
          Attendance Score
        </Text>

        <Text style={styles.score}>
          {totalPoints} / 100
        </Text>

        <View style={styles.summaryRow}>
          <Text>Present</Text>
          <Text>{present}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text>Late</Text>
          <Text>{late}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text>Absent</Text>
          <Text>{absent}</Text>
        </View>

      </View>

      <View style={styles.table}>

        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, { flex: 1.2 }]}>Date</Text>
          <Text style={[styles.headerCell, { flex: 1.3 }]}>Time</Text>
          <Text style={[styles.headerCell, { flex: 1.3 }]}>Status</Text>
          <Text style={[styles.headerCell, { flex: 0.8 }]}>Pts</Text>
        </View>

        {attendance.map((item, index) => (

          <View
            key={index}
            style={styles.row}
          >

            <Text style={[styles.cell, { flex: 1.2 }]}>
              {item.date}
            </Text>

            <Text style={[styles.cell, { flex: 1.3 }]}>
              {item.time}
            </Text>

            <Text
              style={[
                styles.cell,
                {
                  flex: 1.3,
                  color:
                    item.status === "Present"
                      ? "#16A34A"
                      : item.status === "Late"
                      ? "#F59E0B"
                      : "#DC2626",
                  fontWeight: "700",
                },
              ]}
            >
              {item.status}
            </Text>

            <Text style={[styles.cell, { flex: 0.8 }]}>
              {item.points}
            </Text>

          </View>

        ))}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,
    elevation: 2,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0D6EFD",
  },

  score: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 15,
    color: "#16A34A",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  table: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 2,
    marginBottom: 30,
  },

  headerRow: {
    flexDirection: "row",
    backgroundColor: "#0D6EFD",
    paddingVertical: 12,
  },

  headerCell: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 13,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 12,
  },

  cell: {
    textAlign: "center",
    fontSize: 13,
    color: "#333",
  },

});