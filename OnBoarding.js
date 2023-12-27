import { View, Text } from "react-native";
import { gStyle } from "./Style/Style";

export const OnboardingItem = ({item}) => {
  return (
    <View style={gStyle.javshanCard}>
      <Text>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};
