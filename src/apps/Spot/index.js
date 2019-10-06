import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Image, AsyncStorage, StyleSheet } from 'react-native';

import logo from '../../../assets/logo.png';
import { List } from '../../components';


export default function Spot() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={logo}
            />
            <ScrollView>
                {techs.map(tech => <List key={tech} tech={tech} url="/spots" />)}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 20,
    }
})