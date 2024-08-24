import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const PagarCreditoScreen = () => {
    const [receipt, setReceipt] = useState(null);

    const handleUploadReceipt = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets) {
                setReceipt(response.assets[0]);
            }
        });
    };

    return (
        <ScrollView className="flex-1 bg-gray-100">
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} className="px-5 py-10">
                <Text className="text-white text-3xl font-bold">Detalle de Crédito</Text>
            </LinearGradient>
            <View className="bg-white rounded-t-3xl -mt-5 p-5 shadow-lg">
                <LinearGradient
                    colors={['#4CAF50', '#45a049']}
                    className="rounded-3xl p-6 mb-6 shadow-lg"
                >
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-white text-xl font-bold">Próximo Pago</Text>
                        <Icon name="timer-outline" size={24} color="#ffffff" />
                    </View>
                    <View className="flex-row justify-between items-center mb-6">
                        <View>
                            <Text className="text-white text-4xl font-bold">$500.00</Text>
                            <Text className="text-white text-lg mt-1">Cuota 5 de 12</Text>
                        </View>
                        <View className="items-end">
                            <Text className="text-white text-lg font-semibold">15 Sep, 2024</Text>
                            <Text className="text-white text-sm mt-1">en 20 días</Text>
                        </View>
                    </View>
                    <View className="bg-white bg-opacity-20 h-3 rounded-full mb-2">
                        <View className="bg-white w-5/12 h-3 rounded-full" />
                    </View>
                    <Text className="text-white text-sm text-center">Progreso de pago: 41.67%</Text>
                </LinearGradient>

                <View className="bg-white rounded-3xl p-6 mb-6 shadow-lg">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-gray-800 text-xl font-bold">Resumen del Crédito</Text>
                        <Icon name="stats-chart-outline" size={24} color="#4CAF50" />
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-600">Monto total</Text>
                        <Text className="text-gray-800 font-semibold">$6,000.00</Text>
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-600">Pagado hasta ahora</Text>
                        <Text className="text-gray-800 font-semibold">$2,500.00</Text>
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-600">Restante</Text>
                        <Text className="text-gray-800 font-semibold">$3,500.00</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-600">Próxima fecha de pago</Text>
                        <Text className="text-gray-800 font-semibold">15 Oct, 2024</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleUploadReceipt}
                    className="bg-green-500 rounded-full py-4 px-6 items-center flex-row justify-center shadow-lg"
                >
                    <Icon name="cloud-upload-outline" size={24} color="#ffffff" />
                    <Text className="text-white font-semibold ml-2 text-lg">Subir Comprobante</Text>
                </TouchableOpacity>

                {receipt && (
                    <View className="mt-6 items-center">
                        <Image
                            source={{ uri: receipt.uri }}
                            className="w-40 h-40 rounded-xl"
                        />
                        <Text className="mt-2 text-gray-600">Comprobante subido</Text>
                    </View>
                )}

            </View>
        </ScrollView>
    );
};

export default PagarCreditoScreen;