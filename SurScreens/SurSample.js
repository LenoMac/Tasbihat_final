import { View, Text } from 'react-native'
import React from 'react'
import { gStyle } from '../Style/Style'

export default function SurSample({title, arabicText, rusText, meaningText}) {
  return (
    <View style={gStyle.surSample}>
        <Text style={gStyle.surTitle}>{title}</Text>
        <Text style={gStyle.surArabic}>{arabicText}</Text>
        <Text style={[gStyle.text, { color: '#F2BB4A', fontSize: 20 }]}>Окулушу</Text>
        <Text style={gStyle.surRus}>{rusText}</Text>
        <Text style={[gStyle.text, {color: '#F2BB4A', fontSize: 20}]}>Мааниси</Text>
        <Text style={gStyle.surRus}>{meaningText}</Text>
    </View>
  )
}