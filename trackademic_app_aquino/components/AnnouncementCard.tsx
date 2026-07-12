import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  message: string;
  postedBy: string;
}

export default function AnnouncementCard({
  title,
  message,
  postedBy,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>

      <Text style={styles.footer}>
        Posted by {postedBy}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",

    borderRadius: 15,

    padding: 18,

    marginBottom: 15,

    elevation: 2,
  },

  title: {
    fontWeight: "700",

    fontSize: 17,

    marginBottom: 8,

    color: "#0D6EFD",
  },

  message: {
    color: "#555",

    lineHeight: 22,
  },

  footer: {
    marginTop: 15,

    fontSize: 12,

    color: "#888",
  },
});