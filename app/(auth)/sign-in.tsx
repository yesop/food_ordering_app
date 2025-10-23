import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function signIn() {
  return (
    <View>
      <Text>signIn</Text>
      <Button title="Sign In" onPress={() => router.push({ pathname: "/sign-up" })} />
        
    </View>
  )
}