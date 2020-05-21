import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header';
import { Picker } from '@react-native-community/picker';

const TaxCalculator = ({ navigation }) => {

    const [isBasicOpen, setIsBasicopen] = useState(false)
    const [result, setResult] = useState('')
    const [salary, setSalary] = useState('')
    const [NDPLabel, setNDPLabel] = useState('Calculated automatically')
    const [accumulateForRetirementExtraLabel, setAccumulateForRetirementExtraLabel] = useState('I do not accumulate')
    const [yourNationalityLabel, setYourNationalityLabel] = useState('Lithuanian')

    useEffect(() => {
        evalResult()
    }, [salary, NDPLabel, accumulateForRetirementExtraLabel, yourNationalityLabel])


    const goToCustomTaxCal = () => {
        navigation.navigate('CustomTaxCalculator')
    }

    const onTextChangeSalary = (text) => {
        setSalary(text)
        setTimeout(() => {
            // evalResult()
        }, 500)
    }

    const onChangeNPD = (itemValue, itemIndex) => {

        let X = Number(salary);
        let Z = 0;
        if (itemValue == 'Calculated automatically') {
            let notNegativePart = X - 607 < 0 ? 0 : X - 607;
            Z = 350 - 0.17 * notNegativePart
            Z = Z < 0 ? 0 : Z
        } else if (itemValue == 'Don’t calculate') {
            Z = 0
        } else if (itemValue == '30-55%') {
            Z = 600
        } else if (itemValue == '0-25%') {
            Z = 645
        }
        let notNegativePart = (X - Z) < 0 ? 0 : (X - Z)
        let Y = notNegativePart * 0.2
        return Y
    }

    const onChangeAccumulateForRetirementExtra = (itemValue, itemIndex) => {
        // setAccidentsAndOccupationalDiseasesLabel(itemValue)

        let X = Number(salary);
        let Z = 0
        let Y = 0
        let notNegativePart = X - 607 < 0 ? 0 : X - 607;
        Z = 350 - 0.17 * notNegativePart
        let notNegativePartInY = X - Z < 0 ? 0 : X - Z
        if (itemValue == 'I do not accumulate') {
            Y = X * 0.0872
        } else if (itemValue == 'I am accumulating 2.1%') {
            Y = X * 0.1082
        } else if (itemValue == 'I am accumulating 3%') {
            Y = X * 0.1172
        }
        return Y
    }

    const onChangeYourNationality = (itemValue, itemIndex) => {
        // setYourNationalityLabel(itemValue)
        let X = Number(salary);
        let Z = 0
        let Y = 0
        let notNegativePart = X - 607 < 0 ? 0 : X - 607;
        Z = 350 - 0.17 * notNegativePart
        let notNegativePartInY = X - Z < 0 ? 0 : X - Z
        if (itemValue == 'Lithuanian') {
            Y = X * 0.0698
        } else if (itemValue == 'Foreigner') {
            Y = 0
        }
        return Y

    }

    const evalResult = () => {
        let X = Number(salary);
        let NDP = onChangeNPD(NDPLabel)
        let accumulateForRetirementExtra = onChangeAccumulateForRetirementExtra(accumulateForRetirementExtraLabel)
        let yourNationality = onChangeYourNationality(yourNationalityLabel)

        let output1 = X - NDP - (accumulateForRetirementExtra) - (yourNationality) - X * 0.0209 - X * 0.0171
        console.log(output1)
        setResult(output1.toFixed(2))
        // if (!isNaN(Number(text.trim()))) {
        //     let X = Number(text)
        //     if (X <= 0) {
        //         setResult(0)
        //     } else {
        //         let notNegativePart = X - 607 < 0 ? 0 : X - 607;
        //         let Z = 350 - 0.17 * notNegativePart
        //         Z = Z < 0 ? 0 : Z
        //         let y = X - (X - Z) * 0.2 - X * 0.0872 - X * 0.0698 - X * 0.0209 - X * 0.0171
        //         if (y <= 0) {
        //             setResult(0)
        //         } else {
        //             setResult(y)
        //         }
        //     }
        // }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Mokesčių apskaičiavimas</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8, backgroundColor: '#479B92' }}>
                    <TouchableOpacity onPress={() => setIsBasicopen(!isBasicOpen)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, color: '#fff' }}>Darbuotojo</Text>
                    </TouchableOpacity>
                    {isBasicOpen && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text style={{ color: '#fff' }}>Ant popieriaus</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                                <TextInput onChangeText={onTextChangeSalary} keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                        <Text style={{ color: '#fff' }}>NPD skaičiavimas</Text>
                        <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                selectedValue={NDPLabel}
                                style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                                onValueChange={(itemValue) => {
                                    setNDPLabel(itemValue); setTimeout(() => {
                                        // evalResult()
                                    }, 500)
                                }}>
                                <Picker.Item label="Paskaičiuojamas automatiškai" value="Calculated automatically" />
                                <Picker.Item label="Netaikyti" value="Don’t calculate" />
                                <Picker.Item label="30-55% darbingumas" value="30-55%" />
                                <Picker.Item label="0-25% darbingumas" value="0-25%" />
                            </Picker>
                        </View>
                        <Text style={{ color: '#fff' }}>Ar kaupiate papildomai pensijai?</Text>
                        <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                selectedValue={accumulateForRetirementExtraLabel}
                                style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                                onValueChange={(itemValue) => {
                                    setAccumulateForRetirementExtraLabel(itemValue); setTimeout(() => {
                                        // evalResult()
                                    }, 500)
                                }}>
                                <Picker.Item label="Nekaupiama" value="I do not accumulate" />
                                <Picker.Item label="2,1%" value="I am accumulating 2.1%" />
                                <Picker.Item label="3%" value="I am accumulating 3%" />
                            </Picker>
                        </View>
                        <Text style={{ color: '#fff' }}>Jūsų pilietybė:</Text>
                        <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                selectedValue={yourNationalityLabel}
                                style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                                onValueChange={(itemValue) => {
                                    setYourNationalityLabel(itemValue); setTimeout(() => {
                                        // evalResult()
                                    }, 500)
                                }}>
                                <Picker.Item label="Lietuvis" value="Lithuanian" />
                                <Picker.Item label="Užsienietis" value="Foreigner" />
                            </Picker>
                        </View>
                        <View>
                            <Text style={{ color: '#fff' }}>Į rankas</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, justifyContent: 'center', paddingHorizontal: 10, backgroundColor: '#D1E7F3' }}>
                                <Text>{result}</Text>
                            </View>
                        </View>
                    </View>}
                </View>
                <TouchableOpacity onPress={goToCustomTaxCal} style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8, backgroundColor: '#479B92' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, color: '#fff' }}>Darbdavio</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}

export default TaxCalculator;