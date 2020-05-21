import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, FlatList, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import SubEntries from './SubEntries'


const ViewBudget = ({ isBudgetActive }) => {

    const [spends, setSpends] = useState([{ total: 0 }, { total: 0 }, { total: 0 }, { total: 0 }, { total: 0 }, { total: 0 }, { total: 0 }, { total: 0 }, { total: 0 }])
    const [totalSpends, setTotalSpends] = useState(0)
    const [activeIndex, setActiveIndex] = useState(undefined)

    useEffect(() => {

        let uid = auth().currentUser.uid;
        let spends = []
        firestore().collection(uid).doc('spends').collection('spends').get().then(async (querySnapshot) => {
            await querySnapshot.forEach(function (doc, index) {
                spends.push({ key: doc.id, data: doc.data() })
                if (index == querySnapshot.size - 1) {
                    let cat0 = { total: 0, list: [] }
                    let cat1 = { total: 0, list: [] }
                    let cat2 = { total: 0, list: [] }
                    let cat3 = { total: 0, list: [] }
                    let cat4 = { total: 0, list: [] }
                    let cat5 = { total: 0, list: [] }
                    let cat6 = { total: 0, list: [] }
                    let cat7 = { total: 0, list: [] }
                    let cat8 = { total: 0, list: [] }

                    let cat0List = spends.filter(x => x.data.categoryIndex == 0)
                    let cat1List = spends.filter(x => x.data.categoryIndex == 1)
                    let cat2List = spends.filter(x => x.data.categoryIndex == 2)
                    let cat3List = spends.filter(x => x.data.categoryIndex == 3)
                    let cat4List = spends.filter(x => x.data.categoryIndex == 4)
                    let cat5List = spends.filter(x => x.data.categoryIndex == 5)
                    let cat6List = spends.filter(x => x.data.categoryIndex == 6)
                    let cat7List = spends.filter(x => x.data.categoryIndex == 7)
                    let cat8List = spends.filter(x => x.data.categoryIndex == 8)

                    cat0.list = cat0List;
                    cat1.list = cat1List;
                    cat2.list = cat2List;
                    cat3.list = cat3List;
                    cat4.list = cat4List;
                    cat5.list = cat5List;
                    cat6.list = cat6List;
                    cat7.list = cat7List;
                    cat8.list = cat8List;

                    // Grand Total
                    let grandTotal = 0
                    if (cat0List.length) {
                        let total = 0;
                        for (let i = 0; i < cat0List.length; i++) {
                            total += Number(cat0List[i].data.money)
                        }
                        cat0.total = total;
                        grandTotal += total
                    }
                    if (cat1List.length) {
                        let total = 0;
                        for (let i = 0; i < cat1List.length; i++) {
                            total += Number(cat1List[i].data.money)
                        }
                        cat1.total = total;
                        grandTotal += total
                    }
                    if (cat2List.length) {
                        let total = 0;
                        for (let i = 0; i < cat2List.length; i++) {
                            total += Number(cat2List[i].data.money)
                        }
                        cat2.total = total;
                        grandTotal += total
                    }
                    if (cat3List.length) {
                        let total = 0;
                        for (let i = 0; i < cat3List.length; i++) {
                            total += Number(cat3List[i].data.money)
                        }
                        cat3.total = total;
                        grandTotal += total
                    }
                    if (cat4List.length) {
                        let total = 0;
                        for (let i = 0; i < cat4List.length; i++) {
                            total += Number(cat4List[i].data.money)
                        }
                        cat4.total = total;
                        grandTotal += total
                    }
                    if (cat5List.length) {
                        let total = 0;
                        for (let i = 0; i < cat5List.length; i++) {
                            total += Number(cat5List[i].data.money)
                        }
                        cat5.total = total;
                        grandTotal += total
                    }
                    if (cat6List.length) {
                        let total = 0;
                        for (let i = 0; i < cat6List.length; i++) {
                            total += Number(cat6List[i].data.money)
                        }
                        cat6.total = total;
                        grandTotal += total
                    }
                    if (cat7List.length) {
                        let total = 0;
                        for (let i = 0; i < cat7List.length; i++) {
                            total += Number(cat7List[i].data.money)
                        }
                        cat7.total = total;
                        grandTotal += total
                    }
                    if (cat8List.length) {
                        let total = 0;
                        for (let i = 0; i < cat8List.length; i++) {
                            total += Number(cat8List[i].data.money)
                        }
                        cat8.total = total;
                        grandTotal += total
                    }
                    setTotalSpends(grandTotal)
                    setSpends([...[cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8]])
                }
            });

        })

    }, [isBudgetActive])

    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff' }}>{totalSpends + '€'}</Text>
            </View>
            <Text style={{ marginHorizontal: 25, color: '#fff' }}>Rūšiuoti pagal kategoriją</Text>
            {spends && <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 0 ? undefined : 0)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Mokesčiai</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[0].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 0 && <SubEntries data={spends[0].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 1 ? undefined : 1)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Komunalinės</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[1].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 1 && <SubEntries data={spends[1].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 2 ? undefined : 2)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Nuoma</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[2].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 2 && <SubEntries data={spends[2].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 3 ? undefined : 3)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Maistas</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[3].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 3 && <SubEntries data={spends[3].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 4 ? undefined : 4)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Pramogos</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[4].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 4 && <SubEntries data={spends[4].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 5 ? undefined : 5)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Gėrimai</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[5].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 5 && <SubEntries data={spends[5].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 6 ? undefined : 6)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Degalai</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[6].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 6 && <SubEntries data={spends[6].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 7 ? undefined : 7)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Turto prižiūrėjimas</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[7].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 7 && <SubEntries data={spends[7].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 8 ? undefined : 8)} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelText}>Rūbai</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.labelText}>{spends[8].total + '€'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 8 && <SubEntries data={spends[8].list} />}
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
export default ViewBudget;