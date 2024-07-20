import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Welcome = ({welcomepageData}) => {
  return (
    <View style={styles.welcome}>
      <View>
        <Text style={styles.welcomeText}>{welcomepageData?.welcomedata?.title}</Text>
        <Text style={styles.welcomeDescription}>{welcomepageData?.welcomedata?.description}</Text>
      </View>
      <View style={styles.welcomeImageContainer}>
        <Image
          style={styles.welcomeImage}
          source={require("../assets/logo.png")}
          // source={{ uri : welcomepageData.welcomedata.logo }}
        />
        {/* <Text>{welcomepageData.welcomedata.logo}</Text> */}
      </View>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  welcome: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: 140,
    borderRadius: 10,
    backgroundColor: "#3b82f6",
    flexDirection: "row",
    position: "relative",
  },

  welcomeTextContainer: {
    flex: 1,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  welcomeDescription: {
    color: "white",
  },

  welcomeImageContainer: {
    position: "absolute",
    right: 10,
    width: 120,
    height: 120,
    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: "white",
    // borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
  },

  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    transform: [{rotate: '-45deg'}]
  },
});
