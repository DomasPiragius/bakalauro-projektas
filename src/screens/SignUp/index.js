import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

const SignUp = () => {
    return (
        <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', }}>
            <View style={{ alignItems: 'center', marginTop: 30 }} >
                <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }} />
            </View>
            <View>
                <Text >Name</Text>
                <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                    <TextInput style={{ fontSize: 18 }} />
                </View>
            </View>
            <View>
                <Text >Email</Text>
                <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                    <TextInput style={{ fontSize: 18 }} />
                </View>
            </View>
            <View>
                <Text>Password</Text>
                <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                    <TextInput secureTextEntry style={{ fontSize: 18 }} />
                </View>
            </View>
            <View>
                <Text>Re enter password</Text>
                <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                    <TextInput secureTextEntry style={{ fontSize: 18 }} />
                </View>
            </View>
            <TouchableOpacity style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                    <Text style={{ marginVertical: 10 }}>Already have an Account?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SignUp;