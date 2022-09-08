import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function Tempo(props) {
    return (
        <>
            <Text style={styles.texto}>Min: {props.data.min}</Text>
            <Text style={styles.texto}>Max: {props.data.max}</Text>
            <Text style={styles.texto}>Descrição: {props.data.description}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 17,
        marginTop: 10
    },
});