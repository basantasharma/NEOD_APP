import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerOpener from "./DrawerOpener";
import Badal from "./icons/Badal";
import User from "./icons/User";

const BottomTab = (props) => {
  return (
    <View
      style={{
        ...props.classname,
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
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomtab: {
    backgroundColor: "#3b82f6",
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
    backgroundColor: "#3b82f6",
  },
});
