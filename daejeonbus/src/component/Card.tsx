import React from 'react'
import { View, Text, Card, CardItem } from 'native-base'

export const CardForm = ({ children, type }: any) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text>{type}</Text>
            <Card>
                <CardItem>
                    {children}
                </CardItem>
            </Card>
        </View >
    )
}