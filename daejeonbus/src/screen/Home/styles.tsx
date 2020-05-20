import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    containerItemWrap: { minHeight: 70, backgroundColor: 'white' },
    itemLeft: { flexDirection: 'column', justifyContent: 'space-around', minHeight: 50 },
    itemLeftInnerFirst: { flexDirection: 'row' },
    ItemLeftInnerSecond: { flexDirection: 'row', alignItems: 'center' },
    itemCenter: { marginHorizontal: 7 },
    busItemWrap: { flexDirection: 'column', justifyContent: 'center' },
    busItemInner: { flexDirection: 'row', alignItems: 'center' },
    busItemIcon: { color: '#a0a0a0', fontSize: 27, marginHorizontal: 5 },
    headerWrap: { paddingLeft: 20, width: '100%' },
    headerTitle: { color: '#555555' },
    refreshButton: {
        shadowColor: '#4d4d4d', shadowOffset: { width: 1, height: 1, }, shadowOpacity: 0.3, shadowRadius: 4,
        backgroundColor: '#505050', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center',
        zIndex: 1, borderColor: '#a0a0a0', position: 'absolute', right: 50, bottom: 50
    },
    refreshButtonView: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
    refreshIcon: { color: 'white', fontSize: 20 },
    currentButton: {
        shadowColor: '#4d4d4d', shadowOffset: { width: 1, height: 1, }, shadowOpacity: 0.3, shadowRadius: 4,
        backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
        zIndex: 1, borderColor: '#a0a0a0', marginTop: 10
    },
})