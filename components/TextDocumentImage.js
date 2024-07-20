import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ImageViewer from 'react-native-image-zoom-viewer';
import { useNavigation } from "@react-navigation/native";
import { roots } from "../screens/Home";

const TextDocumentImage = ({ item, images, country }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigation()
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("Document", {images : item?.image, country : country})
        }}
        style={{ flex: 1, padding: 10, flexDirection: "row" }}
      >
        <View style = {{ width:'100%' }}>

          <Image
            source={{ uri: item?.image }}
            style={{ width: "100%", height: 200 }}
          />
          <Text 
            style = {{
              margin:5,
              textAlign:'center',
              color:roots.backgroundColor,
              fontSize:14,
              fontWeight:'bold'            
            }}
          >{ item.title }</Text>
        </View>
      </TouchableOpacity>
      {isVisible && (
        <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
            {/* <Text> hi </Text> */}
            <ImageViewer onBackdropPress imageUrls={[{ url: images }]} />
          </Modal>
          )}
    </>
  );
};

export default TextDocumentImage;

const styles = StyleSheet.create({});
