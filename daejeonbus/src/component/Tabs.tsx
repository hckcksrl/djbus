import React from 'react'
import { Tabs, Tab, TabHeading, Text, List } from 'native-base'

export const TabComponent = ({ firstHeader, firstItem, FirstComponent, secondHeader, secondItem, SecondComponent, navigation }: any) => {

    return (
        <Tabs scrollWithoutAnimation locked={true}>
            <Tab heading={
                <TabHeading>
                    <Text>{firstHeader}</Text>
                </TabHeading>
            }>
                <List
                    dataArray={firstItem}
                    renderItem={({ item }: any) => <FirstComponent item={item} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </Tab>
            <Tab heading={
                <TabHeading>
                    <Text>{secondHeader}</Text>
                </TabHeading>
            }>
                <List
                    dataArray={secondItem}
                    renderItem={({ item }: any) => <SecondComponent item={item} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </Tab>
        </Tabs>
    )
}