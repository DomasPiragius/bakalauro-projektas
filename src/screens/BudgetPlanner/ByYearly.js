import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, FlatList, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import SubEntries from './SubEntries'


const ByYearly = ({ isBudgetActive }) => {

    const [spends, setSpends] = useState([{ total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }])
    const [totalSpends, setTotalSpends] = useState(0)
    const [activeIndex, setActiveIndex] = useState(undefined)

    useEffect(() => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let uid = auth().currentUser.uid;
        let spends = []
        let grandTotal = 0;
        let normalizedData = {}
        let arr = [{ total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }]
        firestore().collection(uid).doc('spends').collection('spends').get().then(async (querySnapshot) => {
            await querySnapshot.forEach(function (doc, index) {
                spends.push({ key: doc.id, data: doc.data() })
                if (index == querySnapshot.size - 1) {
                    for (let i = 0; i < spends.length; i++) {
                        const element = spends[i];
                        grandTotal += Number(element.data.money)
                        let monthIndex = new Date(element.data.date).getMonth()
                        let fullyear = new Date(element.data.date).getFullYear()
                        if (!normalizedData[`${fullyear}`]) {
                            normalizedData[`${fullyear}`] = { total: 0, list: [] }
                        }
                        normalizedData[`${fullyear}`].list.push(element);
                        normalizedData[`${fullyear}`].total += Number(element.data.money)
                        normalizedData[`${fullyear}`].date = element.data.date
                        normalizedData[`${fullyear}`].monthYear = `${fullyear}`
                    }
                    let normalizedArray = Object.values(normalizedData)
                    normalizedArray.sort((a, b) => new Date(b.date) - new Date(a.date))
                    setSpends([...normalizedArray])
                    setTotalSpends(grandTotal)
                    // setSpends(arr)
                }
            })
        })
        // let arr = spends.filter(x>)
    }, [isBudgetActive])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff' }}>{totalSpends + '€'}</Text>
            </View>
            <Text style={{ marginHorizontal: 25, color: '#fff' }}>Rūšiuoti pagal metus</Text>
            {spends && <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <FlatList
                    data={spends}
                    style={{ flex: 1 }}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <TouchableOpacity key={item.key} onPress={() => setActiveIndex(activeIndex == index ? undefined : index)} style={styles.btnCont}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.labelText}>{item.monthYear}</Text>
                                        </View>
                                        <View style={{}}>
                                            <Text style={styles.labelText}>{item.total + '€'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {activeIndex == index && <SubEntries data={spends[index].list} />}
                            </>
                        )
                    }}
                />
            </ScrollView>}
        </View>
    )
}
const styles = StyleSheet.create({
    btnCont: {
        height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#479B92', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    labelText: {
        fontSize: 16, color: '#fff'
    }
})

export default ByYearly;