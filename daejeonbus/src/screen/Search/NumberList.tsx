import React from 'react'
import { Icon, Text, ListItem, Left, Body, Right, View } from 'native-base';
import _ from 'lodash'
import { SubTitle } from '../../component/SubTitle';
import { styles } from './styles'

export const NumberList = ({ navigation, item }: any) => {
    return (
        <ListItem noIndent
            onPress={() => {
                navigation.push('bus', { route_cd: item.route_cd, route_tp: item.route_tp })
            }}
            style={styles.listItemWrap}
        >
            <Left style={styles.listItemLeftWrap}>
                <View style={styles.listItemLeft} >
                    <SubTitle number={parseInt(item.route_tp)} />
                    <Text>{item.route_no}</Text>
                </View>
                <View style={styles.listItemLeft}>
                    <Text note>{item.start_station_nm}</Text>
                    <Icon name={'ios-repeat'} type={'Ionicons'} style={styles.listItemIcon}></Icon>
                    <Text note>{item.turn_station_nm}</Text>
                </View>
            </Left>
            <Body />
            <Right />
        </ListItem>
    )
}