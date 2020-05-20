from rest_framework import serializers


class StationSerializer(serializers.Serializer):
    busstop_nm = serializers.CharField(required=True)
    busstop_tp = serializers.CharField(required=False)
    bus_node_id = serializers.CharField(required=True)
    bus_stop_id = serializers.CharField(required=False)
    gps_lati = serializers.FloatField(required=True)
    gps_long = serializers.FloatField(required=True)
    next_station = serializers.CharField(required=False)


class BusSerializer(serializers.Serializer):
    allo_interval = serializers.CharField(required=True)
    allo_interval_sat = serializers.CharField(required=True)
    allo_interval_sun = serializers.CharField(required=True)
    end_node_id = serializers.CharField(required=True)
    origin_end = serializers.CharField(required=True)
    origin_end_sat = serializers.CharField(required=True)
    origin_end_sun = serializers.CharField(required=True)
    origin_start = serializers.CharField(required=True)
    origin_start_sat = serializers.CharField(required=True)
    origin_start_sun = serializers.CharField(required=True)
    route_cd = serializers.CharField(required=True)
    route_no = serializers.CharField(required=True)
    route_tp = serializers.CharField(required=True)
    start_node_id = serializers.CharField(required=True)
    turn_end = serializers.CharField(required=True)
    turn_end_sat = serializers.CharField(required=True)
    turn_end_sun = serializers.CharField(required=True)
    turn_node_id = serializers.CharField(required=True)
    turn_start = serializers.CharField(required=True)
    turn_start_sat = serializers.CharField(required=True)
    turn_start_sun = serializers.CharField(required=True)
    end_station_nm = serializers.CharField(required=False)
    start_station_nm = serializers.CharField(required=False)
    turn_station_nm = serializers.CharField(required=False)


class AllStationSerializer(serializers.Serializer):
    busstop_nm = serializers.CharField(required=True)
    busstop_tp = serializers.IntegerField(required=False)
    busstop_seq = serializers.IntegerField(required=False)
    bus_node_id = serializers.CharField(required=True)
    bus_stop_id = serializers.CharField(required=False)
    gps_lati = serializers.FloatField(required=True)
    gps_long = serializers.FloatField(required=True)
    route_cd = serializers.CharField(required=True)


class BusTimeSerializer(serializers.Serializer):
    bus_node_id = serializers.CharField(required=True)
    bus_stop_id = serializers.CharField(required=False)
    destination = serializers.CharField(required=False)
    extime_min = serializers.IntegerField(required=True)
    extime_sec = serializers.CharField(required=True)
    last_cat = serializers.IntegerField(required=True)
    last_stop_id = serializers.CharField(required=True)
    msg_tp = serializers.IntegerField(required=True)
    route_cd = serializers.CharField(required=True)
    route_no = serializers.IntegerField(required=True)
    route_tp = serializers.IntegerField(required=True)
    status_pos = serializers.CharField(required=False)


class LocationSerializer(serializers.Serializer):
    bus_node_id = serializers.CharField(required=True)
    bus_stop_id = serializers.CharField(required=False)
    direct = serializers.IntegerField(required=True)
    evt_cd = serializers.IntegerField(required=False)
    gps_lati = serializers.FloatField(required=False)
    gps_long = serializers.FloatField(required=False)
    route_cd = serializers.CharField(required=True)
    stre_dt = serializers.CharField(required=True)
    ud_type = serializers.IntegerField(required=True)
    plate_no = serializers.CharField(required=False)