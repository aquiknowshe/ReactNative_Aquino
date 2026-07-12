import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  subtitle?: string;
  onNotificationPress?: () => void;
}

export default function Header({
  title,
  subtitle,
  onNotificationPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>

        {subtitle && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.notification}
        onPress={onNotificationPress}
      >
        <Ionicons
          name="notifications-outline"
          size={24}
          color="#0D6EFD"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    marginBottom: 25,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 14,
  },

  notification: {
    width: 45,
    height: 45,
    borderRadius: 22,

    backgroundColor: "#F2F5F9",

    justifyContent: "center",
    alignItems: "center",
  },
});