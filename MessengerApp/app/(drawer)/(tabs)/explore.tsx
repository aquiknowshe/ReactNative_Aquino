import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const doctors = [
  {
    id: "1",
    name: "Doc Calvin Placio",
    specialization: "Cardiologist",
    online: true,
  },
  {
    id: "2",
    name: "Doc Harrold Chaps",
    specialization: "Pediatrician",
    online: true,
  },
  {
    id: "3",
    name: "Doc Oliver",
    specialization: "General Physician",
    online: true,
  },
  {
    id: "4",
    name: "Dr. Maria Santos",
    specialization: "Dermatologist",
    online: true,
  },
  {
    id: "5",
    name: "Dr. Arnel Mendoza",
    specialization: "Neurologist",
    online: true,
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState("");

  const filtered = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#777" />

        <TextInput
          placeholder="Search people..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text style={styles.title}>
        ACTIVE NOW ({filtered.length})
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No results found.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Ionicons
                name="person"
                size={30}
                color="white"
              />

              {item.online && <View style={styles.online} />}
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.specialization}>
                {item.specialization}
              </Text>
            </View>

            <Ionicons
              name="chatbubble"
              size={24}
              color="#6200EE"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    margin: 12,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  title: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontWeight: "700",
    color: "#666",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#BDBDBD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  online: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#00C853",
    position: "absolute",
    bottom: 2,
    right: 2,
    borderWidth: 2,
    borderColor: "white",
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  specialization: {
    color: "#777",
    marginTop: 4,
  },

  empty: {
    marginTop: 60,
    textAlign: "center",
    color: "#999",
  },
});