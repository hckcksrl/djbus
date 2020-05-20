from bus.repositories import BusRepository
from bus.entities import BusEntity
from bus.models import AllStation, Station
from bus.serializers import StationSerializer, BusSerializer, AllStationSerializer


class BusInteractor:
    def __init__(self):
        self.repository = BusRepository()


class CreateBusInteractor(BusInteractor):
    def execute(self, data: dict):
        items = data['ServiceResult']['msgBody']['itemList']
        dict = {}

        for item in items:
            entity = BusEntity(
                allo_interval=item['ALLO_INTERVAL'],
                allo_interval_sat=item['ALLO_INTERVAL_SAT'],
                allo_interval_sun=item['ALLO_INTERVAL_SUN'],
                end_node_id=item['END_NODE_ID'],
                end_station_nm=Station.objects.get(bus_node_id=item['END_NODE_ID']).busstop_nm,
                origin_end=item['ORIGIN_END'][:2]+':'+item['ORIGIN_END'][2:],
                origin_end_sat=item['ORIGIN_END_SAT'][:2]+':'+item['ORIGIN_END_SAT'][2:],
                origin_end_sun=item['ORIGIN_END_SUN'][:2]+':'+item['ORIGIN_END_SUN'][2:],
                origin_start=item['ORIGIN_START'][:2]+':'+item['ORIGIN_START'][2:],
                origin_start_sat=item['ORIGIN_START_SAT'][:2]+':'+item['ORIGIN_START_SAT'][2:],
                origin_start_sun=item['ORIGIN_START_SUN'][:2]+':'+item['ORIGIN_START_SUN'][2:],
                route_cd=item['ROUTE_CD'],
                route_no=item['ROUTE_NO'],
                route_tp=item['ROUTE_TP'],
                start_node_id=item['START_NODE_ID'],
                start_station_nm=Station.objects.get(bus_node_id=item['START_NODE_ID']).busstop_nm,
                turn_end=item['TURN_END'][:2]+':'+item['TURN_END'][2:],
                turn_end_sat=item['TURN_END_SAT'][:2]+':'+item['TURN_END_SAT'][2:],
                turn_end_sun=item['TURN_END_SUN'][:2]+':'+item['TURN_END_SUN'][2:],
                turn_node_id=item['TURN_NODE_ID'],
                turn_station_nm=Station.objects.get(bus_node_id=item['TURN_NODE_ID']).busstop_nm,
                turn_start=item['TURN_START'][:2]+':'+item['TURN_START'][2:],
                turn_start_sat=item['TURN_START_SAT'][:2]+':'+item['TURN_START_SAT'][2:],
                turn_start_sun=item['TURN_START_SUN'][:2]+':'+item['TURN_START_SUN'][2:],
            )

            self.repository.create_bus(entity=entity)

        return True


class GetBusInteractor(BusInteractor):
    def execute(self):
        return self.repository.get_bus()


class DeleteBusInteractor(BusInteractor):
    def execute(self):
        return self.repository.delete_bus()