import React, { useState, useEffect } from 'react'
import { Container, Header, Button, Icon, Body, Left, Right, Title, Content, Text } from 'native-base'
import { Table } from '../../component/Table'
import { CardForm } from '../../component/Card'
import { SubTitle } from '../../component/SubTitle'
import { useNavigation, useRoute } from '@react-navigation/native'
import realm from '../../database/schema'
import { ActivityIndicator, StyleSheet } from 'react-native'

export const BusInfo = (props: any) => {
    const { navigation, route: { params: { data } } } = props

    if (data == undefined) {
        return null
    } else {
        return (
            <Container>
                <Header rounded >
                    <Left>
                        <Button iconRight light style={styles.headerBackButton} onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back"></Icon>
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <SubTitle number={parseInt(data.route_tp)}></SubTitle>
                        <Title>{data.route_no}</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content scrollEnabled={false} contentContainerStyle={{ padding: 10 }}>
                    <CardForm type="운행구간">
                        <Body style={styles.contentBody}>
                            <Text>{data.start_station_nm}</Text>
                            <Icon name={'ios-repeat'} type={"Ionicons"} style={styles.contentBodyIcon}></Icon>
                            <Text>{data.turn_station_nm}</Text>
                        </Body>
                    </CardForm>
                    <CardForm type={'운행시간'}>
                        <Table data={data} />
                    </CardForm>
                    <CardForm type={'배차간격'}>
                        <Body>
                            <Text>평일 {data.allo_interval}분</Text>
                            <Text style={{ marginVertical: 10 }}>토요일 {data.allo_interval_sat}분</Text>
                            <Text>일요일 {data.allo_interval_sun}분</Text>
                        </Body>
                    </CardForm>
                </Content >
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    headerBackButton: { backgroundColor: 'transparent', paddingRight: 5 },
    headerBody: { flexDirection: 'row', justifyContent: 'center' },
    contentBody: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
    contentBodyIcon: { fontSize: 20, margin: 10 }
})