import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header';
import { Picker } from '@react-native-community/picker';

const CustomTaxCalculator = () => {

    const [output1, setOutput1] = useState('')
    const [output2, setOutput2] = useState('')
    const [salary, setSalary] = useState('')

    const [NDPLabel, setNDPLabel] = useState('Calculated automatically')
    const [accumulateForRetirementExtraLabel, setAccumulateForRetirementExtraLabel] = useState('I do not accumulate')
    const [additionalInformationLabel, setAdditionalInformationLabel] = useState('None of the options')
    const [yourNationalityLabel, setYourNationalityLabel] = useState('Lithuanian')
    const [accidentsAndOccupationalDiseasesLabel, setAccidentsAndOccupationalDiseasesLabel] = useState('1 - 0,14%')
    const [employmentContractLabel, setEmploymentContractLabel] = useState('Indefinite duration')

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
        // setAccumulateForRetirementExtraLabel(itemValue)

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

    const onChangeAdditionalInformation = (itemValue, itemIndex) => {
        // setAdditionalInformationLabel(itemValue)

        let X = Number(salary);
        let Z = 0
        let Y = 0
        let notNegativePart = X - 607 < 0 ? 0 : X - 607;
        Z = 350 - 0.17 * notNegativePart
        if (itemValue == 'I work in several workplaces') {
            Y = 0
        } else if (itemValue == 'I am receiving a retirement pension') {
            Y = 0
        } else if (itemValue == 'I am younger than 24m') {
            Y = 0
        } else if (itemValue == 'None of the options') {
            if (X <= 607) {
                Y = ((607 - X) < 0 ? 0 : (607 - X)) * 0.195
            } else {
                Y = ((607 - X) < 0 ? 0 : (607 - X)) * 0.2127

            }
        }
        return Y

        // setAdditionalInformation(Y);
    }

    const onChangeEmploymentContract = (itemValue, itemIndex) => {
        // setEmploymentContractLabel(itemValue)
        let X = Number(salary);
        let Z = 0
        let Y = 0
        let notNegativePart = X - 607 < 0 ? 0 : X - 607;
        Z = 350 - 0.17 * notNegativePart
        if (X <= 607)
            X = 607
        if (itemValue == 'Indefinite duration') {
            Y = X * 0.0131
        } else if (itemValue == 'Fixed term employment contract') {
            Y = X * 0.0203
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

    const onChangeAccidentsAndOccupationalDiseases = (itemValue, itemIndex) => {
        // setAccidentsAndOccupationalDiseasesLabel(itemValue)
        let X = Number(salary);
        let Z = 0
        let Y = 0
        let notNegativePart = X - 607 < 0 ? 0 : X - 607;
        Z = 350 - 0.17 * notNegativePart
        if (X <= 607)
            X = 607
        if (itemValue == '1 - 0,14%') {
            Y = X * 0.0014
        } else if (itemValue == '2 - 0,4%') {
            Y = X * 0.004
        } else if (itemValue == '2 - 0,7%') {
            Y = X * 0.007
        } else if (itemValue == '2 - 1,4%') {
            Y = X * 0.014
        }

        return Y

    }

    const onPressCalculate = () => {

        let X = Number(salary);

        let NDP = onChangeNPD(NDPLabel)
        let accumulateForRetirementExtra = onChangeAccumulateForRetirementExtra(accumulateForRetirementExtraLabel)
        let yourNationality = onChangeYourNationality(yourNationalityLabel)
        let additionalInformation = onChangeAdditionalInformation(additionalInformationLabel)
        let accidentsAndOccupationalDiseases = onChangeAccidentsAndOccupationalDiseases(accidentsAndOccupationalDiseasesLabel)
        let employmentContract = onChangeEmploymentContract(employmentContractLabel)

        let output1 = X - NDP - (accumulateForRetirementExtra) - (yourNationality) - X * 0.0209 - X * 0.0171
        let output2 = 0
        let nextX = X <= 607 ? 607 : X
        if (additionalInformationLabel == 'None of the options') {
            if (yourNationalityLabel == 'Lithuanian') {
                output2 = X + employmentContract + nextX * 0.0016 + nextX * 0.0016 + accidentsAndOccupationalDiseases + additionalInformation
            } else if (yourNationalityLabel == 'Foreigner') {
                output2 = X + employmentContract + nextX * 0.0016 + nextX * 0.0016 + accidentsAndOccupationalDiseases + ((607 - X) < 0 ? 0 : (607 - X)) * 0.12522
                console.log(output2)
            }
        } else {
            output2 = X + employmentContract + X * 0.0016 + X * 0.0016 + accidentsAndOccupationalDiseases
        }
        setOutput1(output1.toFixed(2))
        setOutput2(output2.toFixed(2))
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Nustatyti</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <View>
                    <Text style={{ color: '#fff' }}>Jūsų atlyginimas “Ant popieriaus”‬</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                        <TextInput value={salary} onChangeText={(text) => { !isNaN(Number(text.trim())) ? setSalary(text.trim()) : null }} keyboardType={'numeric'} style={{ fontSize: 18 }} />
                    </View>
                </View>
                <Text style={{ color: '#fff' }}>NPD skaičiavimas</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={NDPLabel}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue) => { setNDPLabel(itemValue) }}>
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
                        onValueChange={(itemValue) => { setAccumulateForRetirementExtraLabel(itemValue) }}>
                        <Picker.Item label="Nekaupiama" value="I do not accumulate" />
                        <Picker.Item label="2,1%" value="I am accumulating 2.1%" />
                        <Picker.Item label="3%" value="I am accumulating 3%" />
                    </Picker>
                </View>
                <Text style={{ color: '#fff' }}>Papildoma informacija</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={additionalInformationLabel}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue) => { setAdditionalInformationLabel(itemValue) }}>
                        <Picker.Item label="Dirbu daugiau nei vienoje darbovietėje" value="I work in several workplaces" />
                        <Picker.Item label="Gaunu senatvės pensiją" value="I am receiving a retirement pension" />
                        <Picker.Item label="Esu jaunesnis (-ė) nei 24m" value="I am younger than 24m" />
                        <Picker.Item label="Nei vienas iš variantų" value="None of the options" />

                    </Picker>
                </View>
                <Text style={{ color: '#fff' }}>Jūsų darbo sutarties tipas:</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={employmentContractLabel}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue) => { setEmploymentContractLabel(itemValue) }}>
                        <Picker.Item label="Neterminuota darbo sutartis" value="Indefinite duration" />
                        <Picker.Item label="Terminuota darbo sutartis" value="Fixed term employment contract" />
                    </Picker>
                </View>
                <Text style={{ color: '#fff' }}>Jūsų pilietybė:</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={yourNationalityLabel}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue) => setYourNationalityLabel(itemValue)}>
                        <Picker.Item label="Lietuvis" value="Lithuanian" />
                        <Picker.Item label="Užsienietis" value="Foreigner" />
                    </Picker>
                </View>
                <Text style={{ color: '#fff' }}>Kuriai nelaimingų atsitikimų ir profesinių ligų grupei priskirtas darbdavys?</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={accidentsAndOccupationalDiseasesLabel}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue) => setAccidentsAndOccupationalDiseasesLabel(itemValue)}>
                        <Picker.Item label="I grupė – 0,14%" value="1 - 0,14%" />
                        <Picker.Item label="II grupė – 0,4%" value="2 - 0,4%" />
                        <Picker.Item label="III grupė – 0,7%" value="2 - 0,7%" />
                        <Picker.Item label="IV grupė – 1,4%" value="2 - 1,4%" />
                    </Picker>
                </View>
                {output1 ?
                    <View>
                        <Text style={{ color: '#fff' }}>Atlyginimas atskaičius mokesčius</Text>
                        <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                            <TextInput editable={false} style={{ fontSize: 18, color: '#000' }} value={`${output1}€`} />
                        </View>
                    </View> : null}
                {output1 ?
                    <View>
                        <Text style={{ color: '#fff' }}>Bendra darbo vietos kaina</Text>
                        <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                            <TextInput editable={false} style={{ fontSize: 18, color: '#000' }} value={`${output2}€`} />
                        </View>
                    </View> : null}

                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity onPress={onPressCalculate} style={{ flex: 1, height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#479B92', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', }}>Apskaičiuoti</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default CustomTaxCalculator;