import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const Modal = () => {
    const isPresented = router.canGoBack();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'green' }}>
            {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
            {!isPresented && <Link href="../">Dismiss</Link>}
            {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
            <StatusBar style="light" />
        </View>
    )
}

export default Modal

const styles = StyleSheet.create({})