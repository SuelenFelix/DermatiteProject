import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Linking, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function LocalizarClinicasScreen() {
  const enderecoClinica = {
    nome: "Centro Médico Veterinário de Campina Grande",
    endereco:
      "R. Cel. José André, 112 - Centro, Campina Grande - PB, 58400-068",
    telefone: "(83) 21578238",
    mapsUrl:
      "https://www.google.com.br/maps/place/Centro+M%C3%A9dico+Veterin%C3%A1rio+de+Campina+Grande/@-7.219847,-35.8894534,17z/data=!3m1!4b1!4m6!3m5!1s0x7ac1fd06f0e8419:0x350ed3bfa207fc17!8m2!3d-7.2198523!4d-35.8868785!16s%2Fg%2F11r5vrl_6v?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
  };

  const abrirGoogleMaps = () => {
    Linking.openURL(enderecoClinica.mapsUrl);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#F0F4F8", dark: "#F0F4F8" }}
        headerImage={
          <Image
            source={require("@/assets/images/clinica.jpg")}
            style={styles.reactLogo}
            contentFit="cover"
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={{ color: "#333333" }}>
            Clínicas Veterinárias
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.cardContainer}>
          <ThemedText type="subtitle" style={styles.clinicaNome}>
            {enderecoClinica.nome}
          </ThemedText>

          <ThemedView style={styles.infoContainer}>
            <FontAwesome5
              name="map-marker-alt"
              size={20}
              color="#4A6FA5"
              style={styles.icon}
            />
            <ThemedText style={styles.infoText}>
              {enderecoClinica.endereco}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.infoContainer}>
            <FontAwesome5
              name="phone"
              size={20}
              color="#4A6FA5"
              style={styles.icon}
            />
            <ThemedText style={styles.infoText}>
              {enderecoClinica.telefone}
            </ThemedText>
          </ThemedView>

          <TouchableOpacity
            style={styles.mapsButton}
            onPress={abrirGoogleMaps}
            activeOpacity={0.7}
          >
            <FontAwesome5
              name="map"
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
            <ThemedText style={styles.mapsButtonText}>
              Abrir no Google Maps
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ParallaxScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#F9F7F1",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  clinicaNome: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    color: "#333333",
    fontSize: 16,
  },
  mapsButton: {
    backgroundColor: "#4A6FA5",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  mapsButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  reactLogo: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
