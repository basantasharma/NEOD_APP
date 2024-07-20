import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { mainPagedata } from "../api/services";
import Loader from "./Loader";
import { SafeAreaView } from "react-native-safe-area-context";
import { roots } from "../screens/Home";
import { ScrollView } from "react-native-gesture-handler";

const CustomDrawer = ({navigation}) => {
  const [welcomepageData, setWelcomepageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    mainPagedata()
      .then((data) => {
        setWelcomepageData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>error</Text>;
  }
  return (
    
      <ScrollView>
        <View
          style={{
            backgroundColor: roots.backgroundColor,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            // padding: 0,
            // marginTop: 20
          }}
        >
          <View
            style={{ width:"100%", objectFit: "contain", justifyContent: "center", alignItems: "center", margintop:0, marginBottom:50, backgroundColor:"white" }}
          >
          <Image
            source={require("../assets/logo.png")}
            style={{ width:"100%", height:75 , objectFit: "contain", marginTop:30}}

          />
          </View>
          {welcomepageData?.countries?.map((item, index) => (
            <Pressable
              onPress={() => {
                navigation.navigate("CountryDetails", {
                  country: item?.country,
                });
              }}
              key={index}
              style={{ justifyContent: "center", alignItems: "center"}}
            >
              <Image
                source={{ uri: item?.image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>
                {item?.country}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
