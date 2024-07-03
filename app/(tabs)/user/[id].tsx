import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Redirect, useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = () => {
    const { id } = useLocalSearchParams();
    const { user, loading } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('loginFormData');
            router.push('/auth/login');
        } catch (e) {
            console.error('Error clearing data', e);
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!user || !user.email || !user.role) {
        return <Redirect href="/auth/login" />;
    }

    return (
        <View style={styles.container}>
            <Text>This is User Screen {id} </Text>
            <Text>Email: {user.email}</Text>
            <Text>Role: {user.role}</Text>
            <Text>Access Token: {user.accessToken}</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
});
