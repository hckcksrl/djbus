import React, { useState } from 'react'
import { View, Text, Header, Left, Button, Body, Right, Title, Icon, Container, List, ListItem, Spinner } from 'native-base'
import realm from "../../database/schema"
import { StyleSheet, Dimensions, Alert } from 'react-native'
import Axios from 'axios'


export const Setting = (props: any) => {
    const { navigation, version } = props
    const [refresh, setRefresh] = useState(false)

    const Refresh = () => {
        Alert.alert(
            'DB 업데이트',
            'DB 업데이트',
            [
                { text: 'OK', onPress: () => Update() },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false })
    }

    const Update = () => {
        setRefresh(true)
        Delete().then(() => {
            Axios.get('https://djbus.kr/bus').then((response) => {
                realm.write(() => {
                    for (let item of response.data) {
                        realm.create('Bus', item)
                    }
                })
            })
        }).then(() => {
            Axios.get('https://djbus.kr/station').then((response) => {
                realm.write(() => {
                    for (let item of response.data) {
                        realm.create('Station', item)
                    }
                })
            })
        }).then(() => {
            Axios.get('https://djbus.kr/allstation').then((response) => {
                realm.write(() => {
                    for (let item of response.data) {
                        realm.create('AllStation', item)
                    }
                })
            })
        }).then(() => {
            setTimeout(() => {
                setRefresh(false)
            }, 1000)
        })
    }

    const Delete = async () => {
        await realm.write(() => {
            realm.delete(realm.objects('Station'))
            realm.delete(realm.objects('Bus'))
            realm.delete(realm.objects('AllStation'))
        })
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button iconRight light style={{ backgroundColor: 'transparent', paddingRight: 5 }} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" ></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title>
                        정보
                    </Title>
                </Body>
                <Right />
            </Header>
            <List>
                <ListItem itemDivider>
                    <Text>정보제공</Text>
                </ListItem>
                <ListItem>
                    <View>
                        <Text style={{ marginBottom: 10 }}>대전교통정보센터</Text>
                        <Text style={{ color: 'red' }}>http://traffic.daejeon.go.kr/</Text>
                    </View>
                </ListItem>
                <ListItem itemDivider>
                    <Text>DB Version</Text>
                </ListItem>
                <ListItem>
                    <Text style={{ color: 'red' }}>{version}</Text>
                    <Text> version</Text>
                </ListItem>
                <ListItem onPress={Refresh}>
                    <Left><Text>DB Update</Text></Left>
                    <Body />
                    <Right>
                        <Icon name={"arrow-forward"}></Icon>
                    </Right>
                </ListItem>
            </List>
            {refresh ? <Spinner style={styles.refreshSpinner} /> : null}
        </Container>
    )
}

const styles = StyleSheet.create({
    refreshSpinner: {
        position: 'absolute',
        left: Dimensions.get('screen').width / 2,
        top: Dimensions.get('screen').height / 2
    },
})