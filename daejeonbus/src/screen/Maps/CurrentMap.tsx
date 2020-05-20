import React, { useState, useEffect } from 'react'
import { View, Text, Container, Header, Left, Button, Icon, Body, Right, Title } from 'native-base'
import realm from "../../database/schema"
import Geolocation from "react-native-geolocation-service";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import haversine from 'haversine-distance'

interface ILocation {
    latitude: number;
    longitude: number;
}

export const CurrentMap = (props: any) => {
    const { navigation, } = props
    const [location, setLocation] = useState<ILocation | undefined>(undefined)
    let delta: ILocation = { latitude: 0.005, longitude: 0.001 }
    const [nearStation, setNearStation] = useState<any>([])

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    longitude,
                });
                Station(latitude, longitude)
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        )
    }, [])

    const Station = (lati: any, long: any) => {
        const near = []
        const stations: any = realm.objects('Station')
        for (let station of stations) {
            const distance = haversine([lati, long], [station.gps_lati, station.gps_long])
            if (Math.abs(distance) < 500) {
                near.push(station)
            }
        }
        setNearStation(near)
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button iconRight light style={{ backgroundColor: 'transparent', paddingRight: 5 }} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back"></Icon>
                    </Button>
                </Left>
                <Body ><Title>내 주변 정류장</Title></Body>
                <Right />
            </Header>
            <MapView
                style={{ flex: 1 }}
                initialRegion={location ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: delta.latitude,
                    longitudeDelta: delta.longitude,
                } : undefined}
                provider={PROVIDER_GOOGLE}
                loadingEnabled={true}
                showsUserLocation={true}
                rotateEnabled={false}
            >
                {nearStation.length > 0 ? nearStation.map((station: any, index: any) =>
                    <Marker
                        coordinate={{
                            latitude: station.gps_lati,
                            longitude: station.gps_long
                        }}
                        key={index}
                    >
                        <Callout
                            onPress={() => navigation.push('station', { bus_node_id: station.bus_node_id })}
                            style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <View>
                                <Text style={{ marginRight: 20 }}>{station.busstop_nm}</Text>
                                <Text note>{station.bus_stop_id}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ) : null
                }

            </MapView>
        </Container>

    )
}


