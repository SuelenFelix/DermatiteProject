import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SintomasScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F4F8", dark: "#F0F4F8" }}
      headerImage={
        <Image
          source={require("@/assets/images/sintomas.png")}
          style={styles.reactLogo}
          contentFit="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          Sintomas de Dermatite
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.sectionTitle}>
          Principais Sintomas:
        </ThemedText>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Coceira intensa (prurido)
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Vermelhidão da pele
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Feridas ou crostas (devido ao coçar bastante)
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Perda de pelos (alopecia) nas áreas afetadas
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Pele seca, escamosa ou oleosa
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Odor forte na pele (em casos de infecção associada)
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Lambedura excessiva das patas
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.symptomItem}>
          <ThemedText style={styles.bulletPoint}>•</ThemedText>
          <ThemedText style={styles.symptomText}>
            Orelhas inflamadas (em casos de dermatite atópica ou alérgica)
          </ThemedText>
        </ThemedView>

        <ThemedText style={[styles.sectionTitle, { marginTop: 24 }]}>
          Causas mais comuns:
        </ThemedText>

        <ThemedView style={styles.causesContainer}>
          <ThemedText style={styles.causeText}>
            • Alergias (alimentar, ambientais ou picadas de pulga)
          </ThemedText>
          <ThemedText style={styles.causeText}>
            • Infecções por fungos/bactérias
          </ThemedText>
          <ThemedText style={styles.causeText}>
            • Irritação por produtos ou substâncias
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#F9F7F1",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "#D79d61",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  reactLogo: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A6FA5",
    marginBottom: 12,
    marginTop: 8,
  },
  symptomItem: {
    backgroundColor: "#D79d61",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bulletPoint: {
    color: "#A35E26",
    fontSize: 16,
    marginRight: 8,
    lineHeight: 22,
  },
  symptomText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
    flex: 1,
  },
  causesContainer: {
    backgroundColor: "#F0F4F8",
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
  },
  causeText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    marginBottom: 4,
  },
});
