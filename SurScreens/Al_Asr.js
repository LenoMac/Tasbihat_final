import { View, Text, ScrollView, } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";


const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). وَالْعَصْرِ
(2). إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
(3). إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Уаль ЪАСР.
(2). 'Иннал-'Инсаана лафии хуср.
(3). 'Иллал -лазиина 'аамануу уа ъамилус-соолихаати уа та-уаасоу бил- Хаққи уа та-уаасоу-бис-собр`;

const meaningText =  `(1). Асрга ант!
(2). Албетте, инсан коромжуда
(3). Бирок, ыйман келтиргендер, жакшы амалдарды жасагандар жана актык менен сабырдуулукка бири-бирин насаат кылгандар (коромжуда эмес)`



export default function Al_Asr() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СҮРӨЛӨР" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Аср"
              arabicText={arabicText}
              rusText={rusText}
              meaningText={meaningText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
