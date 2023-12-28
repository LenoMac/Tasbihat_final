import React, { useRef } from "react";
import { View, FlatList, Text, Dimensions } from "react-native";
import { gStyle } from "../Style/Style";
import Header from "./Header";
import Slides from "../Slides";
import { OnboardingItem } from "../OnBoarding";
export const Javshan = () => {

  const [page, setPage] = React.useState(1)

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(x / Dimensions.get("window").width);
    setPage(currentIndex + 1)
  };

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
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={handleScroll}
          />
        </View>
        <View style={gStyle.javshanEndContainer}>
          <Text style={[gStyle.javshanCounter, {fontFamily: 'Montserrat Semibold'}]}>{page}/100</Text>
          <Text
            style={[gStyle.javshanEnd, { fontFamily: "Montserrat Semibold" }]}
          >
            Субхаанака йаа лаа илааа иллаа антал амаанал амаана холлиснаа
            минан-наар
          </Text>
        </View>
      </View>
    </View>
  );
};
