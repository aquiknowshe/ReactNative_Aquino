import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
  headerShown: true,

  headerStyle: {
    backgroundColor: "#6200EE",
    height: 95,
  },

  headerStatusBarHeight: 25,

  headerTitleStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  headerTintColor: "#fff",

  headerTitleAlign: "center",

  tabBarActiveTintColor: "#6200EE",

  tabBarInactiveTintColor: "#888",

  tabBarStyle: {
    height: 60,
    paddingBottom: 6,
    paddingTop: 6,
  },
}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "People",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}