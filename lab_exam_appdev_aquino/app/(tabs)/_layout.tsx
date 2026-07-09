import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#64748B",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lab Exam 1",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="clipboard"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Lab Exam 2",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="clipboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}