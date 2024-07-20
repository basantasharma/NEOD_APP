import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoldText = ({text}) => {
  return <Text style={{ fontWeight: "800" }}> {text} </Text>;
};

export default BoldText;

const styles = StyleSheet.create({});
