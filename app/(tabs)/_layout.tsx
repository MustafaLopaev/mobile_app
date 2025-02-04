import type React from "react";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import LoginScreen from "@/screens/Login";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const colorScheme = useColorScheme();
  const headerShown = useClientOnlyValue(false, true); // Moved useClientOnlyValue call outside conditional

  // If the user is not logged in, show the Login screen.
  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  // If the user is logged in, render the Tabs.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown, // Use the value from the hook
      }}
    >
      <Tabs.Screen
        name="courses"
        options={{
          title: "My Courses",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="exams"
        options={{
          title: "My Exams",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="file-text" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
