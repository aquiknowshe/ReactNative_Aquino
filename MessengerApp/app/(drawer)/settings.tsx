import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={50}
            color="white"
          />
        </View>

        <Text style={styles.name}>
          Shekainah Sandy Aquino
        </Text>

        <Text style={styles.edit}>
          Edit Profile
        </Text>
      </View>

      <Text style={styles.section}>PROFILE</Text>

      <View style={styles.row}>
        <Ionicons name="radio-button-on" size={20} color="#2196F3" />
        <Text style={styles.label}>Active Status</Text>
        <Switch value />
      </View>

      <View style={styles.row}>
        <Ionicons name="person-circle" size={20} color="#2196F3" />
        <Text style={styles.label}>Username</Text>
        <Text>m.me/johndoe</Text>
      </View>

      <Text style={styles.section}>PREFERENCES</Text>

      <View style={styles.row}>
        <Ionicons name="notifications" size={20} color="#F44336" />
        <Text style={styles.label}>Notifications & Sounds</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="moon" size={20} color="#555" />
        <Text style={styles.label}>Dark Mode</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="leaf" size={20} color="#4CAF50" />
        <Text style={styles.label}>Data Saver</Text>
      </View>

      <Text style={styles.section}>ACCOUNT & LEGAL</Text>

      <View style={styles.row}>
        <Ionicons name="settings" size={20} color="#666" />
        <Text style={styles.label}>Account Settings</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="warning" size={20} color="#FF9800" />
        <Text style={styles.label}>Report Technical Problem</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  profile: {
    alignItems: "center",
    paddingVertical: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#9E9E9E",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "700",
  },

  edit: {
    color: "#6200EE",
    marginTop: 5,
  },

  section: {
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 8,
    color: "#777",
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  label: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
});