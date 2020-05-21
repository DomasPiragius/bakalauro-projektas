import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header/index'
const Formulas = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            {/* <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Formulės</Text>
            </View> */}
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', marginTop: 10}}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Terminai</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>GPM – gyventojų pajamų mokestis.</Text>
                    </View>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>VDU – vidutinis darbo užmokestis.</Text>
                    </View>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>VMI – valstybinė mokesčių inspekcija.</Text>
                    </View>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>„SoDra“ – Socialinis draudimas.</Text>
                    </View>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>MMA – minimalioji mėnesinė alga.</Text>
                    </View>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>NPD – neapmokestinamasis pajamų dydis.</Text>
                    </View>
                    <View style={{ height: 70, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', paddingHorizontal: 10 }}> „SoDra“ grindys –  socialinių garantijų  užtikrinimas MMA neuždirbantiems asmenims.</Text>
                    </View>
                    <View style={{ height: 90, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', paddingHorizontal: 10 }}>“SoDra” lubos – atleidimas nuo “SoDrai” mokamų mokesčių, pasiekus didžiausias įmanomas įmokas. (netaikomas privalomajam sveikatos draudimui)</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Mokesčių skaičiavimas:</Text>
                    <View style={{ borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', paddingHorizontal: 10 }}>{`-	Šiuo metu minimalioji mėnesinė alga „ant popieriaus“ – 607€.
-	Pajamų mokestis - 20% nuo atlyginimo.
-	SoDrai mokesčiai sudaro 19,5%, iš kurių:
    •	Pensijų draudimas 8,72%
    •	Privalomas sveikatos draudimas 6,98%
    •	Ligos socialinis draudimas 2,09%
    •	Motinystės socialinis draudimas 1,71%

-	Bendrai gaunasi – 39,5 % nuo atlyginimo. Gali kilti papildomus 2,1% arba 3%, jei papildomai kaupiate pensijai.
-	Jei esate užsienietis – nereikia mokėti 6,98% nuo gaunamo atlyginimo už privalomą socialinį draudimą.
-	Jei uždirbate mažiau nei MMA, Jums gali būti taikomos “SoDros grindys”, apskaičiuojamos pagal (MMA – Jūsų atlyginimas) * 0,2127. Tai yra papildomi mokesčiai Jūsų darbdaviui, garantuojantys pilnas socialines išmokas, išskyrus, kai:
    •	Esate jaunesnis (-ė) nei 24 metų.
    •	Gaunate senatvės pensiją.
    •	Dirbate daugiau nei vienoje darbovietėje (pagal darbo sutartį arba tarnybos pagrindu).

-	NPD taip pat gali būti taikomas, tačiau pritaikomas tik 20% GPM mokamiems mokesčiams.
    •	Apskaičiuojamas pagal --- > 350 – 0,17 * (Atlyginimas ant popieriaus – 607)
    •	Priklausant 0 – 25% darbingumo grupei NPD – 645.
    •	Priklausant 30-55% darbingumo grupei NPD – 600.
    •	Pritaikomas GPM pagal („ant popieriaus“ – NPD) * 0,2

-	Jei pasiekiate 84 VDU, mokesčiai pasikeičia tokiu būdu:
    •	GPM padidėja iki 32% nuo Jūsų atlyginimo.
    •	SoDrai mokami mokesčiai sumažėja iki 6,98% dėl „SoDros“ taikomų lubų (Privalomajam sveikatos draudimui lubos netaikomos).
Darbadavio sumokami mokesčiai taip pat priklauso nuo:
    •	Ar Jūsų darbo sutartis terminuota, ar neterminuota, kadangi terminuota darbo sutartis papildomai kelia darbdavio sumokamus mokesčius 0,72% nuo darbo užmokesčio „ant popieriaus“.
    •	Kuriai nelaimingų atsitikimų ir profesinių ligų grupei priskirtas darbdavys. Tai darbdavio sumokamus mokesčius papildomai kelia 0,14 – 1,4 %
`}</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
export default Formulas;