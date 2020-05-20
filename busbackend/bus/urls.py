from django.urls import path
from bus.views import Bus, Station, AllStation, BusTime, Location

urlpatterns = [
    # path('bus_info/<str:bus_id>', Bus.as_view()),
    path('bus', Bus.as_view()),
    path('station', Station.as_view()),
    path('allstation', AllStation.as_view()),
    path('bustime/<str:station_id>', BusTime.as_view()),
    path('location/<str:bus_id>', Location.as_view())
]
