import React from 'react'
import { Button, Icon, View, Footer } from 'native-base'
import { styles } from './styles'
import { Items } from './BusListItem'
import { FlatList } from 'react-native'

const listFooter = () => {
    return (
        <>
            <View style={styles.listFooterView}>
                <Button bordered rounded
                    style={styles.scrollTop}
                    onPress={() => flatListRef.scrollToOffset({ animated: true, offset: 0 })}
                >
                    <Icon name={'ios-arrow-round-up'} type={'Ionicons'} style={styles.scrollTopIcon} />
                </Button>
            </View>
            <Footer />
        </>
    )
}

export const BusList = (props: any) => {
    const { navigation, stations, data, location } = props

    return (
        <FlatList
            ref={(ref) => { flatListRef = ref; }}
            data={stations}
            renderItem={({ item, index }: any) =>
                <Items item={item} navigation={navigation} data={data} last={stations.length} location={location} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={listFooter}
        />
    )
}

