import React, { useState, useEffect } from 'react'
import { Container, Header, Button, Icon, Body, Left, Right, Text, View, Spinner, H3, Card, CardItem, Title, Footer } from 'native-base'
import { Alert, FlatList } from 'react-native'
import Axios from 'axios'
import { styles } from './styles'
import { Items } from './StationItem'
import realm from "../../database/schema"


export const Station = ({ navigation, route }: any) => {
    const [busNumber, setBusNumber] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [star, setStar] = useState<boolean>(false)
    const station: any = realm.objects('Station').filtered('bus_node_id = $0', route.params.bus_node_id)[0]

    useEffect(() => {
        const data = realm.objects('SaveLike').filtered('id = $0', route.params.bus_node_id)
        if (data.length != 0) {
            setStar(true)
        }
        Axios.get(`https://djbus.kr/bustime/${route.params.bus_node_id}`)
            .then((response) => {
                setBusNumber(response.data)
            })
            .then(() => {
                setRefresh(false)
            })
            .catch(error => {
                Alert.alert(
                    error.message,
                    error.message,
                    [
                        { text: 'OK', onPress: () => navigation.goBack() },
                    ],
                    { cancelable: false })
                setRefresh(false)
            })
    }, []);

    const refreshData = () => {
        setRefresh(true)
        Axios.get(`https://djbus.kr/bustime/${route.params.bus_node_id}`)
            .then((response) => {
                setBusNumber(response.data)
                setRefresh(false)
            })
            .catch(error => {
                if (error.message == 'Network Error') {
                    Alert.alert(
                        'asd',
                        'Network Error',
                        [
                            { text: 'OK', onPress: () => navigation.goBack() },
                        ],

                        { cancelable: false })
                } else {
                }
                setRefresh(false)
            })
    }

    const starData = (value: any) => {
        if (star) {
            setStar(false)
            realm.write(() => {
                const likeStation = realm.objects('SaveLike').filtered('id = $0', route.params.bus_node_id)[0]
                realm.delete(likeStation)
            })
        } else {
            setStar(true)
            realm.write(() => {
                const like = realm.objects('SaveLike')
                if (like.length) {
                    const like_list: any = like.sorted('key', true)[0]
                    realm.create('SaveLike', { "key": like_list.key + 1, "id": value.bus_node_id, "type": "station" })

                } else {
                    realm.create('SaveLike', { "key": 1, "id": value.bus_node_id, "type": "station" })
                }
            })
        }
    }

    return (
        <Container>
            <Header style={styles.headerWrap}>
                <Left>
                    <Button iconRight light style={styles.headerButtonWrap} onPress={() => navigation.pop()}>
                        <Icon name="arrow-back" style={styles.fontColor}></Icon>
                    </Button>
                </Left>
                <Body style={styles.headerBody}>
                    <Title style={styles.fontColor}>
                        {station.busstop_nm}
                    </Title>
                </Body>
                <Right>
                    <Icon
                        name={'home'}
                        type={'SimpleLineIcons'}
                        style={styles.headerHomeIcon}
                        onPress={() => navigation.popToTop()} />
                </Right>
            </Header>
            <View padder>
                <Card style={styles.containerCardWrap} >
                    <CardItem>
                        <Text note>{station.bus_stop_id}</Text>
                    </CardItem>
                    <CardItem>
                        <H3>{station.next_station}방면</H3>
                    </CardItem>
                    <CardItem>
                        <View style={styles.containerCardItemSecondInner}>
                            <Icon name={"map-outline"} type={"MaterialCommunityIcons"}
                                onPress={() => { navigation.push('maps', { bus_node_id: station.bus_node_id, name: station.busstop_nm }) }} />
                        </View>
                        <View style={styles.containerCardItemSecondInner} >
                            <Icon
                                name={star ? 'star' : 'star-outline'}
                                type={'MaterialCommunityIcons'}
                                style={[star ? styles.iconYellow : null]}
                                onPress={() => starData(station)} />
                        </View>
                    </CardItem>
                </Card>
            </View>
            {
                busNumber.length == 0 ? null
                    : <FlatList
                        ref={(ref) => { footer = ref; }}
                        data={busNumber}
                        renderItem={({ item }: any) => <Items item={item} navigation={navigation} />}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={listFooter}
                    />
            }
            <Button style={styles.refreshButton} onPress={() => refreshData()}>
                <View style={[{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', }]}>
                    <Icon name={'refresh'} type={'SimpleLineIcons'} style={styles.refreshIcon} />
                </View>
            </Button>
            {refresh ? <Spinner style={styles.refreshSpinner} /> : null}
        </Container >
    )
}

const listFooter = () => {
    return (
        <>
            <Footer style={{ backgroundColor: 'transparent' }} />
        </>
    )
}
