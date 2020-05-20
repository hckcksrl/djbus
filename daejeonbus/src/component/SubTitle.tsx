import React, { useState, useEffect } from 'react'
import { View, Text } from 'native-base'
import { Dimensions } from 'react-native'


export const SubTitle = ({ number }: any) => {

    if (number == 1 || number == 6) {
        return (
            <View style={{ backgroundColor: 'red', borderRadius: 2, marginRight: 10, justifyContent: 'center' }}>
                {number == 1 ? <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>급행</Text> :
                    <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>첨단</Text>}
            </View>
        )

    } else if (number == 2) {
        return (
            <View style={{ backgroundColor: 'blue', borderRadius: 2, marginRight: 10, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>간선</Text>
            </View>
        )

    } else if (number == 3 || number == 4 || number == 5) {
        return (
            <View style={{ backgroundColor: 'green', borderRadius: 2, marginRight: 10, justifyContent: 'center' }}>
                {
                    number == 3 ? <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>지선</Text>
                        : number == 4 ? <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>외각</Text>
                            : <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>마을</Text>
                }
            </View>
        )
    } else {
        return (
            <View style={{ backgroundColor: 'black', borderRadius: 2, marginRight: 10, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: Dimensions.get('screen').width / 30, padding: 3 }}>일반</Text>
            </View>
        )

    }
}