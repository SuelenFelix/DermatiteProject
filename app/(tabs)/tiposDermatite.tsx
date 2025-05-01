import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TiposScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fffff", dark: "#fffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/dogg.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          Tipos de Dermatite
        </ThemedText>
      </ThemedView>
      <ThemedText style={{ color: "#333333" }}>
        Veja a seguir alguns exemplos de tipos de dermatite.
      </ThemedText>
      <Collapsible title="Dermatite alérgica">
        <ThemedText>
          É causada por uma reação do sistema imunológico a alérgenos como
          pulgas, alimentos, pólen, poeira ou produtos químicos. Quando isso
          acontece, é comum observar a pele no animal avermelhada, com coceira
          intensa, além de lamber ou morder constantemente certas regiões do
          corpo.
        </ThemedText>
        <Image
          source={require("@/assets/images/dermatiteAlergica.jpeg")}
          style={styles.dermatiteImage}
          contentFit="cover"
        />
      </Collapsible>
      <Collapsible title="Dermatite bacteriana (piodermite)">
        <ThemedText>
          É uma infecção da pele causada por bactérias, geralmente secundária a
          outra condição (como alergias ou feridas). Pode provocar pústulas,
          crostas, mau cheiro e queda de pelos. São encontrados na flora cutânea
          normal dos cachorros as bactérias do gênero Staphylococcus e se
          proliferam exageradamente caso os animais estejam com imunidade baixa.
          Precisa de um tratamento com antibióticos, shampoos e outros
          medicamentos.
        </ThemedText>
        <Image
          source={require("@/assets/images/bacteriana.jpeg")}
          style={styles.dermatiteImage}
          contentFit="cover"
        />
        <Image
          source={require("@/assets/images/bacterianaSec.jpeg")}
          style={styles.dermatiteImage}
          contentFit="cover"
        />
      </Collapsible>
      <Collapsible title="Dermatite fúngica (dermatofitose ou malasseziose)">
        <ThemedText>
          Causada por fungos como Malassezia ou dermatófitos (como Microsporum).
          Os sinais incluem coceira, descamação, odor forte, e lesões
          circulares. É contagiosa em alguns casos e tratada com antifúngicos. A
          Malassezia é um fungo que vive naturalmente nas orelhas do cão e pode
          se proliferar de forma anormal com calor, umidade, em inflamações ou
          como consequência de uma queda no sistema imunológico.{" "}
        </ThemedText>
        <Image
          source={require("@/assets/images/fungica.jpeg")}
          style={styles.dermatiteImage}
          contentFit="cover"
        />
        <Image
          source={require("@/assets/images/fungicaSec.jpeg")}
          style={styles.dermatiteImage}
          contentFit="cover"
        />
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    backgroundColor: "#F9F7F1",
    flexDirection: "row",
    gap: 8,
  },
  reactLogo: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: "cover",
  },
  dermatiteImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    top: 20,
  },
});
