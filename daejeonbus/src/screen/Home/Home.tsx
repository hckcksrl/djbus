import React, { useState, useEffect } from 'react'
import {
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { Container, Header, Item, Text, View, Button, Icon } from 'native-base';
import realm from '../../database/schema'
import { styles } from "./styles";
import { Items } from './HomeItem'

const Headers = ({ navigation }: any) => {
    return (
        <Header searchBar >
            <Item>
                <TouchableOpacity
                    style={styles.headerWrap}
                    onPress={() => navigation.push('search')}
                >
                    <Text style={styles.headerTitle}>버스, 정류장 입력</Text>
                </TouchableOpacity>
            </Item>
            <TouchableOpacity
                style={{ justifyContent: 'center', marginLeft: 10 }}
                onPress={() => navigation.push('edit')}
            >
                <Text>편집</Text>
            </TouchableOpacity>
        </Header>
    )
}

export const HomeScreen = (props: any) => {
    const { navigation } = props
    const [items, setItems] = useState<any>()
    useEffect(() => {
        navigation.addListener('focus', () => {
            const data = realm.objects('SaveLike')
            const sortData = data.sorted('key')
            setItems(sortData)
        })
    }, [])

    return (
        <Container style={{ backgroundColor: "#e9e9e9" }}>
            <Headers navigation={navigation}></Headers>
            <FlatList
                data={items}
                renderItem={({ item }: any) => <Items item={item} navigation={navigation} />}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() =>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button onPress={() => navigation.push('current')} style={styles.currentButton} rounded iconLeft>
                            <Icon name={"map-marker"} type={'FontAwesome'} style={{ color: "black" }} />
                            <Text style={{ color: "black" }}>주변 정류장</Text>
                        </Button>
                    </View>
                }
            />

            <Button style={styles.refreshButton} onPress={() => navigation.navigate('setting')}>
                <View style={[styles.refreshButtonView]}>
                    <Icon name={'info'} type={'FontAwesome'} style={styles.refreshIcon} />
                </View>
            </Button>
        </Container>
    )
}
