import {
  View,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { gStyle } from "./Style/Style";
import Navigate from "./Navigate";
import { useFonts } from "expo-font";
import Spinner from "./img/Spinner.gif";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Montserrat Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat Semibold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return (
    <View style={gStyle.app}>
      <StatusBar backgroundColor='#320548' barStyle="light-content"/>
      {!fontsLoaded ? (
        <View
          style={{
            marginTop: Dimensions.get("window").height / 3.5,
          }}
        >
          <Image
            source={Spinner}
            style={{
              width: 100,
              objectFit: "scale-down",
              alignSelf: "center",
            }}
          />
        </View>
      ) : (
        <Navigate />
      )}
    </View>
  );
}