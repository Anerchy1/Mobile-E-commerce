import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const color = "#40c060";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="products"
        options={{
          title: "Бараа",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="shirt-outline"
              size={24}
              color={focused ? color : "#363636"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="game"
        options={{
          title: "Тоглоом",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="game-controller-outline"
              size={24}
              color={focused ? color : "#363636"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
