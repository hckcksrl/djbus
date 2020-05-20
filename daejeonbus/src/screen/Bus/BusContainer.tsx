import React, { useState, useEffect } from 'react'
import { Container, Header, Button, Icon, Body, Left, Right, Title, Spinner, View } from 'native-base'
import realm from '../../database/schema'
import { BusList } from './BusList'
import { styles, Color } from './styles'
import { BusCenter } from './BusCenter'
import { Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Axios from 'axios'

export const Bus = (props: any) => {
    const { navigation, route: { params: { route_cd, route_tp } } } = props
    const [stations, setStations] = useState()
    const [data, setData] = useState()
    const [refresh, setRefresh] = useState(true)
    const [location, setLocation] = useState([])

    useEffect(() => {
        Axios(`https://djbus.kr/location/${route_cd}`)
            .then(response => {
                setLocation(response.data)
            }).catch(error => { console.log(error) })
        const result2: any = realm.objects('Bus').filtered('route_cd = $0', route_cd)[0]
        setData(result2)
    }, [])

    useEffect(() => {
        const result: any = realm.objects('AllStation').filtered('route_cd = $0 SORT(busstop_seq ASC)', route_cd)
        const unsubscribe = navigation.addListener(
            'transitionEnd',
            () => {
                setRefresh(false)
                setStations(result)
            }
        );
        return unsubscribe
    }, [navigation])

    const onRefresh = (route_cd: any) => {
        setRefresh(true)
        Axios(`https://djbus.kr/location/${route_cd}`)
            .then(response => {
                setLocation(response.data)
                setRefresh(false)
            }).catch(error => {
                console.log(error)
                setRefresh(false)
            })
    }


    return (
        <Container style={{ backgroundColor: "#f9f9f9" }} >
            {/* <View style={{ height: getStatusBarHeight(), backgroundColor: Color(parseInt(route_tp))[0] }}></View> */}
            <Header style={{ backgroundColor: Color(parseInt(route_tp))[0] }}  >
                <Left>
                    <Button iconRight light style={styles.headerButtonWrap} onPress={() => navigation.pop()}>
                        <Icon name="arrow-back" style={styles.fontColor}></Icon>
                    </Button>
                </Left>
                <Body style={styles.headerBodyWrap}>
                    <Title style={styles.fontColor}>
                        {Color(parseInt(route_tp))[1]}
                    </Title>
                </Body>
                <Right>
                    <Icon name={'home'} type={'SimpleLineIcons'} style={styles.headerHomeIcon} onPress={() => navigation.popToTop()}></Icon>
                </Right>
            </Header>
            {data ?
                <>
                    <BusCenter {...props} data={data} />
                    {
                        stations ?
                            <>
                                <BusList {...props} data={data} stations={stations} location={location} />
                                <Button style={styles.refreshButton} onPress={() => { onRefresh(route_cd) }}>
                                    <View style={[styles.refreshButtonView]}>
                                        <Icon name={'refresh'} type={'SimpleLineIcons'} style={styles.refreshIcon} />
                                    </View>
                                </Button>
                            </> : null
                    }
                </> : null
            }
            {
                refresh ? <Spinner style={styles.refreshSpinner} /> : null
            }
        </Container >
    )
}
