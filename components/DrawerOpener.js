import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { roots } from '../screens/Home'
import { useNavigation } from '@react-navigation/native'
import Options from './icons/Options'

const DrawerOpener = () => {
    const navigationHook = useNavigation();
  return (
    <Pressable  onPress={()=>navigationHook.openDrawer()}>
        {/* <OptionIcon /> */}
        {/* <OptionIcon /> */}
        <Options />
        {/* <Text style={{color:"white", fontSize : 18}}>|||</Text>  */}
      </Pressable>
  )
}

export default DrawerOpener

const styles = StyleSheet.create({})