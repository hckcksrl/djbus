from dataclasses import dataclass

@dataclass
class BusEntity:
    allo_interval: str = None
    allo_interval_sat: str = None
    allo_interval_sun: str = None
    end_node_id: str = None
    origin_end: str = None
    origin_end_sat: str = None
    origin_end_sun: str = None
    origin_start: str = None
    origin_start_sat: str = None
    origin_start_sun: str = None
    route_cd: str = None
    route_no: str = None
    route_tp: str = None
    start_node_id: str = None
    turn_end: str = None
    turn_end_sat: str = None
    turn_end_sun: str = None
    turn_node_id: str = None
    turn_start: str = None
    turn_start_sat: str = None
    turn_start_sun: str = None
    start_station_nm: str = None
    end_station_nm: str = None
    turn_station_nm: str = None

    def to_dict(self):
        dict = {
            "allo_interval":self.allo_interval,
            'allo_interval_sat':self.allo_interval_sat,
            'allo_interval_sun':self.allo_interval_sun,
            'end_node_id':self.end_node_id,
            'origin_end':self.origin_end,
            'origin_end_sat':self.origin_end_sat,
            'origin_end_sun':self.origin_end_sun,
            'origin_start':self.origin_start,
            'origin_start_sat':self.origin_start_sat,
            'origin_start_sun':self.origin_start_sun,
            'route_cd':self.route_cd,
            'route_no':self.route_no,
            'route_tp':self.route_tp,
            'start_node_id':self.start_node_id,
            'turn_end':self.turn_end,
            'turn_end_sat':self.turn_end_sat,
            'turn_end_sun':self.turn_end_sun,
            'turn_node_id':self.turn_node_id,
            'turn_start':self.turn_start,
            'turn_start_sat':self.turn_start_sat,
            'turn_start_sun':self.turn_start_sun,
            'start_station_nm': self.start_station_nm,
            'end_station_nm': self.end_station_nm,
            'turn_station_nm': self.turn_station_nm
        }
        return dict