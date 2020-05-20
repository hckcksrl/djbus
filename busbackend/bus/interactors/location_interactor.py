from bus.entities import LocationEntity


class GetLocationInteractor:
    def execute(self, data: dict):
        if data['ServiceResult']['msgHeader']['headerCd'] == '4':
            return []
        items = data['ServiceResult']['msgBody']['itemList']
        result = []
        if isinstance(items,list):
            for item in items:
                entity = LocationEntity(
                    bus_node_id=item['BUS_NODE_ID'],
                    bus_stop_id=item['BUS_STOP_ID'],
                    gps_lati=item['GPS_LATI'],
                    gps_long=item['GPS_LONG'],
                    evt_cd=item['EVT_CD'],
                    direct=item['DIR'],
                    ud_type=item['ud_type'],
                    stre_dt=item['STRE_DT'],
                    route_cd=item['ROUTE_CD'],
                    plate_no=item['PLATE_NO']
                )
                result.append(entity)
        else:
            entity = LocationEntity(
                bus_node_id=items['BUS_NODE_ID'],
                bus_stop_id=items['BUS_STOP_ID'],
                gps_lati=items['GPS_LATI'],
                gps_long=items['GPS_LONG'],
                evt_cd=items['EVT_CD'],
                direct=items['DIR'],
                ud_type=items['ud_type'],
                stre_dt=items['STRE_DT'],
                route_cd=items['ROUTE_CD'],
                plate_no=items['PLATE_NO']
            )
            result.append(entity)

        return result
