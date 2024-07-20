import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Left from "./screens/Onboarding";
import CountryDetails from "./components/CountryDetails";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { LogBox } from "react-native";
import CountryVideo from "./components/CountryVideo";
import CountryText from "./screens/CountryText";
import CustomDrawer from "./components/Drawer";
import DocumentView from "./components/DocumentView";
import { useEffect } from "react";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const func = async () => {
      try {
        const isFirsttime = await AsyncStorage.getItem("isFirstTime");
        if(!isFirsttime) {
          await AsyncStorage.setItem("isFirstTime", "true");
          navigation.navigate("Onboarding");
        }
      } catch (error) {
        console.log("was here", error);
      }
    };
    func();
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CountryDetails" component={CountryDetails} />
      {/* <MainStack.Screen name="CountryReading" component={CountryText} /> */}
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeStack"
      >
        <MainStack.Screen name="HomeStack" component={HomeStack} />
        <MainStack.Screen name="CountryVideo" component={CountryVideo} />
        <MainStack.Screen name="Onboarding" component={Left} />
        <MainStack.Screen name="Document" component={DocumentView} />
        <MainStack.Screen name="CountryReading" component={CountryText} />
      </MainStack.Navigator>
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
