import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SubEntries = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <View key={item.key} style={styles.btnCont}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.labelText}>{item.data.category}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={styles.labelText}>{ item.data.money+'€' }</Text>
                            </View>
                        </View>
                    </View>
                )
            }}
        />

    )
}
const styles = StyleSheet.create({
    btnCont: {
        marginLeft: 30, height: 40, borderRadius: 10, marginVertical: 5, backgroundColor: '#479B92', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    labelText: {
        fontSize: 14, color: '#fff'
    }
})
export default SubEntries