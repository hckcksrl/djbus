import { StyleSheet } from 'react-native'

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
    headerBackButton: { backgroundColor: 'transparent', paddingRight: 5 },
})