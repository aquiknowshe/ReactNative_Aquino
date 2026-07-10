import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { router } from "expo-router";

const chats = [
  {
    id: "1",
    name: "Doc Calvin Placio",
    message: "Ayan, mas mabuti para mabilis natin ma-finalize...",
  },
  {
    id: "2",
    name: "Doc Harrold Chaps",
    message: "Sige, i-send mo na lang sa email ko yung draft.",
  },
  {
    id: "3",
    name: "Doc Oliver",
    message: "Naka-leave ako bukas, sa Huwebes na natin ituloy.",
  },
];

export default function ChatsScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const filtered = chats.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Stack Navigation</Text>

        <View style={{ width: 28 }} />
      </View>

      {/* Search */}

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#777" />

        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      <Text style={styles.messageTitle}>Message List</Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No results found for "{search}"
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() =>
              router.push({
                pathname: "/chat/[id]",
                params: { id: item.name },
              })
            }
          >
            <View style={styles.avatar} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>

              <Text
                style={styles.message}
                numberOfLines={1}
              >
                {item.message}
              </Text>
            </View>
          </TouchableOpacity>
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

  header: {
    height: 60,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    height: 45,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  messageTitle: {
    marginHorizontal: 14,
    marginBottom: 10,
    fontWeight: "600",
    color: "#444",
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    marginRight: 12,
  },

  name: {
    fontWeight: "700",
    fontSize: 16,
  },

  message: {
    color: "#777",
    marginTop: 4,
  },

  empty: {
    textAlign: "center",
    marginTop: 60,
    color: "#999",
    fontSize: 16,
  },
});