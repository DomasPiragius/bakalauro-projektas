import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <TouchableOpacity style={{ height: 50, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 25 }}>
            <Image resizeMode={'contain'} style={{ width: 35, height: 35 }} source={require('../../../images/arrow_back.png')} />
        </TouchableOpacity>
    )
}

export default Header