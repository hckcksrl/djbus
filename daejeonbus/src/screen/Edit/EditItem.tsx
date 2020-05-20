import React from 'react'
import { Text, ListItem, Left, Body, Right, Icon, View, Title } from 'native-base';
import { SubTitle } from '../../component/SubTitle';
import realm from '../../database/schema'
import { styles } from './styles'

export const Items = ({ item, onDelete }: any) => {
    if (item.type == 'station') {
        const data: any = realm.objects('Station').filtered('bus_node_id = $0', item.id)[0]
        return (
            <ListItem noIndent
                style={styles.containerItemWrap}
            >
                <Left style={styles.itemLeft}>
                    <View style={styles.itemLeftInnerFirst}>
                        <Text>{data.busstop_nm}</Text>
                    </View>
                    <View style={styles.ItemLeftInnerSecond}>
                        <Text note>{data.next_station} 방향</Text>
                    </View>
                </Left>
                <Body />
                <Right style={{ alignItems: 'center' }}>
                    <Icon name={'trash-o'} type={'FontAwesome'} onPress={() => onDelete(item.id)}></Icon>
                </Right>
            </ListItem>
        )

    }
    const data: any = realm.objects('Bus').filtered('route_cd = $0', item.id)[0]
    return (
        <ListItem noIndent
            style={styles.containerItemWrap}
        >
            <Left style={styles.busItemWrap}>
                <View style={styles.busItemInner} >
                    <SubTitle number={parseInt(data.route_tp)} />
                    <Title>{data.route_no}</Title>
                </View>
            </Left>
            <Body />
            <Right style={{ alignItems: 'center' }}>
                <Icon name={'trash-o'} type={"FontAwesome"} onPress={() => onDelete(item.id)}></Icon>
            </Right>
        </ListItem>
    )
}