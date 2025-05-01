import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dermatite"
        options={{
          title: "O que é dermatite?",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="menu-book" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sintomas"
        options={{
          title: "Sintomas",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="pets" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tiposDermatite"
        options={{
          title: "Tipos de Dermatite",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="list.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clinicas"
        options={{
          title: "Clínicas",
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
