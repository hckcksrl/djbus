from bus.repositories import StationRepository, AllStationRepository
from bus.entities import StationEntity, AllStationEntity
import requests
import xmltodict


class StationInteractor:
    def __init__(self):
        self.repository = StationRepository()


class CreateStationInteractor(StationInteractor):
    def execute(self, data: dict):
        items = data['ServiceResult']['msgBody']['itemList']
        for item in items:
            urls =f'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRoute?serviceKey={key}&busRouteId={item["ROUTE_CD"]}'
            xml = requests.get(urls)
            xml.encoding = 'utf-8'
            result = xmltodict.parse(xml.text)
            result2 = result['ServiceResult']['msgBody']['itemList']

            for i in range(len(result2)):
                if i != len(result2)-1:
                    if result2[i]["BUS_STOP_ID"]:
                        entity = StationEntity(
                            busstop_nm=result2[i]["BUSSTOP_NM"],
                            busstop_tp=result2[i]["BUSSTOP_TP"],
                            bus_node_id=result2[i]["BUS_NODE_ID"],
                            bus_stop_id=result2[i]["BUS_STOP_ID"],
                            gps_lati=float(result2[i]["GPS_LATI"]),
                            gps_long=float(result2[i]["GPS_LONG"]),
                            next_station=result2[i+1]["BUSSTOP_NM"]
                        )
                    else:
                        entity = StationEntity(
                            busstop_nm=result2[i]["BUSSTOP_NM"],
                            busstop_tp=result2[i]["BUSSTOP_TP"],
                            bus_node_id=result2[i]["BUS_NODE_ID"],
                            bus_stop_id=result2[i]["BUS_NODE_ID"],
                            gps_lati=float(result2[i]["GPS_LATI"]),
                            gps_long=float(result2[i]["GPS_LONG"]),
                            next_station=result2[i+1]["BUSSTOP_NM"]
                        )

                else:
                    if result2[i]["BUS_STOP_ID"]:
                        entity = StationEntity(
                            busstop_nm=result2[i]["BUSSTOP_NM"],
                            busstop_tp=result2[i]["BUSSTOP_TP"],
                            bus_node_id=result2[i]["BUS_NODE_ID"],
                            bus_stop_id=result2[i]["BUS_STOP_ID"],
                            gps_lati=float(result2[i]["GPS_LATI"]),
                            gps_long=float(result2[i]["GPS_LONG"]),
                            next_station=''
                        )
                    else:
                        entity = StationEntity(
                            busstop_nm=result2[i]["BUSSTOP_NM"],
                            busstop_tp=result2[i]["BUSSTOP_TP"],
                            bus_node_id=result2[i]["BUS_NODE_ID"],
                            bus_stop_id=result2[i]["BUS_NODE_ID"],
                            gps_lati=float(result2[i]["GPS_LATI"]),
                            gps_long=float(result2[i]["GPS_LONG"]),
                            next_station=''
                        )

                self.repository.create_station(entity=entity)

        return True


class GetStationInteractor(StationInteractor):
    def execute(self):
        return self.repository.get_station()


class DeleteStationInteractor(StationInteractor):
    def execute(self):
        return self.repository.delete_station()


class AllStationInteractor:
    def __init__(self):
        self.repository = AllStationRepository()


class CreateAllStationInteractor(AllStationInteractor):
    def execute(self, data: dict):
        items = data['ServiceResult']['msgBody']['itemList']

        for item in items:
            keys = item.keys()
            if "BUSSTOP_NM" in keys:
                entity = AllStationEntity(
                    busstop_nm=item["BUSSTOP_NM"],
                    busstop_tp=item["BUSSTOP_TP"],
                    busstop_seq=int(item["BUSSTOP_SEQ"]),
                    bus_node_id=item["BUS_NODE_ID"],
                    bus_stop_id=item["BUS_STOP_ID"],
                    gps_lati=float(item["GPS_LATI"]),
                    gps_long=float(item["GPS_LONG"]),
                    route_cd=item['ROUTE_CD']
                )

                self.repository.create_all_station(entity=entity)

        return True


class GetAllStationInteractor(AllStationInteractor):
    def execute(self):
        return self.repository.get_all_station()


class DeleteAllStationInteractor(AllStationInteractor):
    def execute(self):
        return self.repository.delete_all_station()
