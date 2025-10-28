import { CustomInputProps } from '@/type';
import cn from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const CustomeInput = ({ 
    placeholder = "Enter text",
     value, 
     onChangeText, 
     label,
     secureTextEntry = false,
     keyboardType= "default"
    } : CustomInputProps) => {

        const [useIsFocused, setIsFocused] = useState(false);
  return (
    <View className="w-full">
      <Text className = "label">{label}</Text>

      <TextInput
        autoCapitalize='none'
        autoCorrect = {false}
        value = {value}
        onChangeText = {onChangeText}
        secureTextEntry = {secureTextEntry} 
        keyboardType= {keyboardType}
        placeholder={placeholder}
        placeholderTextColor= "#888"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className = {cn('input', useIsFocused ? 'border-primary' : 'border-gray-300')}
      />
    </View>
  )
}

export default CustomeInput