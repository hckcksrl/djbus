from django.db import models
from bus.entities import BusEntity, StationEntity, AllStationEntity


class Station(models.Model):
    busstop_nm = models.CharField(max_length=255, default='', null=True)
    busstop_tp = models.CharField(max_length=255, default='', null=True)
    bus_node_id = models.CharField(max_length=255, default='', unique=True, primary_key=True)
    bus_stop_id = models.CharField(max_length=255, default='')
    gps_lati = models.FloatField(null=True, blank=True)
    gps_long = models.FloatField(null=True, blank=True)
    next_station = models.CharField(max_length=255, default='', null=True)

    def to_entity(self) -> StationEntity:
        return StationEntity(
            busstop_nm=self.busstop_nm,
            busstop_tp=self.busstop_tp,
            bus_node_id=self.bus_node_id,
            bus_stop_id=self.bus_stop_id,
            gps_lati=self.gps_lati,
            gps_long=self.gps_long,
            next_station=self.next_station
        )


class Bus(models.Model):
    allo_interval = models.CharField(max_length=255, default='', null=True)
    allo_interval_sat = models.CharField(max_length=255, default='', null=True)
    allo_interval_sun = models.CharField(max_length=255, default='', null=True)
    end_node_id = models.CharField(max_length=255, default='', null=True)
    origin_end = models.CharField(max_length=255, default='', null=True)
    origin_end_sat = models.CharField(max_length=255, default='', null=True)
    origin_end_sun = models.CharField(max_length=255, default='', null=True)
    origin_start = models.CharField(max_length=255, default='', null=True)
    origin_start_sat = models.CharField(max_length=255, default='', null=True)
    origin_start_sun = models.CharField(max_length=255, default='', null=True)
    route_cd = models.CharField(max_length=255, default='', unique=True, primary_key=True)
    route_no = models.CharField(max_length=255, default='', null=True)
    route_tp = models.CharField(max_length=255, default='', null=True)
    start_node_id = models.CharField(max_length=255, default='', null=True)
    turn_end = models.CharField(max_length=255, default='', null=True)
    turn_end_sat = models.CharField(max_length=255, default='', null=True)
    turn_end_sun = models.CharField(max_length=255, default='', null=True)
    turn_node_id = models.CharField(max_length=255, default='', null=True)
    turn_start = models.CharField(max_length=255, default='', null=True)
    turn_start_sat = models.CharField(max_length=255, default='', null=True)
    turn_start_sun = models.CharField(max_length=255, default='', null=True)
    start_station_nm = models.CharField(max_length=255, default='', null=True)
    end_station_nm = models.CharField(max_length=255, default='', null=True)
    turn_station_nm = models.CharField(max_length=255, default='', null=True)

    def to_entity(self) -> BusEntity:
        return BusEntity(
            allo_interval=self.allo_interval,
            allo_interval_sat=self.allo_interval_sat,
            allo_interval_sun=self.allo_interval_sun,
            end_node_id=self.end_node_id,
            origin_end=self.origin_end,
            origin_end_sat=self.origin_end_sat,
            origin_end_sun=self.origin_end_sun,
            origin_start=self.origin_start,
            origin_start_sat=self.origin_start_sat,
            origin_start_sun=self.origin_start_sun,
            route_cd=self.route_cd,
            route_no=self.route_no,
            route_tp=self.route_tp,
            start_node_id=self.start_node_id,
            turn_end=self.turn_end,
            turn_end_sat=self.turn_end_sat,
            turn_end_sun=self.turn_end_sun,
            turn_node_id=self.turn_node_id,
            turn_start=self.turn_start,
            turn_start_sat=self.turn_start_sat,
            turn_start_sun=self.turn_start_sun,
            start_station_nm=self.start_station_nm,
            end_station_nm=self.end_station_nm,
            turn_station_nm=self.turn_station_nm
        )


class AllStation(models.Model):
    busstop_nm = models.CharField(max_length=255, default='', null=True)
    busstop_tp = models.CharField(max_length=255, default='', null=True)
    busstop_seq = models.IntegerField(null=True, blank=True)
    bus_node_id = models.CharField(max_length=255, default='', null=True)
    bus_stop_id = models.CharField(max_length=255, default='', null=True)
    gps_lati = models.FloatField(null=True, blank=True)
    gps_long = models.FloatField(null=True, blank=True)
    route_cd = models.CharField(max_length=255, default='')

    def to_entity(self) -> AllStationEntity:
        return AllStationEntity(
            busstop_nm=self.busstop_nm,
            busstop_tp=self.busstop_tp,
            busstop_seq=self.busstop_seq,
            bus_node_id=self.bus_node_id,
            bus_stop_id=self.bus_stop_id,
            gps_lati=self.gps_lati,
            gps_long=self.gps_long,
        )
