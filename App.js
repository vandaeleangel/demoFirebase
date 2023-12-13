import { StyleSheet} from "react-native";
import { NavigationContainer  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect } from "react";
import dynamicLinks from '@react-native-firebase/dynamic-links';

import { firebase } from '@react-native-firebase/app';

import HomeScreen from "./screens/homescreen";
import LoginScreen from "./screens/loginScreen";


export const firebaseConfig = {
  apiKey: "AIzaSyBLUPnzaTR9TMXypNu6xWQXA_PxKs289wY",
  projectId: "testdynamiclinks-fa637",
  appId:"1:599136051758:android:60e865fedcb8a1acd675bf",

};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // 
}


const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.log("reached useEffect")
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link.url === 'https://www.google.com/search?client=firefox-b-d&q=succes') {
          console.log(link)
         console.log("link is equal to url")
        } else console.log('reached', link.url)
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
