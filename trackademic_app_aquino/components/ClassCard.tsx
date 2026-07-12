import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Props {
  course: string;
  instructor: string;
  status: string;
  day1: string;
  time1: string;
  day2: string;
  time2: string;
  onPress?: () => void;
}

export default function ClassCard({
  course,
  instructor,
  status,
  day1,
  time1,
  day2,
  time2,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.course}>{course}</Text>

          <View
            style={[
              styles.badge,
              {
                backgroundColor:
                  status === "Active"
                    ? "#D1FAE5"
                    : "#F3F4F6",
              },
            ]}
          >
            <Text
              style={{
                color:
                  status === "Active"
                    ? "#059669"
                    : "#6B7280",
                fontWeight: "600",
              }}
            >
              {status}
            </Text>
          </View>
        </View>

        <Text style={styles.instructor}>
          {instructor}
        </Text>

        <Text style={styles.schedule}>
          {day1} • {time1}
        </Text>

        <Text style={styles.schedule}>
          {day2} • {time2}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 18,
    marginBottom: 16,
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  course: {
    flex: 1,
    fontWeight: "700",
    fontSize: 17,
    color: "#0D6EFD",
    marginRight: 10,
  },

  instructor: {
    marginTop: 8,
    color: "#444",
  },

  schedule: {
    marginTop: 5,
    color: "#777",
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});