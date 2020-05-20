import abc

from bus.entities import BusEntity
from bus.models import Bus


class BusABCRepository:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def create_bus(self, entity: BusEntity):
        pass

    @abc.abstractmethod
    def get_bus(self):
        pass

    @abc.abstractmethod
    def delete_bus(self):
        pass


class BusRepository(BusABCRepository):
    def create_bus(self, entity: BusEntity):
        dict = entity.to_dict()
        bus = Bus(**dict)
        bus.save()
        return True

    def get_bus(self):
        bus = Bus.objects.all()
        return bus

    def delete_bus(self):
        bus = Bus.objects.all()
        bus.delete()
        return True