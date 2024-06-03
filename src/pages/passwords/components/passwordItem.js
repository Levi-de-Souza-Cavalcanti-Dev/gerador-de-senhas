import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export function PasswordItem({ data, removePassword }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>
                {isPasswordVisible ? data : '•'.repeat(data.length)}
            </Text>
            <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="#FFF" />
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#FFF"
    }
});
