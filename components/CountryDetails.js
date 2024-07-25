import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { roots } from "../screens/Home";
import Svg, { Path, Rect } from "react-native-svg";
import { countryData } from "../api/services";
import Loader from "./Loader";
import DrawerOpener from "./DrawerOpener";
import Back from "./icons/Back";
import TextIcon from "./icons/Text";
import BottomTab from "./BottomTab";
import Options from "./icons/Options";

const CountryDetails = ({ navigation, route }) => {
  const { country } = route.params;
  const [countrydata, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    countryData(country.replace(" ", "%20"))
      .then((data) => {
        setCountryData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [country]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={{ position: "relative" }}>
      <View style={styles.header}>
        <Pressable
          style={{ position: "absolute", top: 30, left: 10 }}
          onPress={() => navigation.goBack()}
        >
          {/* <Ionicons
            style={{
              backgroundColor: "white",
              color: roots.backgroundColor,
              width: 26,
              top: 0,
              borderRadius: 13,
              alignItems: "center",
              justifyContent: "center",
            }}
            name="arrow-back"
            size={24}
            color="black"
          /> */}
          <Back />
        </Pressable>
        <View style={styles.headerMain}>
          <Image
            style={styles.imageContainer}
            source={{ uri: countrydata?.countryImage }}
          />
          <Text style={styles.countryText}>
            {countrydata?.country?.toUpperCase()}
          </Text>
        </View>
            </View>
      <ScrollView style={styles.bulletsContainer}>
        {countrydata?.descriptions?.map((content, index) => {
          return (
            <>
              <View style={styles.bullets} key={index}>
                <Text>{index + 1}. </Text>
                <Text> {content?.title} </Text>
                <View style={{ gap: 2, flexDirection: "row" }}>
                  {content?.readingText?.length > 0 && (
                    <Pressable
                      onPress={() =>
                        navigation.navigate("CountryReading", {
                          readingText: content?.readingText,
                          images: content?.images,
                          country: countrydata?.country,
                        })
                      }
                      style={{
                        backgroundColor: roots.backgroundColor,
                        padding: 3,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* <Ionicons name="information" size={12} color="white" /> */}
                      <TextIcon />
                    </Pressable>
                  )}

                  {content?.videoLink && (
                    <View>
                      <Pressable
                        onPress={() =>
                          navigation.navigate("CountryVideo", {
                            videoLink: content.videoLink,
                          })
                        }
                        style={{
                          backgroundColor: roots.backgroundColor,
                          padding: 3,
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-video"
                        >
                          <Path
                            fill="white"
                            d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
                          />
                          <Rect
                            x="2"
                            y="6"
                            fill="white"
                            width="14"
                            height="12"
                            rx="2"
                          />
                        </Svg>
                      </Pressable>
                    </View>
                  )}
                </View>
              </View>
              {content?.subdescription?.length > 0 && (
                content?.subdescription?.split(", ")?.map((sub, index)=>(
                  <View style={{flexDirection : "row", marginLeft : 10}} key={index}>
                    <Text>{"\u2B24"}</Text>
                    <Text> {sub} </Text>
                  </View>
                ))
                
              )}
            </>
          );
        })}
      </ScrollView>
    </View>
    // );
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  header: {
    height: 150,
    paddingBottom: 10,
    backgroundColor: roots.backgroundColor,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // borderColor: "green",
    // borderWidth: 1,
    objectFit: "contain",
    width: 100,
    height: 100,
  },
  countryText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  documentChecklist: {
    alignItems: "center",
    marginVertical: 13,
  },
  documentChecklistText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    backgroundColor: roots.backgroundColor,
    padding: 10,
    borderRadius: 10,
  },
  bulletsContainer: {
    padding: 15,
  },
  bullets: {
    flexDirection: "row",
    marginBottom: 4,
    flexWrap: "wrap",
  },
});
