import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const classmates = [
  {
    id: "1",
    name: "Adele",
    studentNo: "23-00001",
  },
  {
    id: "2",
    name: "Eminem",
    studentNo: "23-00002",
  },
  {
    id: "3",
    name: "Anne-Marie",
    studentNo: "23-00003",
  },
  {
    id: "4",
    name: "Ava Max",
    studentNo: "23-00004",
  },
  {
    id: "5",
    name: "Charlie Puth",
    studentNo: "23-00005",
  },
  {
    id: "6",
    name: "Ed Sheeran",
    studentNo: "23-00006",
  },
  {
    id: "7",
    name: "Dua Lipa",
    studentNo: "23-00007",
  },
  {
    id: "8",
    name: "Bruno Mars",
    studentNo: "23-00008",
  },
  {
    id: "9",
    name: "Olivia Rodrigo",
    studentNo: "23-00009",
  },
  {
    id: "10",
    name: "Billie Eilish",
    studentNo: "23-00010",
  },
  {
    id: "11",
    name: "The Weeknd",
    studentNo: "23-00011",
  },
  {
    id: "12",
    name: "Imagine Dragons",
    studentNo: "23-00012",
  },
  {
    id: "13",
    name: "OneRepublic",
    studentNo: "23-00013",
  },
  {
    id: "14",
    name: "Twenty One Pilots",
    studentNo: "23-00014",
  },
  {
    id: "15",
    name: "Taylor Swift",
    studentNo: "23-00015",
  },
];

export default function ClassmatesTab() {

  function getInitials(name: string) {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  return (
    <FlatList
      scrollEnabled={false}
      data={classmates}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (

        <View style={styles.card}>

          <View style={styles.avatar}>
            <Text style={styles.initials}>
              {getInitials(item.name)}
            </Text>
          </View>

          <View style={{ flex: 1 }}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.number}>
              {item.studentNo}
            </Text>

          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Enrolled
            </Text>
          </View>

        </View>

      )}
    />
  );

}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0D6EFD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  initials: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  number: {
    color: "#777",
    marginTop: 3,
  },

  badge: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: "#059669",
    fontWeight: "600",
    fontSize: 12,
  },

});