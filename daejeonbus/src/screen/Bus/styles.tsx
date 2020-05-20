import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    headerButtonWrap: { backgroundColor: 'transparent', paddingRight: 5 },
    fontColor: { color: 'white' },
    headerBodyWrap: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    headerHomeIcon: { fontSize: 22, color: 'white' },
    containerCardWrap: { alignItems: 'center', marginHorizontal: 10, padding: 10 },
    containerCardItemFirst: { flexDirection: 'column' },
    containerCardItemInner: { flexDirection: 'row', alignItems: 'center' },
    fontBold: { fontWeight: 'bold' },
    containerCardItemInnerSecond: { flexDirection: 'row', alignItems: 'center' },
    containerExchangeIcon: { color: '#a0a0a0', fontSize: 20, marginHorizontal: 5 },
    containerCardItemSecondInner: { justifyContent: 'center', alignItems: 'center', padding: 10 },
    containerIcon: { fontSize: 20 },
    listLeftWrap: { flexDirection: 'row' },
    listLeftView: { alignItems: 'flex-start', flex: 1 },
    fontNormal: { fontWeight: 'normal' },
    listBody: { justifyContent: 'flex-end', flexDirection: 'row', height: '100%' },
    iconBlack: { color: 'black' },
    iconYellow: { color: '#fce700' },
    listIcon: { marginTop: -3, marginBottom: -5, fontSize: 25 },
    refreshButton: {
        shadowColor: '#4d4d4d', shadowOffset: { width: 1, height: 1, }, shadowOpacity: 0.3, shadowRadius: 4,
        backgroundColor: '#505050', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center',
        zIndex: 1, borderColor: '#a0a0a0', position: 'absolute', right: 50, bottom: 50
    },
    refreshSpinner: { position: 'absolute', left: Dimensions.get('screen').width / 2, top: Dimensions.get('screen').height / 2 },
    refreshIcon: { color: 'white', fontSize: 20 },
    scrollTop: {
        width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', zIndex: 1, borderColor: '#e0e0e0',
        backgroundColor: "white"
    },
    scrollTopIcon: { fontSize: 30, color: '#a0a0a0' },
    listFooterView: { height: 100, justifyContent: 'center', alignItems: 'center' },
    busLineWrap: { flexDirection: 'column', height: '100%', alignItems: 'center', width: 30 },
    busLine: { width: 5, flex: 1, marginVertical: 0 },
    busLineView: { backgroundColor: '#c0c0c0', width: 5, flex: 1, marginVertical: 0 },
    refreshButtonView: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
    locateContainer: { justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-end' },
    locateInner: { backgroundColor: 'white', borderWidth: 0.5, borderColor: '#e0e0e0', padding: 2 }
})

export const Color = (number: number) => {
    if (number == 1) {
        return ['red', '급행']
    } else if (number == 2) {
        return ['blue', '간선']
    } else if (number == 3) {
        return ['green', '지선']
    } else if (number == 4) {
        return ['green', '외각']
    } else if (number == 5) {
        return ['green', '마을']
    } else if (number == 6) {
        return ['red', '첨단']
    } else {
        return ['black', '일반']
    }
}
