import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { roots } from '../screens/Home'

const Loader = () => {
  return (
    <SafeAreaView style={{width : "100%", height : "100%", justifyContent :"center", alignItems : "center" }}>
      <ActivityIndicator size="large" color={roots.backgroundColor} />
    </SafeAreaView>
  )
}

export default Loader

const styles = StyleSheet.create({})