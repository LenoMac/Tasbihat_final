import React from 'react'
import { Text, Image, View, Button, StatusBar, ScrollView, SafeAreaView, Platform } from 'react-native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
// Импорт Лого и изображении
import Logo from '../img/Logo.png'
import Shahada from '../img/Shahada.png'
import Tasbih from '../img/Tasbih.png'
import Sur from '../img/Sur.png'
import Dua from '../img/Dua.png'
import Javshan from '../img/Javshan.png'
import Tafrij from '../img/Tafrijia.png'
import { CustomButton } from './CustomButton'
// Импорт стилей
import { gStyle } from '../Style/Style'

const menuItems = [
    { title: 'Шахада', img: Shahada, name: 'Shahada' },
    { title: 'Тасбихат', img: Tasbih, name: 'Tasbihat' },
    { title: 'Сүрөлөр', img: Sur, name: 'Sur' },
    { title: 'Молитвы', img: Dua, name: 'Prayer' },
    { title: 'Жавшан', img: Javshan, name: 'Javshan' },
    { title: 'Тафрижия', img: Tafrij, name: 'Tafrijia' }
];


export const Menu = () => {
    const navigation = useNavigation()
    const onPress = (name) => {
        navigation.navigate(name)
    }
    return (
        <SafeAreaView backgroundColor='#320548'>
            <ScrollView style={{ width: '100%', height: '100%' }}>
                {/* <View style={gStyle.menu_container}> */}
                <View style={gStyle.menu}>
                    <View style={gStyle.logoAndText}>
                        <Image style={{ width: 120, height: 120 }} source={Logo} />
                        <Text style={gStyle.title}>Addua</Text>
                    </View>
                    <View style={gStyle.section}>
                        {menuItems.map((item, index) => {
                            return (
                                <CustomButton
                                    onPress={() => onPress(item.name)}
                                    title={item.title}
                                    key={index}
                                    img={item.img}
                                    name={item.name}
                                />
                            )
                        })}
                    </View>
                </View>
                {/* </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}
