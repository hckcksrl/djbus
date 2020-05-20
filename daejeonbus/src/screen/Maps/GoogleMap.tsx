import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { BusMaps } from './BusMaps';
import { StationMaps } from './StationMaps'

export const Maps = (props: any) => {
    const { navigation, route: { params: { bus_node_id, route_cd, name } } } = props
    if (route_cd) {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button iconRight light style={{ backgroundColor: 'transparent', paddingRight: 5 }} onPress={() => navigation.goBack()}>
                            <Icon name="md-close"></Icon>
                        </Button>
                    </Left>
                    <Body style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Title>
                            {name}
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <BusMaps {...props} />
            </Container>
        )
    }
    else if (bus_node_id) {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button iconRight light style={{ backgroundColor: 'transparent', paddingRight: 5 }} onPress={() => navigation.goBack()}>
                            <Icon name="md-close"></Icon>
                        </Button>
                    </Left>
                    <Body style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Title>
                            {name}
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <StationMaps {...props} />
            </Container>
        )
    }

    else return null
};

