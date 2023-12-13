import { StyleSheet} from "react-native";
import { NavigationContainer  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect } from "react";
import dynamicLinks from '@react-native-firebase/dynamic-links';

// import { initializeApp } from '@react-native-firebase/app';
import HomeScreen from "./screens/homescreen";
import LoginScreen from "./screens/loginScreen";

// initializeApp();

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.log("reached useEffect")
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link.url === 'https://angel1991.page.link/loginpage') {
          console.log(link)
         console.log("link is equal to url")
        }
      });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
