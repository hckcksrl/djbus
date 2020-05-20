import React, { useState, useEffect, useContext } from 'react'
import { Icon, Text, View, Card, CardItem, H3 } from 'native-base'
import { styles } from './styles'
import realm from '../../database/schema'

export const BusCenter = (props: any) => {
    const [star, setStar] = useState(false)
    const { navigation, route: { params: { route_cd } }, data } = props

    useEffect(() => {
        const result = realm.objects('SaveLike').filtered('id = $0', route_cd)
        if (result[0]) {
            setStar(true)
        }
    }, [])

    const starData = () => {
        if (star) {
            setStar(false)
            realm.write(() => {
                const likeBus = realm.objects('SaveLike').filtered('id = $0', route_cd)[0]
                realm.delete(likeBus)
            })
        } else {
            setStar(true)
            realm.write(() => {
                const like = realm.objects('SaveLike')
                if (like.length) {
                    const like_list: any = like.sorted('key', true)[0]
                    realm.create('SaveLike', { "key": like_list.key + 1, "id": route_cd, "type": "bus" })

                } else {
                    realm.create('SaveLike', { "key": 1, "id": route_cd, "type": "bus" })
                }
            })
        }
    }

    return (
        <View padder>
            <Card style={styles.containerCardWrap}>
                <CardItem style={styles.containerCardItemFirst}>
                    <View style={styles.containerCardItemInner}>
                        <H3 style={styles.fontBold}>{data.route_no}</H3>
                    </View>
                    <View style={styles.containerCardItemInnerSecond}>
                        <Text note>{data.start_station_nm}</Text>
                        <Icon name={'ios-repeat'} type={'Ionicons'} style={styles.containerExchangeIcon}></Icon>
                        <Text note>{data.turn_station_nm}</Text>
                    </View>
                </CardItem>
                <CardItem>
                    <View style={styles.containerCardItemSecondInner}>
                        <Icon name={"map-outline"} type={"MaterialCommunityIcons"}
                            onPress={() => { navigation.push('maps', { route_cd: data.route_cd, name: data.route_no }) }} />
                    </View>
                    <View style={styles.containerCardItemSecondInner}>
                        <Icon name={'information-outline'} type={'MaterialCommunityIcons'}
                            onPress={() => {
                                navigation.push('businfo', { data: data })
                            }} />
                    </View>
                    <View style={styles.containerCardItemSecondInner} >
                        <Icon
                            name={star ? 'star' : 'star-outline'}
                            type={'MaterialCommunityIcons'}
                            style={[star ? styles.iconYellow : null]}
                            onPress={() => starData()} />
                    </View>
                </CardItem>
            </Card>
        </View>
    )
}