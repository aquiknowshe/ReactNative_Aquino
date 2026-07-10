import { StyleSheet, Text, View } from "react-native";

interface Props {
  message: string;
  sender: "user" | "doctor";
}

export default function MessageBubble({ message, sender }: Props) {
  const isUser = sender === "user";

  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.doctorContainer,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isUser ? styles.userBubble : styles.doctorBubble,
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: isUser ? "#fff" : "#000" },
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
    paddingHorizontal: 12,
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

  text: {
    fontSize: 15,
  },
});