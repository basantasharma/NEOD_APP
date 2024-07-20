import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { data } from "./data";

const CountrySelect = ({welcomepageData,  navigation }) => {
  console.log(welcomepageData, "data")
  return (
    <View>
      <Text style={styles.header}>Select your desired country</Text>
      <FlatList
        style={styles.countryContainer}
        data={welcomepageData?.countries}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("CountryDetails", {
                  country: item?.country,
                })
              }
              style={styles.country}
            >
              <Image style={styles.imageContainer} source={{uri : item.image}} />
              <Text style={styles.countryText}>{item.country}</Text>
            </Pressable>
          );
        }}
        keyExtractor={(_, index) => index}
        numColumns={2} // This will make two items per row
      />
    </View>
  );
};

export default CountrySelect;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 16,
    marginBottom: 10,
  },
  countryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    marginBottom: 50,
  },
  country: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    padding: 10,
  },
  imageContainer: {
    objectFit: "contain",
    height: 100,
    width : "100%"
  },
  countryText: {
    color: "gray",
    fontSize: 14,
    fontWeight: "bold",
  },
});
