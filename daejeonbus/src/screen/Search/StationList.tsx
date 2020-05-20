import React from 'react'
import { Text, ListItem, Left, Body, Right, View } from 'native-base';
import { styles } from './styles'

export const StationList = ({ navigation, item }: any) => {
    return (
        <ListItem noIndent
            onPress={() => {
                navigation.push('station', { bus_node_id: item.bus_node_id })
            }}
            style={styles.listItemWrap}
        >
            <Left style={styles.listStationLeft}>
                <View style={styles.listStationLeftFirst}>
                    <Text>{item.busstop_nm}</Text>
                </View>
                <View style={styles.listItemLeft}>
                    <Text note>{item.bus_stop_id}</Text>
                    <Text note style={{ marginHorizontal: 7 }}>ㅣ</Text>
                    <Text note>{item.next_station} 방향</Text>
                </View>
            </Left>
            <Body />
            <Right />
        </ListItem>
    )
}
