import React from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { gStyle } from "../Style/Style";
import Header from "./Header";
import Slides from "../Slides";
import { OnboardingItem } from "../OnBoarding";

export const Javshan = () => {
  return (
    <View style={gStyle.main}>
      {/* HEADER */}
      <View style={gStyle.header}>
        <Header title="ЖАВШАН" />
      </View>
      <View style={gStyle.container}>
        <FlatList
          data={Slides}
          renderItem={(item) => <OnboardingItem item={item} />}
        />
      </View>
    </View>
  );
};
