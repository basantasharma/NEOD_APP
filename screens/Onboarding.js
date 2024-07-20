import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View as NormalView } from "react-native";
import OnboardingImage from "../assets/onboard.jpg";
import { roots } from "./Home";
import { onboardingData } from "../api/services";

const Onboarding = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const scrollContent = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  const handleIndicator = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const activePage = Math.round(offset / width);
    setActive(activePage);
  };

  const [onboardingdata, setOnboardingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    onboardingData()
      .then((data) => {
        setOnboardingData(data);
      })
      .catch((error) => {
        setError(error);
        
      });
      setLoading(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <NormalView
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            width,
            height: 20,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NormalView
            style={{ display: "flex", flexDirection: "row", gap: 20 }}
          >
            {onboardingdata.map((item, index) => {
              return (
                <NormalView
                  key={item?.title}
                  style={{
                    height: 8,
                    width: active === index ? 25 : 8,
                    borderRadius: 50,
                    backgroundColor:
                      active === index ? roots.backgroundColor : "silver",
                  }}
                />
              );
            })}
          </NormalView>
        </NormalView>

        {/* skip button */}
        {active !== onboardingdata?.length - 1 ? (
          <NormalView
            style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}
          >
            <TouchableOpacity
              onPress={scrollContent}
              style={{
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  backgroundColor: roots.backgroundColor,
                  color: "white",
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </NormalView>
        ) : (
          <NormalView
            style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomeStack");
              }}
              style={{
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  color: roots.backgroundColor,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Start
              </Text>
            </TouchableOpacity>
          </NormalView>
        )}

        {/* contents here */}
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleIndicator}
        >
          {onboardingdata?.map((item, index) => (
            <NormalView
              key={item?.title}
              style={{
                flex: 1,
                width,
                gap: 40,
                justifyContent: "center",
                padding: 30,
              }}
            >
              <Image
                source={{uri : item?.image}}
                style={{ width: "100%", height: "50%" }}
              />
              <NormalView>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: roots.backgroundColor,
                  }}
                >
                  {item?.title}
                </Text>
                <Text style={{ fontSize: 16, color: roots.textColor }}>
                  {item?.description}
                </Text>
              </NormalView>
            </NormalView>
          ))}

          {/* <NormalView
            style={{
              flex: 1,
              width,
              gap: 40,
              justifyContent: "center",
              padding: 30,
            }}
          >
            <Image
              source={OnboardingImage}
              style={{ width: "100%", height: "50%" }}
            />
            <NormalView>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: roots.backgroundColor,
                }}
              >
                Welcome to the app
              </Text>
              <Text style={{ fontSize: 16, color: roots.textColor }}>
                This is the last screen of the app
              </Text>
            </NormalView>
          </NormalView> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Onboarding;

{
  /* <NormalView style={{ flex: 1, width }}></NormalView>
          <NormalView style={{ flex: 1, width }}></NormalView> */
}
