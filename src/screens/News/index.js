import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import Header from '../Components/Header'
const CustomTaxCalculator = () => {


    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Naujienos</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <View style={styles.btnCont}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.labelText}>Article 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.labelText}>Article 2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.labelText}>Article 3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.labelText}>Article 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    btnCont: {
        backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8
    },
    labelText: {
        flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20, color: '#fff', textDecorationLine: 'underline', fontStyle: 'italic'
    }
})

export default CustomTaxCalculator;