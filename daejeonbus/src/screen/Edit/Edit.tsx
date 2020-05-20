import React, { useState, useEffect } from 'react'
import { Container, Header, Left, Body, Right, Icon, List, Button, Title } from 'native-base';
import realm from '../../database/schema'
import { styles } from './styles'
import { Items } from './EditItem'

const Headers = ({ navigation }: any) => {
    return (
        <Header rounded >
            <Left>
                <Button iconRight light style={styles.headerBackButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back"></Icon>
                </Button>
            </Left>
            <Body>
                <Title>편집</Title>
            </Body>
            <Right></Right>
        </Header>
    )
}

export const EditScreen = ({ navigation }: any) => {
    const [items, setItems] = useState()
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const data: any = realm.objects('SaveLike')
            setItems(data)
        })
    }, [])

    const onDelete = (id: any) => {
        realm.write(() => {
            const likeBus = realm.objects('SaveLike').filtered('id = $0', id)[0]
            realm.delete(likeBus)
        })
        const data: any = realm.objects('SaveLike')
        const sortData = data.sorted('key')
        setItems(sortData)
    }

    return (
        <Container style={{ backgroundColor: "#e9e9e9" }}>
            <Headers navigation={navigation}></Headers>
            <List
                dataArray={items}
                renderItem={({ item }: any) => <Items item={item} onDelete={onDelete} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    )
}

