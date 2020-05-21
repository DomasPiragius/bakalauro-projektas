import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import AddBudget from './AddBuget';
import ByMonth from './ByMonth';
import ByYearly from './ByYearly';
import ThisMonth from './ThisMonth';
import ViewBudget from './ViewBudget';
import Swiper from '../Components/RNSwiper'

const BudgetPlanner = () => {

    const [isBudgetActive, setIsBudgetActive] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <Swiper
                activeDotColor={'#fff'}
                onIndexChanged={(index) => setIsBudgetActive(index)}
                style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <AddBudget />
                </View>
                <View style={{ flex: 1 }}>
                    <ThisMonth isBudgetActive={isBudgetActive} />
                </View>
                <View style={{ flex: 1 }}>
                    <ByMonth isBudgetActive={isBudgetActive} />
                </View>
                <View style={{ flex: 1 }}>
                    <ByYearly isBudgetActive={isBudgetActive} />
                </View>
                <View style={{ flex: 1 }}>
                    <ViewBudget isBudgetActive={isBudgetActive} />
                </View>
            </Swiper>
        </View>
    )
}
export default BudgetPlanner;