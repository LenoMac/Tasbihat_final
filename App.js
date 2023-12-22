import {
  View,
  StatusBar,
  NativeModules,
  Button,
  SafeAreaView,
} from "react-native";
import { gStyle } from "./Style/Style";
import Navigate from "./Navigate";
import { useFonts } from "expo-font";
import React from "react";

export default function App() {
  return (
    <View style={gStyle.app}>
      <StatusBar backgroundColor="#320548" barStyle="light-content" />
      <Navigate />
    </View>
  );
}
