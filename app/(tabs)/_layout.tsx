import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4A6FA5",
        tabBarInactiveTintColor: "#888888",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F9F7F1",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          height: Platform.select({
            ios: 60,
            android: 60,
          }),
          ...Platform.select({
            ios: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            },
            android: {
              elevation: 8,
            },
          }),
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 0,
        },
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
        name="cuidados"
        options={{
          title: "Cuidados em casa",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hand-holding-medical" size={20} color={color} />
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
      <Tabs.Screen
        name="equipe"
        options={{
          title: "Equipe",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
