import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { roots } from "../screens/Home";
import TextDocumentImage from "../components/TextDocumentImage";
import DrawerOpener from "../components/DrawerOpener";
import Back from "../components/icons/Back";
import BottomTab from "../components/BottomTab";
import { useNavigation } from "@react-navigation/native";
import Options from "../components/icons/Options";

const CountryText = ({ navigation, route, }) => {
  const { readingText, images } = route.params;
  // const { countryName, countryImage } = country.params;
  // const navigation = useNavigation()
  const [activeImage, setActiveImage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <View style={{ position: "relative", flex : 1 }}>
        <View style={styles.header}>
          <Pressable
            style={{ position: "absolute", top: 30, left: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Back />
          </Pressable>

          <View style={styles.headerMain}>
            <Text style={styles.countryText}>{route.params.country}</Text>
          </View>

          {/* convert above map to flatlist and there should be 2 columns and image should contain all the available space add gap of 10 */}
          
 </View>
        <View style={styles.bulletsContainer}>
        <Text 
          style={{
            // backgroundColor:roots.backgroundColor,
            textAlign: "center",
            color: roots.backgroundColor,
            fontWeight: 700,
            fontSize: 18,
            padding:5
          }}
          >Test Discription</Text>

          {readingText?.map((content, index) => {
            return (
              <View style={styles.bullets} key={index}>
                <Text>{index + 1}. </Text>
                <Text style={{ fontWeight: 500 }}> {content} </Text>
              </View>
            );
          })}
        </View>

        {images.length > 0 && (
          <>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: roots.backgroundColor,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Sample Documents
              </Text>
            </View>

            {/* convert above map to flatlist and there should be 2 columns and image should contain all the available space add gap of 10 */}
            <FlatList
              data={images}
              keyExtractor={(index) => index.toString()}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <>
                    <TextDocumentImage
                      country={route?.params?.country}
                      item={item}
                      activeImage={activeImage}
                      setActiveImage={setActiveImage}
                    />
                  </>
                );
              }}
            />
          </>
        )}
      </View>
      {/* <BottomTab classname={{marginHorizontal : 10}} /> */}

      {/* <DrawerOpener /> */}

      {/* <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          borderColor: "green",
        }}
      >
        <Pressable style={{backgroundColor : roots.backgroundColor, padding : 10, borderRadius : 20}} onPress={() => navigation.openDrawer()}>
          <Options />
        </Pressable>
      </View> */}
    </>
  );
};

export default CountryText;

const styles = StyleSheet.create({
  header: {
    height: 120,
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
  },
  documents: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

// const CountryText = () => {
//   return (
//     <View>
//       <Text>CountryText</Text>
//     </View>
//   )
// }

// export default CountryText

// const styles = StyleSheet.create({})
