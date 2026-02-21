import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/styles";
import { ImageBackground } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/jac_s3_new.jpg")}
      style={styles.background}
    >
      <View style={styles.indexBorder}>
        <Text style={styles.title}>JAC App 🚗</Text>
      </View>
      <View style={styles.body}>
        <Button
          title="Відкрити калькулятор"
          onPress={() => router.push("/explore")}
        />
      </View>
    </ImageBackground>
  );
}
