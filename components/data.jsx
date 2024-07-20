import { Text, View } from "react-native";
import BoldText from "./BoldText";

export const data = [
  {
    country: "Australia",
    image: require("../assets/australia.png"),
    content: [
      <Text>
        Take the <BoldText text="IELTS" /> and
        <BoldText text="PTE" />
        Test.
      </Text>,
      <Text>
        Select an <BoldText text="agent/consultancy" /> for further visa
        process.
      </Text>,
      <Text>
        Select a suitable <BoldText text="collage or university" /> as per your
        requirements.
      </Text>,
      <Text>
        Apply for an <BoldText text="offer letter" /> for that collage.
      </Text>,
      <View>
        <Text>
          <BoldText text="Required Documents" /> for offer letter.
        </Text>
        <View style={{ gap : 2, marginTop:2}}>
          <Text>1.SLC/SEE Marksheet </Text>
          <Text>2.+2 Marksheet & Transcript </Text>
          <Text>3.Bachelor's Marksheet & Transcript </Text>
          <Text>4.Master's Marksheet & Transcript </Text>
          <Text>5.Passport </Text>
          <Text>6.IELTS/PTE scoresheet </Text>
        </View>
      </View>,
    ],
  },
  {
    country: "Canada",
    image: require("../assets/australia.png"),
    content: [<Text>Take the IELTS and PTE Test.</Text>],
  },
  {
    country: "United Kingdom",
    image: require("../assets/australia.png"),
    content: [<Text>Take the IELTS and PTE Test.</Text>],
  },
  {
    country: "United States",
    image: require("../assets/australia.png"),
    content: [<Text>Take the IELTS and PTE Test.</Text>],
  },
  {
    country: "New Zealand",
    image: require("../assets/australia.png"),
    content: [<Text>Take the IELTS and PTE Test.</Text>],
  },
];
