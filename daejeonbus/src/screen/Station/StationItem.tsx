import React, { useState, useEffect } from 'react'
import { Body, Left, Text, ListItem, View, H3 } from 'native-base'
import { SubTitle } from '../../component/SubTitle'
import { TimeTable } from '../../component/TimeTable'
import realm from "../../database/schema"

export const Items = ({ navigation, item }: any) => {
    const [station, setStation] = useState<any>()
    useEffect(() => {
        if (item.last_stop_id) {
            setStation(realm.objects('Station').filtered('bus_stop_id = $0', item.last_stop_id)[0])
        } else {
            setStation({})
        }
    }, [])
    return (
        <ListItem noIndent
            onPress={() => {
                navigation.push('bus', { route_cd: item.route_cd, route_tp: item.route_tp })
            }}
            style={{ minHeight: 80, paddingRight: 20 }}
        >
            <Left style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <SubTitle number={parseInt(item.route_tp)}></SubTitle>
                    <H3>
                        {item.route_no}
                    </H3>
                </View>
                <View>
                    <Text note>{item.destination} 방향</Text>
                </View>
            </Left>
            <Body style={{ alignItems: 'flex-end', justifyContent: 'space-around' }}>
                <TimeTable data={item} station={station ? station.busstop_nm : null}></TimeTable>
            </Body>
        </ListItem >
    )
}
