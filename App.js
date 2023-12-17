import { View, StatusBar, NativeModules, Button } from "react-native";
import { gStyle } from "./Style/Style";
import Navigate from "./Navigate";
import { useFonts } from "expo-font";
import React from "react";

export default function App() {

  // React.useEffect(() => {
    
  // }, [])
  const [fontsLoaded] = useFonts({
    "Montserrat Medium": require("./assets/fonts/Montserrat Medium.ttf"),
    "Montserrat SemiBold": require("./assets/fonts/Montserrat SemiBold.ttf"),
  });
  return (
    <View style={gStyle.app}>
      <StatusBar backgroundColor="#320548" barStyle="light-content" />
      <Navigate />
    </View>
  );
}

