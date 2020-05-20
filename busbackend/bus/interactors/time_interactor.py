from bus.entities import BusTimeEntity


class GetBusTimeInreractor:
    def execute(self, data: dict):
        if data['ServiceResult']['msgHeader']['headerCd'] == '4':
            return []
        items = data['ServiceResult']['msgBody']['itemList']
        result = []
        if isinstance(items,list):
            for item in items:
                if "LAST_STOP_ID" in item.keys():
                    entity = BusTimeEntity(
                        bus_stop_id=item['BUS_STOP_ID'],
                        bus_node_id=item['BUS_NODE_ID'],
                        destination=item['DESTINATION'],
                        extime_min=int(item['EXTIME_MIN']),
                        last_cat=int(item['LAST_CAT']),
                        last_stop_id=item['LAST_STOP_ID'],
                        msg_tp=int(item['MSG_TP']),
                        route_cd=item['ROUTE_CD'],
                        route_no=int(item['ROUTE_NO']),
                        route_tp=int(item['ROUTE_TP']),
                        status_pos=item['STATUS_POS'],
                        extime_sec=item['EXTIME_SEC']
                    )
                else:
                    entity = BusTimeEntity(
                        bus_stop_id=item['BUS_STOP_ID'],
                        bus_node_id=item['BUS_NODE_ID'],
                        destination=item['DESTINATION'],
                        extime_min=int(item['EXTIME_MIN']),
                        last_cat=int(item['LAST_CAT']),
                        last_stop_id='',
                        msg_tp=int(item['MSG_TP']),
                        route_cd=item['ROUTE_CD'],
                        route_no=int(item['ROUTE_NO']),
                        route_tp=int(item['ROUTE_TP']),
                        status_pos=item['STATUS_POS'],
                        extime_sec=item['EXTIME_SEC']
                    )
                result.append(entity)
        else:
            if "LAST_STOP_ID" in items.keys():
                entity = BusTimeEntity(
                    bus_stop_id=items['BUS_STOP_ID'],
                    bus_node_id=items['BUS_NODE_ID'],
                    destination=items['DESTINATION'],
                    extime_min=int(items['EXTIME_MIN']),
                    last_cat=int(items['LAST_CAT']),
                    last_stop_id=items['LAST_STOP_ID'],
                    msg_tp=int(items['MSG_TP']),
                    route_cd=items['ROUTE_CD'],
                    route_no=int(items['ROUTE_NO']),
                    route_tp=int(items['ROUTE_TP']),
                    status_pos=items['STATUS_POS'],
                    extime_sec=items['EXTIME_SEC']
                )
            else:
                entity = BusTimeEntity(
                    bus_stop_id=items['BUS_STOP_ID'],
                    bus_node_id=items['BUS_NODE_ID'],
                    destination=items['DESTINATION'],
                    extime_min=int(items['EXTIME_MIN']),
                    last_cat=int(items['LAST_CAT']),
                    last_stop_id='',
                    msg_tp=int(items['MSG_TP']),
                    route_cd=items['ROUTE_CD'],
                    route_no=int(items['ROUTE_NO']),
                    route_tp=int(items['ROUTE_TP']),
                    status_pos=items['STATUS_POS'],
                    extime_sec=items['EXTIME_SEC']
                )
            result.append(entity)
        result_sort = sorted(result, key=lambda x: (x.route_tp, x.route_no))

        return result_sort
