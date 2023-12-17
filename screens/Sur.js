import React from 'react'
import { View, Text, Image, TouchableNativeFeedback, ScrollView, TouchableOpacity } from 'react-native'
import Right from '../img/Right.png'
import { gStyle } from '../Style/Style'
import { useNavigation } from '@react-navigation/native'
import Header from './Header'

const ListOfSur = [
    { title: 'Сура аль-Фатиха', name: 'al-Fatiha', number: 1 },
    { title: 'Сура аль-Аср', name: 'al-Asr', number: 2 },
    { title: 'Сура аль-Хумаза', name: 'al-Humaza', number: 3 },
    { title: 'Сура аль-Филь', name: 'al-Fil', number: 4 },
    { title: 'Сура Курайш', name: 'Kuraysh', number: 5 },
    { title: 'Сура Аль-Маун', name: 'al-Maun', number: 6 },
    { title: 'Сура аль-Кавсар', name: 'al-Kavsar', number: 7 },
    { title: 'Сура аль-Кафирун', name: 'al-Kafirun', number: 8 },
    { title: 'Сура ан-Наср', name: 'an-Nasr', number: 9 },
    { title: 'Сура аль-Масад', name: 'al-Masad', number: 10 },
    { title: 'Сура аль-Ихлас', name: 'al-Ihlas', number: 11 },
    { title: 'Сура аль-Фалак', name: 'al-Falak', number: 12 },
    { title: 'Сура ан-Нас', name: 'an-Nas', number: 13 }
]

const CustomButton = ({ title, name, number, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(name)}>
            <View style={gStyle.sur_btn}>
                <View style={gStyle.sur_btn_row}>
                    <Text style={gStyle.text1}>{number + '.'}</Text>
                    <Text style={gStyle.text2}>{title}</Text>
                </View>
                <Image source={Right} />
            </View >
        </TouchableOpacity>
    )
}


export const Sur = () => {

    const navigation = useNavigation()
    const onPress = (name) => {
        navigation.navigate(name)
    }

    return (
        <>
            <View style={gStyle.header}>
                <Header title='СУРЫ' />
            </View>
            <ScrollView style={gStyle.sur_cont}>
                {/* <View style={gStyle.container}> */}
                <View style={gStyle.sur_cont_row}>

                    {
                        ListOfSur.map((item, index) => {
                            return (
                                <CustomButton
                                    title={item.title}
                                    number={item.number}
                                    name={item.name}
                                    key={index}
                                    onPress={onPress}
                                />
                            )
                        })
                    }
                </View>
                {/* </View> */}
            </ScrollView >
        </>
    )
}
