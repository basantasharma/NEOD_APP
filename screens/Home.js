import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "../components/Welcome";
import { StyleSheet, View } from "react-native";
import CountrySelect from "../components/CountrySelect";
import { mainPagedata } from "../api/services";
import { useNavigation } from "@react-navigation/native";
import DrawerOpener from "../components/DrawerOpener";
import User from "../components/icons/User";
import Badal from "../components/icons/Badal";
import BottomTab from "../components/BottomTab";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export const roots = {
  backgroundColor: "#3b82f6",
  textColor: "gray",
};

const Home = ({ navigation }) => {
  const [welcomepageData, setWelcomepageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigationHook = useNavigation();

  useEffect(() => {
    setLoading(true);
    mainPagedata()
      .then((data) => {
        console.log(data, "data mainpage");
        setWelcomepageData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Welcome welcomepageData={welcomepageData} />
      <View style={{ flex: 1 }}>
        <CountrySelect welcomepageData={welcomepageData} navigation={navigation} />
      </View>

      {/* <View style={{position : "relative", justifyContent : "center", alignItems:'center'}}>
        <View style={styles.bottomtab}>
          <FontAwesome name="file-text" size={24} color="green" />
          <Ionicons name="options" size={24} color="green" />
          
        </View>
        <FontAwesome
          style={styles.usericon}
          name="user"
          size={44}
          color="green"
        />

      </View> */}

      {/* <View
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.bottomtab}>
          <Badal />
          <DrawerOpener />
        </View>

        <View style={styles.usericon}>
          <User />
        </View>
      </View> */}
      <BottomTab />
      {/* <DrawerOpener /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  bottomtab: {
    backgroundColor: roots.backgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
  },
  usericon: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 60,
    top: -25,
    backgroundColor: roots.backgroundColor,
  },
});

{
  /* <FontAwesome
          style={styles.usericon}
          name="user"
          size={44}
          color="white"
        /> */
}

{
  /* <FontAwesome name="file-text" size={24} color="white" /> */
}
{
  /* <Ionicons name="options" size={24} color="white" /> */
}
