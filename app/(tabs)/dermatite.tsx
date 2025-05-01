import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function DermatiteScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F4F8", dark: "#F0F4F8" }}
      headerImage={
        <Image
          source={require("@/assets/images/dogs.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          O que é Dermatite?
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.contentText}>
          A dermatite canina é o nome dado a uma inflamação na pele, de origem
          bacteriana, viral, fúngica ou por protozoário. Logo, é um nome
          generalizado para a inflamação da pele do animal.{" "}
        </ThemedText>

        {/* <ThemedText style={styles.contentText}>
          É uma das condições mais comuns em cães e pode se manifestar através de sintomas como:
        </ThemedText>

        <ThemedText style={styles.bulletPoint}>• Coceira intensa (prurido)</ThemedText>
        <ThemedText style={styles.bulletPoint}>• Vermelhidão da pele</ThemedText>
        <ThemedText style={styles.bulletPoint}>• Perda de pelo</ThemedText>
        <ThemedText style={styles.bulletPoint}>• Descamação ou crostas</ThemedText>
        <ThemedText style={styles.bulletPoint}>• Odor desagradável</ThemedText> */}

        <ThemedText style={styles.contentText}>
          Por isso, existem diferentes tipos de dermatite canina, que terão
          causas, diagnóstico e tratamento diferenciado, embora os sintomas e a
          aparência das lesões e da pele possam ser bem semelhantes.
        </ThemedText>
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
  },
  contentContainer: {
    backgroundColor: "#F9F7F1",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
    textAlign: "justify",
  },
  bulletPoint: {
    fontSize: 16,
    color: "#333",
    marginLeft: 20,
    marginBottom: 8,
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
