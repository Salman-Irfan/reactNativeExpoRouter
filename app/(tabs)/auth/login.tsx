import { StyleSheet, Text, View, TextInput, Button, Alert, useColorScheme } from 'react-native';
import React, { useState } from 'react';

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
        role: '',
        accessToken: '',
    });

    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const handleInputChange = (field: string, value: string) => {
        setLoginFormData({ ...loginFormData, [field]: value });
    };

    const handleUserLogin = () => {
        const userCredentials = { email: 'User@user.com', password: 'Password' };

        if (
            loginFormData.email === userCredentials.email &&
            loginFormData.password === userCredentials.password
        ) {
            const accessToken = Math.random().toString(36).substring(2);
            const formData = { ...loginFormData, role: 'user', accessToken };
            setLoginFormData(formData);
            console.log(formData);
            Alert.alert('User Login Successful', `
                Email: ${formData.email}, 
                Password: ${formData.password},
                Role: ${formData.role},
                Access Token: ${formData.accessToken}
            `);
        } else {
            Alert.alert('Login Failed', 'Invalid user credentials');
        }
    };

    const handleAdminLogin = () => {
        const adminCredentials = { email: 'Admin@admin.com', password: 'Password' };

        if (
            loginFormData.email === adminCredentials.email &&
            loginFormData.password === adminCredentials.password
        ) {
            const accessToken = Math.random().toString(36).substring(2);
            const formData = { ...loginFormData, role: 'admin', accessToken };
            setLoginFormData(formData);
            console.log(formData);
            Alert.alert('Admin Login Successful', `
                Email: ${formData.email}, 
                Password: ${formData.password},
                Role: ${formData.role},
                Access Token: ${formData.accessToken}
            `);
        } else {
            Alert.alert('Login Failed', 'Invalid admin credentials');
        }
    };

    return (
        <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
            <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>Login</Text>
            <TextInput
                style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
                placeholder="Email"
                placeholderTextColor={isDarkMode ? '#ccc' : '#555'}
                value={loginFormData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
                placeholder="Password"
                placeholderTextColor={isDarkMode ? '#ccc' : '#555'}
                value={loginFormData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry
            />
            <Button title="Login as User" onPress={handleUserLogin} color={isDarkMode ? '#1f1f1f' : '#007BFF'} />
            <View style={styles.space} />
            <Button title="Login as Admin" onPress={handleAdminLogin} color={isDarkMode ? '#1f1f1f' : '#FF4500'} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    lightContainer: {
        backgroundColor: '#ffffff',
    },
    darkContainer: {
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    lightText: {
        color: '#000000',
    },
    darkText: {
        color: '#ffffff',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    lightInput: {
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
        color: '#000',
    },
    darkInput: {
        borderColor: '#444',
        backgroundColor: '#222',
        color: '#fff',
    },
    space: {
        height: 10,
    },
});
