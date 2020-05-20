import React, { useState, useEffect, useRef } from 'react'
import { View, Text } from 'native-base'
import realm from "../../database/schema"
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

interface ILocation {
    latitude: number;
    longitude: number;
}

export const BusMaps = (props: any) => {
    const MapRef = useRef<any>(React.createRef())

    const { navigation, route: { params: { route_cd, name } } } = props
    const data: any = realm.objects('AllStation').filtered('route_cd = $0 SORT(busstop_seq ASC)', route_cd)
    const location: ILocation | undefined = {
        latitude: data[0].gps_lati,
        longitude: data[0].gps_long
    }
    let delta: ILocation = { latitude: 0.005, longitude: 0.001 }
    let [mapId, setMapId] = useState<any>([])
    useEffect(() => {
        const t = data.map((item: object, index: number) => {
            return index.toString()
        })
        setMapId(t)
    }, [])

    return (
        <MapView
            style={{ flex: 1 }}
            ref={(ref) => { MapRef.current = ref; }}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: delta.latitude,
                longitudeDelta: delta.longitude,
            }}
            provider={PROVIDER_GOOGLE}
            loadingEnabled={true}
            onMapReady={() => {
                MapRef.current.fitToSuppliedMarkers(mapId, {
                    edgePadding:
                    {
                        top: 50,
                        right: 50,
                        bottom: 50,
                        left: 50
                    }
                })
            }}
            rotateEnabled={false}
        >
            {
                data ? data.map((station: any, index: number) =>
                    <Marker
                        coordinate={{
                            latitude: station.gps_lati,
                            longitude: station.gps_long
                        }}
                        key={index}
                        identifier={index.toString()}
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
    )
}


