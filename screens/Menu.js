import React from "react";
import {
  Text,
  Image,
  View,
  Button,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Импорт Лого и изображении
import Logo from "../img/Logo.png";
import Shahada from "../img/Shahada.png";
import Tasbih from "../img/Tasbih.png";
import Sur from "../img/Sur.png";
import Dua from "../img/Dua.png";
import Javshan from "../img/Javshan.png";
import Tafrij from "../img/Tafrijia.png";
import { CustomButton } from "./CustomButton";
import KG from "../img/kg.png";
import RUS from "../img/rus.png";
// Импорт стилей
import { gStyle } from "../Style/Style";

const menuItems = [
  { titleRus: "Шахада", titleKg: "Шахада", img: Shahada, name: "Shahada" },
  { titleRus: "Тасбихат", titleKg: "Тасбихат", img: Tasbih, name: "Tasbihat" },
  { titleRus: "Суры", titleKg: "Сүрөлөр", img: Sur, name: "Sur" },
  { titleRus: "Молитвы", titleKg: "Дубалар", img: Dua, name: "Prayer" },
  { titleRus: "Жавшан", titleKg: "Жавшан", img: Javshan, name: "Javshan" },
  { titleRus: "Тафрижия", titleKg: "Тафрижия", img: Tafrij, name: "Tafrijia" },
];

export const Menu = () => {
  const [lang, setLang] = React.useState("kg");

  const changeToKg = () => {
    setLang("kg");
    saveLang("kg");
  };

  const changeToRus = () => {
    setLang("rus");
    saveLang("rus");
  };

  //   Load language from Storage

  React.useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      const savedLang = await AsyncStorage.getItem("currentLanguage");
      if (savedLang !== null) {
        setLang(savedLang);
      }
    } catch (e) {
      console.log("Error loading language: ", e);
    }
  };

  //   Save lang state in Storage
  const saveLang = async (value) => {
    try {
      await AsyncStorage.setItem("currentLanguage", value);
    } catch (error) {
      console.log("Error saving language: ", error);
    }
  };

  const navigation = useNavigation();
  const onPress = (name) => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView backgroundColor="#320548">
      <ScrollView style={{ width: "100%", height: "100%" }}>
        {/* <View style={gStyle.menu_container}> */}
        <View style={gStyle.menu}>
          <View style={gStyle.logoAndText}>
            <Image style={{ width: 120, height: 120 }} source={Logo} />
            <Text style={gStyle.title}>НАМАЗ ТАСБИХАТ</Text>
            {/* Lang container */}
            <View style={gStyle.language}>
              <Pressable onPress={changeToKg}>
                <View
                  style={[
                    gStyle.lanContainer,
                    lang === "kg"
                      ? { borderColor: "yellow" }
                      : { borderColor: "#320548" },
                  ]}
                >
                  <Image
                    style={{ width: 20, objectFit: "scale-down" }}
                    source={KG}
                  />
                  <Text style={gStyle.langText}>Кыргызча</Text>
                </View>
              </Pressable>
              <Pressable onPress={changeToRus}>
                <View
                  style={[
                    gStyle.lanContainer,
                    lang === "rus"
                      ? { borderColor: "yellow" }
                      : { borderColor: "#320548" },
                  ]}
                >
                  <Image
                    style={{ width: 20, objectFit: "scale-down" }}
                    source={RUS}
                  />
                  <Text style={gStyle.langText}>Русский</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={gStyle.section}>
            {menuItems.map((item, index) => {
              return (
                <CustomButton
                  onPress={() => onPress(item.name)}
                  title={lang === "kg" ? item.titleKg : item.titleRus}
                  key={index}
                  img={item.img}
                  name={item.name}
                />
              );
            })}
            <Pressable onPress={() => navigation.navigate('about')}>
              <Text style={gStyle.about}>{lang === 'kg' ? 'Тиркеме жөнүндө' : 'О приложений'}</Text>
            </Pressable>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
