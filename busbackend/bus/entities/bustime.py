from dataclasses import dataclass


@dataclass
class BusTimeEntity:
    bus_node_id: str = None
    bus_stop_id: str = None
    destination: str = None
    extime_min: int = None
    extime_sec: str = None
    last_cat: int = None
    last_stop_id: str = None
    msg_tp: int = None
    route_cd: str = None
    route_no: int = None
    route_tp: int = None
    status_pos: str = None
