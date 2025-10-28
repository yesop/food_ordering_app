import CustomeButton from '@/components/CustomeButton'
import CustomeInput from '@/components/CustomeInput'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { images } from '../../constants'

export default function _layout() {
  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
          <View className="h-full relative" style={{height: Dimensions.get("screen").height / 2.25}}>
             <ImageBackground  source={images.loginGraphic} className="size-full rounded-g-lg" resizeMode="stretch"/>
             <Image source={images.logo} className="self-center size-40 absolute -bottom-16 z-10" />
          </View>

          
          <CustomeInput  
            placeholder = "Enter your email"
            value = {' '}
            onChangeText={(text) => {}}
            label = "Email"
            keyboardType='email-address'
          />
          <CustomeButton />
        </ScrollView>
        <Slot />
    </KeyboardAvoidingView>
  )
}

