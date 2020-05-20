import abc

from bus.entities import StationEntity, AllStationEntity
from bus.models import Station, AllStation


class StationABCRepository:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def create_station(self, entity: StationEntity):
        pass

    @abc.abstractmethod
    def get_station(self):
        pass

    @abc.abstractmethod
    def delete_station(self):
        pass


class StationRepository(StationABCRepository):
    def create_station(self, entity: StationEntity):
        dict = entity.to_dict()
        try:
            exist_station = Station.objects.get(bus_node_id=entity.bus_node_id)
            if not exist_station.next_station:
                exist_station.next_station = entity.next_station
                exist_station.save()
            return True
        except Station.DoesNotExist:
            station = Station(**dict)
            station.save()
            return True

    def get_station(self):
        station = Station.objects.all().order_by('busstop_nm')
        return station

    def delete_station(self):
        station = Station.objects.all()
        station.delete()
        return True


class AllStationABCRepository:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def create_all_station(self, entity: AllStationEntity):
        pass

    @abc.abstractmethod
    def get_all_station(self):
        pass

    @abc.abstractmethod
    def delete_all_station(self):
        pass


class AllStationRepository(AllStationABCRepository):
    def create_all_station(self, entity: AllStationEntity):
        dict = entity.to_dict()
        all_station = AllStation(**dict)
        all_station.save()
        return True

    def get_all_station(self):
        all_station = AllStation.objects.all()
        return all_station

    def delete_all_station(self):
        all_station = AllStation.objects.all()
        all_station.delete()
        return True

