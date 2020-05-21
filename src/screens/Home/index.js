import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    const goToTaxCalculator = () => {
        navigation.navigate('TaxCalculator')
    }
    const goToBudgetPlanner = () => {
        navigation.navigate('BudgetPlanner')
    }
    const goToFormulas = () => {
        navigation.navigate('Formulas')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#394948', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', }} >
                <Image style={{ width: 100, height: 100 }} source={require('../../images/logo.png')} />
            </View>
            <View style={{ marginHorizontal: 25 }} >
                <TouchableOpacity onPress={goToTaxCalculator} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.btnText}>Mokesčių apskaičiavimas</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/calculator.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToBudgetPlanner} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.btnText}>Išlaidos</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/budget_planner.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToFormulas} style={styles.btnCont}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.btnText}>Formulės</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/formulas.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}
const styles = StyleSheet.create({
    btnCont: {
        backgroundColor: '#479B92', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8
    },
    btnText: {
        flex: 1, textAlign: 'center', fontSize: 20, color: '#fff'
    }
})
export default Home;