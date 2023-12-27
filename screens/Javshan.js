import React from "react";
import { View, FlatList,Text } from "react-native";
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
        <View style={gStyle.javshanContainer}>
          <FlatList
            data={Slides}
            renderItem={({ item }) => (
              <OnboardingItem item={item} key={item.id} />
            )}
            horizontal
            pagingEnabled
            scrollEventThrottle={0}
          />
        </View>
        <View>
          <Text>Субхаанака йаа лаа илааа иллаа антал амаанал амаана холлиснаа минан-наар</Text>
        </View>
      </View>
    </View>
  );
};
