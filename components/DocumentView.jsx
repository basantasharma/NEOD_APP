import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable
} from "react-native";
import React from "react";
import { roots } from "../screens/Home";
import BackButton from "./icons/Back";

const DocumentView = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackButton />
        </Pressable>
        <View style={styles.headerMain}>
          <Text style={styles.countryText}>{route?.params?.country}</Text>
        </View>
        <View></View>
      </View>
      <Image
        source={{ uri: route?.params?.images }}
        style={{ width: "100%", height: "90%", resizeMode: "contain" }}
      />
    </>
  );
};

export default DocumentView;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    height: 80,
    paddingBottom: 10,
    backgroundColor: roots.backgroundColor,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    objectFit: "contain",
    width: 100,
    height: 100,
  },
  countryText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
