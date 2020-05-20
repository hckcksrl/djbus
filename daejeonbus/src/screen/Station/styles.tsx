import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    refreshButton: {
        shadowColor: '#4d4d4d', shadowOffset: { width: 1, height: 1, }, shadowOpacity: 0.3, shadowRadius: 4,
        backgroundColor: '#505050', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center',
        zIndex: 1, borderColor: '#a0a0a0', position: 'absolute', right: 50, bottom: 50
    },
    refreshSpinner: { position: 'absolute', left: Dimensions.get('screen').width / 2, top: Dimensions.get('screen').height / 2 },
    refreshIcon: { color: 'white', fontSize: 20 },
    headerBody: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    headerLeftBack: { backgroundColor: 'transparent', paddingRight: 5, color: 'white' },
    containerCardItemSecondInner: { justifyContent: 'center', alignItems: 'center', padding: 10 },
    iconYellow: { color: '#fce700' },
    containerCardWrap: { alignItems: 'center', marginHorizontal: 10, padding: 10 },
    headerButtonWrap: { backgroundColor: 'transparent', paddingRight: 5 },
    fontColor: { color: 'white' },
    headerWrap: { backgroundColor: '#a0a0a0' },
    headerHomeIcon: { fontSize: 22, color: 'white' },
    scrollTop: {
        width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', zIndex: 1, borderColor: '#e0e0e0',
        backgroundColor: "white"
    },
    scrollTopIcon: { fontSize: 30, color: '#a0a0a0' },
    listFooterView: { height: 100, justifyContent: 'center', alignItems: 'center' },
})


