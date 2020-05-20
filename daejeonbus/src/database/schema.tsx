import Realm from 'realm'

export const BusSchema = {
    name: 'Bus',
    properties: {
        allo_interval: 'string',
        allo_interval_sat: 'string',
        allo_interval_sun: 'string',
        end_node_id: 'string',
        origin_end: 'string',
        origin_end_sat: 'string',
        origin_end_sun: 'string',
        origin_start: 'string',
        origin_start_sat: 'string',
        origin_start_sun: 'string',
        route_cd: 'string',
        route_no: 'string',
        route_tp: 'string',
        start_node_id: 'string',
        turn_end: 'string',
        turn_end_sat: 'string',
        turn_end_sun: 'string',
        turn_node_id: 'string',
        turn_start: 'string',
        turn_start_sat: 'string',
        turn_start_sun: 'string',
        start_station_nm: 'string',
        end_station_nm: 'string',
        turn_station_nm: 'string',
    }
};

export const StationSchema = {
    name: 'Station',
    properties: {
        busstop_nm: 'string',
        busstop_tp: 'string?',
        bus_node_id: 'string',
        bus_stop_id: 'string',
        gps_lati: 'float',
        gps_long: 'float',
        next_station: 'string'
    }
}

export const AllStationSchema = {
    name: 'AllStation',
    properties: {
        busstop_nm: 'string',
        busstop_tp: 'int?',
        busstop_seq: 'int?',
        bus_node_id: 'string',
        bus_stop_id: 'string?',
        gps_lati: 'float',
        gps_long: 'float',
        route_cd: 'string',
    }
}

export const SaveLikeSchema = {
    name: "SaveLike",
    properties: {
        key: 'int',
        id: 'string',
        type: 'string'
    }
}

export default new Realm({ schema: [BusSchema, StationSchema, AllStationSchema, SaveLikeSchema] })