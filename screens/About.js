import { View, Text, Image } from "react-native";
import React from "react";
import { gStyle } from "../Style/Style";
import { goBack } from "../img/Back.png";


export default function About() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: '#320548'
      }}
    >
      <View>
        <Image style={{width: 40}} source={goBack}/>
      </View>
      <Text style={{ alignSelf: "center" }}>Жолдошов Абдулхафиз</Text>
      <Image source={goBack}/>
      <Text style={{alignSelf: 'center'}}>Ибрахимов Байтур</Text>
    </View>
  );
}
