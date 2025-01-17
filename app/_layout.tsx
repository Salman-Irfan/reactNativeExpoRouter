import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar, Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <PaperProvider>
        {/* <SafeAreaView > */}

          <StatusBar />
        
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              {/* stack.screen props options start */}
              <Stack.Screen
                name="(stacks)/details"
                options={{
                  headerShown: true, // Show the header
                  title: 'Custom Details Title', // Set your custom title here
                  headerStyle: { backgroundColor: '#f4511e' },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  // headerTitle: props => <Text>any</Text>,
                }}
              />
              {/* stack.screen props options end */}
              {/* modal stack */}
              <Stack.Screen
                name="(stacks)/(modal)/modal"
                options={{
                  // Set the presentation mode to modal for our modal route.
                  presentation: 'modal',
                }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        
        {/* </SafeAreaView> */}
      </PaperProvider>
    </>
  );
}
