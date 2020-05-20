import React, { useState } from 'react'
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { TabComponent } from '../../component/Tabs';
import realm from '../../database/schema';
import { styles } from './styles'
import { StationList } from './StationList'
import { NumberList } from './NumberList'

const Headers = ({ goBack, setValue, value }: any) => {
    return (
        <Header searchBar rounded >
            <Button iconRight light style={styles.headerSearch} onPress={() => goBack()}>
                <Icon name="arrow-back"></Icon>
            </Button>
            <Item >
                <Icon name="ios-search" />
                <Input placeholder="버스, 정류장 입력" value={value} onChangeText={(value) => setValue(value)} />
            </Item>
        </Header>
    )
}


export const Search = (props: any) => {
    const [value, setValue] = useState<string>('')
    const { navigation } = props
    let bus, station

    if (value) {
        bus = realm.objects('Bus').filtered(`route_no BEGINSWITH $0 `, value)
        station = realm.objects('Station').filtered(`busstop_nm BEGINSWITH $0 LIMIT(50)`, value)
    } else {
        bus = []
        station = []
    }

    return (
        <Container>
            <Headers goBack={navigation.goBack} setValue={setValue} value={value} />
            <TabComponent
                firstHeader={"버스"}
                firstItem={bus}
                secondHeader={"버스정류장"}
                secondItem={station}
                FirstComponent={NumberList}
                SecondComponent={StationList}
                navigation={navigation}
            ></TabComponent>
        </Container >
    )
}


