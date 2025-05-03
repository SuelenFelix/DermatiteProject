import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function EscalaPruridoScreen() {
  const pruridoLevels = [
    {
      descricao: "Animal normal. O prurido não é visto como problema.",
      intensidade: 0,
    },
    {
      descricao:
        "Prurido bastante discreto. Episódios casuais. Prurido mais intenso do que antes de ter iniciado o problema dermatológico.",
      intensidade: 2,
    },
    {
      descricao:
        "Prurido discreto. O animal não se coça quando está dormindo, comendo ou brincando.",
      intensidade: 4,
    },
    {
      descricao:
        "Prurido moderado, episódios intermitentes de coceira. Pode ocorrer à noite. O animal não interrompe atividades como comer e brincar para se coçar.",
      intensidade: 6,
    },
    {
      descricao:
        "Prurido intenso, com episódios prolongados. Pode ocorrer à noite. Animal pode interromper atividades como comer, brincar para se coçar.",
      intensidade: 8,
    },
    {
      descricao:
        "Prurido intenso, contínuo. O prurido não cessa, independente do que esteja acontecendo ao redor, até mesmo na hora da consulta.",
      intensidade: 10,
    },
  ];

  // Função para determinar a cor com base na intensidade
  const getIntensityColor = (intensidade) => {
    if (intensidade >= 8) return "#D32F2F"; // Vermelho
    if (intensidade >= 5) return "#FFA000"; // Laranja
    if (intensidade >= 3) return "#FFC107"; // Amarelo
    return "#4CAF50"; // Verde
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F4F8", dark: "#F0F4F8" }}
      headerImage={
        <Image
          source={require("@/assets/images/coceira.png")}
          style={styles.reactLogo}
          contentFit="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          Escala de Prurido Canino (1-10)
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.introText}>
        Avalie a intensidade da coceira do seu cão usando a régua lateral:
      </ThemedText>

      {pruridoLevels.map((level, index) => (
        <ThemedView key={index} style={styles.levelContainer}>
          <View style={styles.rulerContainer}>
            <View
              style={[
                styles.rulerIndicator,
                {
                  height: `${level.intensidade * 10}%`,
                  backgroundColor: getIntensityColor(level.intensidade),
                },
              ]}
            />
            <ThemedText style={styles.rulerText}>
              {level.intensidade}
            </ThemedText>
          </View>

          <ThemedView style={styles.descriptionContainer}>
            <ThemedText style={styles.levelDescription}>
              {level.descricao}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      ))}
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
    paddingHorizontal: 20,
    textAlign: "center",
  },
  levelContainer: {
    backgroundColor: "#F9F7F1",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 10,
  },
  rulerContainer: {
    width: 40,
    height: 120,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    marginRight: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  rulerIndicator: {
    width: "100%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: "absolute",
    bottom: 0,
  },
  rulerText: {
    position: "absolute",
    top: "50%",
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  levelDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
  footer: {
    marginTop: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
  },
});
