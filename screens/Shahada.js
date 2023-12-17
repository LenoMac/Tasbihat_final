import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { gStyle } from '../Style/Style'
import Header from './Header'
// Импорт изображении
import ShahadaLogo from '../img/Shaha_logo.png'
export const Shahada = ({ navigation }) => {
    return (
        <View style={gStyle.main}>
            <View style={gStyle.header}>
                <Header title='ШАХАДА' />
            </View>
            <ScrollView>
                <View style={gStyle.container}>
                    <View style={gStyle.container_row}>
                        <View>
                            <Image style={{ width: 200, height: 245 }} source={ShahadaLogo} />
                        </View>
                        <Text style={[gStyle.textArabic, gStyle.text]}>أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَ أَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَ رَسُولُهُ</Text>
                        <Text style={[gStyle.textRus, gStyle.text]}>Ашхаду алля иляха илляллах. Ва ашхаду анна Мухаммадан ‘абдуху ва расулюх.</Text>
                        <Text style={[gStyle.textRus, gStyle.text]}>Аллахтан башка сыйынууга татыктуу зат жок жана Мухаммад анын кулу жана элчиси экендигине күбөлүк берем.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
