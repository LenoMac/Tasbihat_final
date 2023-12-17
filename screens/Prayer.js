import React from 'react'
import { Text, View, ScrollView, Pressable } from 'react-native'
import { gStyle } from '../Style/Style'
import Header from './Header'
export const Prayer = () => {
    return (
        <View>
            <View style={gStyle.header}>
                <Header title='ТАСБИХАТ' />
            </View>
            <ScrollView>
                <View style={gStyle.container}>
                    <Text>Text</Text>
                </View>
            </ScrollView>
        </View>
    )
}
