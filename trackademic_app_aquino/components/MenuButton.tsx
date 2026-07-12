import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function MenuButton({
  title,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={30}
          color="#0D6EFD"
        />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <Ionicons
        name="chevron-forward"
        size={22}
        color="#B0B0B0"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",

    borderRadius: 15,

    padding: 18,

    marginBottom: 14,

    flexDirection: "row",

    alignItems: "center",

    elevation: 2,
  },

  iconContainer: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "#EAF2FF",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 15,
  },

  title: {
    flex: 1,

    fontSize: 16,

    fontWeight: "600",

    color: "#1F2937",
  },
});