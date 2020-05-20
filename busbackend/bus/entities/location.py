from dataclasses import dataclass


@dataclass
class LocationEntity:
    bus_node_id: str = None
    bus_stop_id: str = None
    direct: int = None
    evt_cd: int = None
    gps_lati: float = None
    gps_long: float = None
    route_cd: str = None
    stre_dt: str = None
    ud_type: int = None
    plate_no: str= None