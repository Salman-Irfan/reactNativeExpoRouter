import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Redirect } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';

const User = () => {
    const { id } = useLocalSearchParams();
    const { user, loading } = useAuth();

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
