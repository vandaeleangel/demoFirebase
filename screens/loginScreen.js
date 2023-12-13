import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { useEffect } from "react";
import dynamicLinks from "@react-native-firebase/dynamic-links";

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    console.log("reached useEffect");
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        if (link.url.includes("google")) {
          console.log(link);
          console.log("Link contains 'google'");
          navigation.navigate("Home");
        } else {
          console.log('Link does not contain "google":', link.url);
        }
      })
      .catch((error) => {
        console.error("Error handling dynamic link:", error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>LoginScreen </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});
