import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  const sections = [
    {
      title: "O que é Dermatite?",
      screen: "dermatite",
      icon: <MaterialIcons name="menu-book" size={28} color="#4A6FA5" />,
    },
    {
      title: "Tipos de Dermatite",
      screen: "tiposDermatite",
      icon: (
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={28}
          color="#4A6FA5"
        />
      ),
    },
    {
      title: "Sintomas Comuns",
      screen: "sintomas",
      icon: <MaterialIcons name="pets" size={28} color="#4A6FA5" />,
    },

    {
      title: "Cuidados em Casa",
      screen: "cuidados",
      icon: (
        <MaterialIcons name="health-and-safety" size={28} color="#4A6FA5" />
      ),
    },
    {
      title: "Mensuração de prurido",
      screen: "tabela",
      icon: <FontAwesome5 name="table" size={28} color="#4A6FA5" />,
    },
    {
      title: "Localizar Clínicas",
      screen: "clinicas",
      icon: <Feather name="map-pin" size={28} color="#4A6FA5" />,
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F4F8", dark: "#FFFFFF" }}
      headerImage={
        <Image
          source={require("@/assets/images/dogs.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          Dermatite em Cães
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText style={{ color: "#333333" }}>Guia Rápido</ThemedText>
      </ThemedView>

      <View style={styles.gridContainer}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(section.screen)}
            activeOpacity={0.7}
            style={styles.squareButton}
          >
            <ThemedView style={styles.squareButtonInner}>
              <View style={styles.iconContainer}>{section.icon}</View>
              <ThemedText type="subtitle" style={styles.squareButtonText}>
                {section.title}
              </ThemedText>
            </ThemedView>
          </TouchableOpacity>
        ))}
      </View>

      <ThemedView style={styles.footerContainer}>
        <ThemedText style={styles.footerText}>
          A saúde do seu cão começa pela pele!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#F9F7F1",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    marginBottom: 8,
  },
  subtitleContainer: {
    backgroundColor: "#F9F7F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  squareButton: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 16,
  },
  squareButtonInner: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  squareButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  footerContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#F0F4F8",
    borderRadius: 8,
    alignItems: "center",
  },
  footerText: {
    fontStyle: "italic",
    color: "#333",
  },
  reactLogo: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: "cover",
  },
});
