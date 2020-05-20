import React from 'react'
import { View, Text } from 'native-base'
import realm from "../../database/schema"
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

interface ILocation {
    latitude: number;
    longitude: number;
}


export const StationMaps = (props: any) => {
    const { navigation, route: { params: { bus_node_id } } } = props
    const station: any = realm.objects('Station').filtered('bus_node_id = $0', bus_node_id)[0]
    const location: ILocation | undefined = {
        latitude: station.gps_lati,
        longitude: station.gps_long
    }
    let delta: ILocation = { latitude: 0.005, longitude: 0.001 }

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: delta.latitude,
                longitudeDelta: delta.longitude,
            }}
            provider={PROVIDER_GOOGLE}
            rotateEnabled={false}
        >
            <Marker
                coordinate={{
                    latitude: station.gps_lati,
                    longitude: station.gps_long
                }}
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
        </MapView>
    )
}


// <MapView
//     style={{ flex: 1 }}
//     ref={(ref) => { MapRef.current = ref; }}
//     initialRegion={{
//         latitude: location.latitude,
//         longitude: location.longitude,
//         latitudeDelta: delta.latitude,
//         longitudeDelta: delta.longitude,
//     }}
//     provider={PROVIDER_GOOGLE}
//     onMapReady={() => {
//         MapRef.current.fitToSuppliedMarkers(mapId, {
//             edgePadding:
//             {
//                 top: 50,
//                 right: 50,
//                 bottom: 50,
//                 left: 50
//             }

//         })
//     }}
// >
//     {
//         data ? data.map((station: any, index: number) =>
//             <Marker
//                 coordinate={{
//                     latitude: station.gps_lati,
//                     longitude: station.gps_long
//                 }}
//                 key={index}
//                 identifier={index.toString()}
//             >
//                 <Callout
//                     onPress={() => navigation.push('station', station)}
//                     style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//                     <View>
//                         <Text style={{ marginRight: 20 }}>{station.busstop_nm}</Text>
//                         <Text note>{station.bus_stop_id}</Text>
//                     </View>
//                 </Callout>
//             </Marker>
//         ) : null
//     }
// </MapView>