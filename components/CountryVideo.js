import * as React from "react";
import { View, StyleSheet, Text, Pressable, Alert, Button } from "react-native";
import { roots } from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import Back from "./icons/Back";

export default CountryVideo = ({ navigation, route }) => {
  const { videoLink } = route.params;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  // React.useEffect(() => {
    // video.current.playAsync();
    // console.log(status, "status")
    // setStatus({isPlaying: true})
  // }, []);

  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = React.useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          {/* <Ionicons
            style={{
              backgroundColor: "white",
              color: roots.backgroundColor,
              width: 26,
              marginTop: 10,
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
      </View>
      {/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoLink,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
       /> */}
      <View>
        {/* <Text>
          {route.params.title}
        </Text> */}
        <YoutubePlayer
          height={400}
          play={playing}
          videoId={route.params.videoLink}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>
      {/* <View style={styles.videotitle}>
        <Text style={styles.videotitletext}>Language Profiency Test</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: roots.backgroundColor,
    height: 70,
    padding: 10,
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    flex: 1,
    position: "relative",
  },
  videotitle: {
    position: "absolute",
    bottom: 24,
    left: 24,
  },
  videotitletext: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */
}
