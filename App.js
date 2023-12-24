import {
  View,
  StatusBar,
  NativeModules,
  Button,
  SafeAreaView,
  Text,
} from "react-native";
import { gStyle } from "./Style/Style";
import Navigate from "./Navigate";
import { useFonts } from "expo-font";
import React from "react";

export default function App() {
  React.useEffect(() => {
    return () => {
      <Text>Go back?</Text>;
    };
  }, []);

  const [fontsLoaded] = useFonts({
    "Montserrat Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat Semibold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <Button title="It is not working on it!" />;
  return (
    <SafeAreaView backgroundColor="#320548">
      <View style={gStyle.app}>
        <StatusBar backgroundColor="#320548" barStyle="light-content" />
        <Navigate />
      </View>
    </SafeAreaView>
  );
}
