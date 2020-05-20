import React from 'react'
import { Text, ListItem, Left, Body, Right, View, Title } from 'native-base';
import { SubTitle } from '../../component/SubTitle';
import realm from '../../database/schema'
import { styles } from './styles'

export const Items = ({ item, navigation }: any) => {
    if (item.type == 'station') {
        const data: any = realm.objects('Station').filtered('bus_node_id = $0', item.id)[0]
        return (
            <ListItem noIndent
                onPress={() => {
                    navigation.push('station', { bus_node_id: data.bus_node_id })
                }}
                style={styles.containerItemWrap}
            >
                <Left style={styles.itemLeft}>
                    <View style={styles.itemLeftInnerFirst}>
                        <Text>{data.busstop_nm}</Text>
                    </View>
                    <View style={styles.ItemLeftInnerSecond}>
                        <Text note>{data.next_station} 방향</Text>
                    </View>
                </Left>
                <Body />
                <Right />
            </ListItem>
        )

    }
    const data: any = realm.objects('Bus').filtered('route_cd = $0', item.id)[0]
    return (
        <ListItem noIndent
            onPress={() => {
                navigation.push('bus', { route_cd: data.route_cd, route_tp: data.route_tp })
            }}
            style={styles.containerItemWrap}
        >
            <Left style={styles.busItemWrap}>
                <View style={styles.busItemInner} >
                    <SubTitle number={parseInt(data.route_tp)} />
                    <Title>{data.route_no}</Title>
                </View>
            </Left>
            <Body />
            <Right />
        </ListItem>
    )
}