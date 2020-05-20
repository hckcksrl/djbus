import requests
import xmltodict
import json
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from bus.interactors import \
    CreateBusInteractor, \
    CreateStationInteractor, \
    GetStationInteractor, \
    GetBusInteractor, \
    GetAllStationInteractor, \
    CreateAllStationInteractor, \
    GetBusTimeInreractor, \
    GetLocationInteractor, \
    DeleteBusInteractor, \
    DeleteStationInteractor, \
    DeleteAllStationInteractor
from bus.serializers import \
    StationSerializer, \
    BusSerializer, \
    AllStationSerializer, \
    BusTimeSerializer, \
    LocationSerializer


class Station(APIView):
    def get(self, request: Request):
        station = GetStationInteractor().execute()
        serializer = StationSerializer(station, many=True)

        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def post(self, request: Request):
        DeleteStationInteractor().execute()
        for i in range(1, 3):
            urls = f'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getRouteInfoAll?serviceKey={key}&reqPage={i}'
            xml = requests.get(urls)
            xml.encoding = 'utf-8'
            data = xmltodict.parse(xml.text)
            result = CreateStationInteractor().execute(data=data)

        return Response(status=status.HTTP_200_OK, data=result)


class Bus(APIView):
    def get(self, request: Request):
        bus = GetBusInteractor().execute()
        serializer = BusSerializer(bus, many=True)

        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def post(self, request: Request):
        bus_station = {}
        DeleteBusInteractor().execute()
        for i in range(1, 3):
            urls = f'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getRouteInfoAll?serviceKey={key}&reqPage={i}'
            xml = requests.get(urls)
            xml.encoding = 'utf-8'
            data = xmltodict.parse(xml.text)
            result = CreateBusInteractor().execute(data=data)
            bus_station = {**bus_station, **result}

        return Response(status=status.HTTP_200_OK, data=bus_station)


class AllStation(APIView):
    def get(self, request: Request):
        station = GetAllStationInteractor().execute()
        serializer = AllStationSerializer(station, many=True)

        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def post(self, request: Request):
        DeleteAllStationInteractor().execute()
        for i in range(1, 110):
            urls = f'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey={key}&reqPage={i}'
            xml = requests.get(urls)
            xml.encoding = 'utf-8'
            data = xmltodict.parse(xml.text)
            print(i)
            result = CreateAllStationInteractor().execute(data=data)

        return Response(status=status.HTTP_200_OK, data=result)


class BusTime(APIView):
    def get(self, request: Request, station_id):
        urls = f'http://openapitraffic.daejeon.go.kr/api/rest/arrive/getArrInfoByStopID?busStopID={station_id}&serviceKey={key}'
        xml = requests.get(urls)
        xml.encoding = 'utf-8'
        data = xmltodict.parse(xml.text)
        result = GetBusTimeInreractor().execute(data=data)
        if result:
            serialzer = BusTimeSerializer(result, many=True)
            return Response(status=status.HTTP_200_OK, data=serialzer.data)

        return Response(status=status.HTTP_200_OK, data=result)


class Location(APIView):
    def get(self, request: Request, bus_id):
        urls = f'http://openapitraffic.daejeon.go.kr/api/rest/busposinfo/getBusPosByRtid?serviceKey={key}&busRouteId={bus_id}'
        xml = requests.get(urls)
        xml.encoding = 'utf-8'
        data = xmltodict.parse(xml.text)
        result = GetLocationInteractor().execute(data=data)
        if result:
            serializer = LocationSerializer(result, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)

        return Response(status=status.HTTP_200_OK, data=result)