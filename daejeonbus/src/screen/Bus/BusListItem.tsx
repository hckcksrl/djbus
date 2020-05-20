import React, { useState, useEffect } from 'react'
import { Icon, Body, Left, Right, Text, ListItem, View } from 'native-base'
import { styles, Color } from './styles'

export const Items = (props: any) => {
    const [locate, setLocate] = useState(false)
    const [number, setNumber] = useState('')
    const { item, navigation, data, last, location } = props

    useEffect(() => {
        setLocate(false)
        if (location) {
            for (let i of location) {
                if (i.bus_node_id == item.bus_node_id) {
                    setLocate(true)
                    setNumber(i.plate_no.slice(-4))
                }
            }
        }
    }, [location])

    return (
        <ListItem noIndent onPress={() => {
            navigation.push('station', { bus_node_id: item.bus_node_id })
        }} style={{ paddingTop: 0, paddingBottom: 0, minHeight: 70 }}>
            <Left style={styles.listLeftWrap}>
                <View style={styles.listLeftView}>
                    <Text style={styles.fontNormal}>{item.busstop_nm}</Text>
                    <Text note>{item.bus_stop_id}</Text>
                </View>
            </Left>
            <Body style={styles.listBody}>
                {
                    locate ?
                        <View style={styles.locateContainer}>
                            <View style={styles.locateInner}>
                                <Text note>{number}</Text>
                            </View>
                        </View> : null
                }
                <View style={styles.busLineWrap}>
                    {
                        item.busstop_tp == 1 ? <View style={styles.busLine} /> :
                            <View style={styles.busLineView} />}
                    {
                        locate ? <Icon name={'md-bus'} type={'Ionicons'} style={[styles.listIcon, { color: Color(data.route_tp)[0] }]} />
                            : item.busstop_tp == 2 ?
                                <Icon name={'rotate-right'} type={'FontAwesome'} style={[styles.listIcon, { fontSize: 20, transform: [{ rotate: '90deg' }] }]} />
                                :
                                <Icon name={'ios-arrow-dropdown'} type={'Ionicons'} style={[styles.listIcon, { color: '#c0c0c0' }]} />
                    }
                    {
                        item.busstop_seq == last ? <View style={styles.busLine} /> :
                            <View style={styles.busLineView} />
                    }
                </View>

            </Body>
            <Right />
        </ListItem>
    )
}
