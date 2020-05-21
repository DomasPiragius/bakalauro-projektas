import React from 'react';
import { View, Text } from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash'
import Home from './screens/Home';
import TaxCalculator from './screens/TaxCalculator';
import CustomTaxCalculator from './screens/CustomTaxCalculator/index';
import BudgetPlanner from './screens/BudgetPlanner';
import Formulas from './screens/Formulas';
import News from './screens/News';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{ title: 'Welcome', header: () => { } }} name="splash" component={Splash} />
                <Stack.Screen options={{ title: 'Prisijungimas', header: () => { } }} name="Login" component={Login} />
                <Stack.Screen options={{ title: '', header: () => { } }} name="Home" component={Home} />
                <Stack.Screen options={{ title: '' }} name="TaxCalculator" component={TaxCalculator} />
                <Stack.Screen options={{ title: '' }} name="CustomTaxCalculator" component={CustomTaxCalculator} />
                <Stack.Screen options={{ title: 'Biudžeto planavimas' }} name="BudgetPlanner" component={BudgetPlanner} />
                <Stack.Screen options={{ title: 'Formulės' }} name="Formulas" component={Formulas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;