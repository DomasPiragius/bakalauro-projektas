import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';


const Login = ({ navigation }) => {


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '173137937387-vq1m100n65hoj5g6ud942aagccmd3266.apps.googleusercontent.com', // From Firebase Console Settings
        });
    }, [])


    const _onPressG = async () => {
        try {
            GoogleSignin.hasPlayServices()
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(googleCredential);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }

        }
    }
    return (
        <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 25, justifyContent: 'space-around', backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginTop: 30 }} >
                <Image style={{ width: 150, height: 150 }} source={require('../../images/logo.png')} />
            </View>
            <View>
                <TouchableOpacity onPress={_onPressG} style={{ height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', backgroundColor: '#D1E7F3', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://www.freepngimg.com/thumb/google/66893-guava-logo-google-plus-suite-png-image-high-quality.png' }} />
                        </View>
                        <Text style={{}}>Prisijungti su Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}
export default Login;