import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

const DetalleCreditoScreen = () => {

    const creditDetails = {
        transactions: [
            { id: 1, date: '2024-08-20', amount: -50.00, description: 'Pago couta 1' },
            { id: 2, date: '2024-08-18', amount: -100.00, description: 'Pago couta 2' },
            { id: 3, date: '2024-08-15', amount: 1000.00, description: 'Pago couta 3' },
            { id: 4, date: '2024-08-10', amount: -25.00, description: 'Pago couta 4' },
        ],
    };

    return (
        <ScrollView className="flex-1 bg-rosado">
            <LinearGradient  colors={['#4c669f', '#3b5998', '#192f6a']} className="px-5 py-10">
                <Text className="text-white text-2xl font-bold">Detalle de Crédito</Text>
            </LinearGradient>

            <View className="bg-gray-100 rounded-t-3xl -mt-5 p-5">
                <Text className="text-base text-gray-600 mb-4 pt-5 px-4">
                    Esta es la información de tu crédito activo hasta la fecha.
                </Text>

                <View className="mb-6">
                    <LinearGradient
                        colors={['#4CAF50', '#45a049', '#388e3c']}
                        className="rounded-3xl p-6 shadow-lg"
                    >
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white text-xl font-bold">Crédito Activo</Text>
                            <FontAwesome5 name="credit-card" size={24} color="white" />
                        </View>

                        <View className="bg-white bg-opacity-20 rounded-xl p-4 mb-4">
                            <Text className="text-gray-800 text-sm">Saldo pendiente</Text>
                            <Text className="text-gray-800 text-3xl font-bold">$89,000</Text>
                            <View className="flex-row justify-between mt-2">
                                <Text className="text-gray-800 text-xs">Próximo pago: 15/09/2024</Text>
                                <Text className="text-gray-800 text-xs font-bold">$7,416.67/mes</Text>
                            </View>
                        </View>

                        <View className="flex-row justify-around mb-6">
                            {[
                                { label: 'Pagado', value: '2/12' },
                                { label: 'Tasa de interés', value: '12%' },
                                { label: 'Monto inicial', value: '$100k' },
                            ].map((item, index) => (
                                <View key={index} className="items-center">
                                    <Text className="text-white text-sm opacity-80 mb-2">{item.label}</Text>
                                    <View className="bg-white rounded-full h-20 w-20 items-center justify-center">
                                        <Text className="text-green-800 text-lg font-bold">{item.value}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity className="bg-white rounded-full py-3 px-6 items-center">
                            <Text className="text-green-800 font-bold text-lg">Pagar ahora</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                </View>

                <View className="bg-white rounded-3xl p-5 mb-5 shadow-lg">
                <Text className="text-lg font-bold mb-6 text-gray-800">Transacciones recientes</Text>
                    {creditDetails.transactions.map((transaction) => (
                        <View key={transaction.id} className="flex-row items-center border-b border-gray-200 mb-4 pb-4">
                            <View className="p-3 bg-green-100 rounded-full mr-4">
                                <FontAwesome6Icon name='check' size={20} color='green' />
                            </View>
                            <View className="flex-1 flex-row items-center justify-between">
                                <View>
                                    <Text className="text-gray-800 font-semibold text-lg">{transaction.description}</Text>
                                    <Text className="text-gray-500 text-sm">{transaction.date}</Text>
                                </View>
                                <Text className="text-gray-800 font-bold text-lg">${Math.abs(transaction.amount).toFixed(2)}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default DetalleCreditoScreen