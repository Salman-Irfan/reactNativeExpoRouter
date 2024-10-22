import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="role" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Role',
                        title: 'role overview',
                    }}
                />
                {/* dynamic route */}
                <Drawer.Screen
                    name="tasks/[id]" // This is the name of the page and must match the url from root
                    initialParams={{ id: '123' }} // Pass your dynamic id here
                    options={{
                        drawerLabel: 'Tasks',
                        title: 'overview',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerLayout

const styles = StyleSheet.create({})