import React, { useState } from 'react';
import { SafeAreaView, AsyncStorage, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import api from '../../services/api';


export default function Booking({ navigation }) {
    const id = navigation.getParam('id');
    const [date, setDate] = useState('');

    const handleSubmit = async () => {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, { date }, {
            headers: { user_id }
        });

        Alert.alert('Solicitação de reserva enviada.');

        navigation.navigate('Spot');
    };

    const handleCancel = () => {
        navigation.navigate('Spot');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Solicitar reseva</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleCancel}
            >
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    cancelButton: {
        backgroundColor: '#ccc',
        marginTop: 10
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});
