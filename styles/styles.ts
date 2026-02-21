import { StyleSheet } from "react-native";
import { Image } from "expo-image";
//import {react-native-image-picker} from "react-native-image-picker";
export const styles = StyleSheet.create({
  indexBorder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: 20,
    gap: 8,
    marginBottom: 8,
    borderRadius: 10,
    paddingBottom: 80,
  },

  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carImage: {
    width: 200,
    height: 120,
    resizeMode: "contain",
    marginVertical: 15,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  screen: {
    flex: 1,
    //backgroundColor: "#f2f2f2",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "red",
  },

  card: {
    backgroundColor: "#D4D6EDD5",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 12,
  },

  button: {
    marginTop: 10,
  },

  resultCard: {
    marginTop: 20,
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 15,
  },

  resultText: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
});
