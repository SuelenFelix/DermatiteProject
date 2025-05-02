import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function CuidadosCasaScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F4F8", dark: "#F0F4F8" }}
      headerImage={
        <Image
          source={require("@/assets/images/dog-care.png")}
          style={styles.reactLogo}
          contentFit="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          Cuidados em Casa
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.introText}>
          Quando seu cão está com dermatite, alguns cuidados caseiros podem
          aliviar os sintomas e acelerar a recuperação:
        </ThemedText>

        <ThemedView style={styles.careItem}>
          <MaterialCommunityIcons
            name="dog"
            size={24}
            color="#4A6FA5"
            style={styles.icon}
          />
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.careTitle}>
              Banhos terapêuticos
            </ThemedText>
            <ThemedText style={styles.careText}>
              Usar shampoos específicos para dermatite (antialérgico,
              antifúngicos ou com aveia coloidal), conforme orientação
              veterinária.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.careItem}>
          <MaterialCommunityIcons
            name="hand-wash-outline"
            size={24}
            color="#4A6FA5"
            style={styles.icon}
          />
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.careTitle}>Hidratação da pele</ThemedText>
            <ThemedText style={styles.careText}>
              Utilize loções ou sprays hidratantes próprios para cães, se o
              veterinário recomendar.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.careItem}>
          <MaterialCommunityIcons
            name="bug-outline"
            size={24}
            color="#4A6FA5"
            style={styles.icon}
          />
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.careTitle}>
              Controle de pulgas e carrapatos
            </ThemedText>
            <ThemedText style={styles.careText}>
              Use antiparasitários regularmente, pois a picada são gatilhos
              comum da dermatite.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.careItem}>
          <MaterialCommunityIcons
            name="home-heart"
            size={24}
            color="#4A6FA5"
            style={styles.icon}
          />
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.careTitle}>
              Ambiente limpo e sem alérgenos{" "}
            </ThemedText>
            <ThemedText style={styles.careText}>
              Lave com frequência a cama, brinquedos e locais onde o cão dorme.
              Evitar o uso de produtos de limpeza muito fortes.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.careItem}>
          <MaterialCommunityIcons
            name="food-apple"
            size={24}
            color="#4A6FA5"
            style={styles.icon}
          />
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.careTitle}>
              Alimentação de qualidade
            </ThemedText>
            <ThemedText style={styles.careText}>
              Em casos de dermatite alérgica, pode ser necessário mudar para uma
              ração hipoalergênica ou específica. Suplementos com ômega - 3 e
              ômega - 6 ajudam a fortalecer a pele.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.careItem}>
          <MaterialCommunityIcons
            name="shield-sun"
            size={24}
            color="#4A6FA5"
            style={styles.icon}
          />
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.careTitle}>
              Proteção contra coceira
            </ThemedText>
            <ThemedText style={styles.careText}>
              Use colar elizabetano se necessário. Aplique compressas frias nas
              áreas irritadas para alívio imediato.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.warningBox}>
          <ThemedText style={styles.warningTitle}>⚠️ Atenção</ThemedText>
          <ThemedText style={styles.warningText}>
            Estes cuidados complementam mas não substituem o tratamento
            veterinário. Se os sintomas piorarem ou persistirem por mais de 3
            dias, consulte imediatamente um profissional.
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
    backgroundColor: "#F9F7F1",
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
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
    textAlign: "justify",
  },
  careItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
    marginTop: 3,
  },
  textContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  careTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4A6FA5",
    marginBottom: 5,
  },
  careText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
  warningBox: {
    backgroundColor: "#FFF8E1",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#FFC107",
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E65100",
    marginBottom: 8,
  },
  warningText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#5D4037",
  },
});
