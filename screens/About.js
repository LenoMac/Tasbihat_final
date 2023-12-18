import { View, Text } from "react-native";
import React from "react";

export default function About() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Text style={{ alignSelf: "center" }}>Жолдошов Абдулхафиз </Text>
      <Text style={{alignSelf: 'center'}}>Ибрахимов Байтур</Text>
    </View>
  );
}
