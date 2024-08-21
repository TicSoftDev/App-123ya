import React from 'react'
import { Text, View } from 'react-native'

const HeaderNavigation = () => {
    return (
        <View className="flex flex-row items-end">
            <Text className="text-3xl font-extrabold text-green-700">$</Text>
            <Text className="text-3xl font-extrabold text-gray-800 ml-0.5">123</Text>
            <Text className="text-xl font-extrabold text-rosado ml-0.5">ya</Text>
        </View>
    )
}

export default HeaderNavigation