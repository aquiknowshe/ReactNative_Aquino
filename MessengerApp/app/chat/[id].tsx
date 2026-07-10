import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "doctor",
      text: "Hello! Kumusta ang pakiramdam mo ngayon?",
    },
    {
      id: "2",
      sender: "user",
      text: "Mas okay na po ako, Doc.",
    },
    {
      id: "3",
      sender: "doctor",
      text: "Good. Ipagpatuloy mo lang ang gamot.",
    },
  ]);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        sender: "user",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>

        <Ionicons
          name="person-circle"
          size={40}
          color="white"
          style={{ marginHorizontal: 10 }}
        />

        <View>
          <Text style={styles.name}>{id}</Text>
          <Text style={styles.status}>Active now</Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "user"
                ? styles.userContainer
                : styles.doctorContainer,
            ]}
          >
            <View
              style={[
                styles.bubble,
                item.sender === "user"
                  ? styles.userBubble
                  : styles.doctorBubble,
              ]}
            >
              <Text
                style={{
                  color: item.sender === "user" ? "white" : "black",
                }}
              >
                {item.text}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />

        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={28} color="#6200EE" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 70,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  status: {
    color: "#ddd",
    fontSize: 12,
  },

  messageContainer: {
    marginVertical: 6,
  },

  userContainer: {
    alignItems: "flex-end",
  },

  doctorContainer: {
    alignItems: "flex-start",
  },

  bubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 18,
  },

  userBubble: {
    backgroundColor: "#2196F3",
    borderBottomRightRadius: 4,
  },

  doctorBubble: {
    backgroundColor: "#ECECEC",
    borderBottomLeftRadius: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
    marginRight: 10,
  },
});