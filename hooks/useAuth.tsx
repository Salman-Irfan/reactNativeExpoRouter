import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('loginFormData');
                const storedUser = jsonValue != null ? JSON.parse(jsonValue) : null;
                setUser(storedUser);
            } catch (e) {
                console.error('Error reading user data', e);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
};
