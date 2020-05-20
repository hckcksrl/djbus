import { Grid, Col, Row } from 'native-base'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Table = ({ data }: any) => {
    return (
        <Grid>
            <Row style={styles.tableBottom}>
                <Col style={styles.tableColLeft}></Col>
                <Col style={[styles.tableLeft, { alignItems: 'center' }]}><Text>기점</Text></Col>
                <Col style={[styles.tableLeft, { alignItems: 'center' }]}><Text>종점</Text></Col>
            </Row>
            <Row style={styles.tableBottom}>
                <Col style={styles.tableColLeft}><Text>평일</Text></Col>
                <Col style={styles.tableLeft}>
                    <Row style={styles.tableInner}>
                        <Text>첫차{`\t`}</Text><Text style={{ color: 'red' }}>{data.origin_start}</Text>
                    </Row>
                    <Row style={styles.tableInner}>
                        <Text>막차{`\t`}</Text><Text style={{ color: 'red' }}>{data.origin_end}</Text>
                    </Row>
                </Col>
                <Col style={styles.tableLeft}>
                    <Row style={styles.tableInner}>
                        <Text>첫차{`\t`}</Text><Text style={{ color: 'red' }}>{data.turn_start}</Text>
                    </Row>
                    <Row style={styles.tableInner}>
                        <Text>막차{`\t`}</Text><Text style={{ color: 'red' }}>{data.turn_end}</Text>
                    </Row>
                </Col>
            </Row>
            <Row style={styles.tableBottom}>
                <Col style={styles.tableColLeft}><Text>토요일</Text></Col>
                <Col style={styles.tableLeft}>
                    <Row style={styles.tableInner}>
                        <Text>첫차{`\t`}</Text><Text style={{ color: 'red' }}>{data.origin_start_sat}</Text>
                    </Row>
                    <Row style={styles.tableInner}>
                        <Text>막차{`\t`}</Text><Text style={{ color: 'red' }}>{data.origin_end_sat}</Text>
                    </Row>
                </Col>
                <Col style={styles.tableLeft}>
                    <Row style={styles.tableInner}>
                        <Text>첫차{`\t`}</Text><Text style={{ color: 'red' }}>{data.turn_start_sat}</Text>
                    </Row>
                    <Row style={styles.tableInner}>
                        <Text>막차{`\t`}</Text><Text style={{ color: 'red' }}>{data.turn_end_sat}</Text>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col style={styles.tableColLeft}><Text>일요일</Text></Col>
                <Col style={styles.tableLeft}>
                    <Row style={styles.tableInner}>
                        <Text>첫차{`\t`}</Text><Text style={{ color: 'red' }}>{data.origin_start_sun}</Text>
                    </Row>
                    <Row style={styles.tableInner}>
                        <Text>막차{`\t`}</Text><Text style={{ color: 'red' }}>{data.origin_end_sun}</Text>
                    </Row>
                </Col>
                <Col style={styles.tableLeft}>
                    <Row style={styles.tableInner}>
                        <Text>첫차{`\t`}</Text><Text style={{ color: 'red' }}>{data.turn_start_sun}</Text>
                    </Row>
                    <Row style={styles.tableInner}>
                        <Text>막차{`\t`}</Text><Text style={{ color: 'red' }}>{data.turn_end_sun}</Text>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
    tableLeft: {
        borderLeftColor: '#c0c0c0', borderLeftWidth: 1, justifyContent: 'center', display: 'flex'
    },
    tableBottom: {
        borderBottomColor: '#c0c0c0', borderBottomWidth: 1, minHeight: 30
    },
    tableColLeft: {
        width: 50, justifyContent: 'center', alignItems: 'center'
    },
    tableInner: { height: 30, alignItems: 'center', paddingLeft: 10 }
})
