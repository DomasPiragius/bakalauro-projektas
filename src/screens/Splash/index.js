import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.navigate('Home')
                } else {
                    navigation.navigate('Login')
                }
            })
        }, 1000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#394948' }}>
            <Image style={{ width: 150, height: 150 }} source={require('../../images/logo.png')} />
        </View>
    )
}

export default Splash;