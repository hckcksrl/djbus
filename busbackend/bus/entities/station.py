from dataclasses import dataclass


@dataclass
class StationEntity:
    busstop_nm: str = None
    busstop_tp: str = None
    bus_node_id: str = None
    bus_stop_id: str = None
    gps_lati: float = None
    gps_long: float = None
    next_station: str = None

    def to_dict(self):
        dict = {
            'busstop_nm': self.busstop_nm,
            'busstop_tp': self.busstop_tp,
            'bus_node_id': self.bus_node_id ,
            'bus_stop_id': self.bus_stop_id,
            'gps_lati': self.gps_lati ,
            'gps_long': self.gps_long,
            'next_station': self.next_station
        }
        return dict


@dataclass
class AllStationEntity:
    busstop_nm: str = None
    busstop_tp: str = None
    busstop_seq: int = None
    bus_node_id: str = None
    bus_stop_id: str = None
    gps_lati: float = None
    gps_long: float = None
    route_cd: str = None

    def to_dict(self):
        dict = {
            'busstop_nm': self.busstop_nm,
            'busstop_tp': self.busstop_tp,
            'busstop_seq': self.busstop_seq,
            'bus_node_id':self.bus_node_id ,
            'bus_stop_id': self.bus_stop_id,
            'gps_lati':self.gps_lati ,
            'gps_long':self.gps_long,
            'route_cd':self.route_cd
        }
        return dict