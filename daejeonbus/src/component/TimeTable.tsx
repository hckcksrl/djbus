import React from 'react'
import { View, Text, Card } from 'native-base'


export const TimeTable = ({ data, station }: any) => {
    switch (data.msg_tp) {
        case 1:
            return (<>
                <View>
                    <Text>도착</Text>
                </View>
            </>)
        case 3:
            return (<>
                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                    <Text>약 {data.extime_min}분</Text>
                    <Card style={{ justifyContent: 'center' }}>
                        <Text note>{data.status_pos}번째 전</Text>
                    </Card>
                </View>
                <View>
                    {station ? <Text note>{station}</Text>
                        : null}
                </View>

            </>)
        case 6:
            return (<>
                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                    <Text>약 {data.extime_min}분</Text>
                    <Card style={{ justifyContent: 'center' }}>
                        <Text note>진입중</Text>
                    </Card>
                </View>
                <View>
                    {station ? <Text note>{station}</Text>
                        : null}
                </View>
            </>)

        case 7:
            return (
                <View>
                    <Text note>{data.extime_sec.slice(0, -2) + "시" + data.extime_sec.slice(-2)}분에 기점출발</Text>
                </View>
            )
        default:
            return (<>
                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                    <Text>약{data.extime_min}분</Text>
                    <Card style={{ justifyContent: 'center' }}>
                        <Text note>{data.status_pos}번째 전</Text>
                    </Card>
                </View>
                <View>
                    {station ? <Text note>{station}</Text>
                        : null}
                </View>
            </>)
    }
}