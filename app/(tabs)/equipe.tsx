import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function EquipeScreen() {
  const teamMembers = [
    {
      name: "Dr. Carlos Silva",
      role: "Veterinário Chefe",
      specialty: "Dermatologia Canina",
      experience: "15 anos de experiência",
      //   image: require("@/assets/images/team1.jpg")
    },
    {
      name: "Dra. Ana Oliveira",
      role: "Veterinária",
      specialty: "Alergias e Imunologia",
      experience: "10 anos de experiência",
      //   image: require("@/assets/images/team2.jpg")
    },
    {
      name: "Dr. Marcos Costa",
      role: "Veterinário",
      specialty: "Cirurgia Dermatológica",
      experience: "8 anos de experiência",
      //   image: require("@/assets/images/team3.jpg")
    },
    {
      name: "Mariana Santos",
      role: "Assistente Veterinária",
      specialty: "Cuidados Pós-tratamento",
      experience: "5 anos de experiência",
      //   image: require("@/assets/images/team4.jpg")
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F4F8", dark: "#F0F4F8" }}
      headerImage={
        <Image
          source={require("@/assets/images/squad.png")}
          style={styles.reactLogo}
          contentFit="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: "#333333" }}>
          Conheça Nossa Equipe
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.introText}>
        Esta é a equipe responsável pela realização deste projeto
      </ThemedText>

      {teamMembers.map((member, index) => (
        <ThemedView key={index} style={styles.memberCard}>
          <Image
            source={member.image}
            style={styles.memberImage}
            contentFit="cover"
          />
          <ThemedView style={styles.memberInfo}>
            <ThemedText style={styles.memberName}>{member.name}</ThemedText>
            <ThemedText style={styles.memberRole}>{member.role}</ThemedText>

            <ThemedView style={styles.detailItem}>
              <MaterialIcons name="pets" size={18} color="#4A6FA5" />
              <ThemedText style={styles.detailText}>
                {member.specialty}
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.detailItem}>
              <MaterialIcons name="work" size={18} color="#4A6FA5" />
              <ThemedText style={styles.detailText}>
                {member.experience}
              </ThemedText>
            </ThemedView>
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
  memberCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  memberInfo: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  memberName: {
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  memberRole: {
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#4A6FA5",
    marginBottom: 8,
  },
  detailItem: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  detailText: {
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
});
