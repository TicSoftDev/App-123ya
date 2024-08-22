import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { styles } from '../../assets/styles/homeStyles';
import { privateRoutes } from '../../models/RutasModel';

const HomeScreen = () => {
    const navigation = useNavigation();

    const quickActions = [
        { icon: 'hand-holding-dollar', text: 'Solicitar crédito', route: privateRoutes.SOLICITAR_CREDITO },
        { icon: 'dollar', text: 'Ver crédito', route: privateRoutes.DETALLE_CREDITO },
        { icon: 'money-bill-wave', text: 'Pagar cuota', route: privateRoutes.PAGAR_CREDITO },
        { icon: 'calculator', text: 'Simular crédito', route: privateRoutes.SIMULAR_CREDITO },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <LinearGradient colors={['#d61d56', '#ef4b7e']} className="py-6 px-3 pt-12">
                    <View className="flex-row justify-between items-center mb-4">
                        <View className="px-2">
                            <Text className="text-white text-2xl font-bold">Hola, Juan</Text>
                            <Text className="text-white text-base">Bienvenido de vuelta</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome5 name="bell" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View className="bg-white rounded-lg p-4 shadow-lg">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-800 text-lg font-semibold">Deuda total</Text>
                            <FontAwesome5 name="info-circle" size={20} color="#d61d56" />
                        </View>
                        <Text className="text-3xl font-bold text-gray-800 mt-2">$5,432.67</Text>
                        <Text className="text-gray-500 text-xs mt-1">Actualizado: 21 de agosto, 2024</Text>
                        <TouchableOpacity
                            className="bg-rosado mt-3 py-2 px-4 rounded-full self-start"
                            onPress={() => navigation.navigate(privateRoutes.DETALLE_CREDITO)}
                        >
                            <Text className="text-white font-semibold">Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <View className="p-6">
                    <Text className="text-xl font-bold mb-4">Acciones rápidas</Text>
                    <View className="flex-row flex-wrap justify-between">
                        {quickActions.map((action, index) => (
                            <TouchableOpacity key={index} className="w-[25%] items-center mb-6" onPress={() => navigation.navigate(action.route)}>
                                <View className="flex justify-center items-center bg-white p-4 rounded-full shadow-md mb-2 w-16" style={styles.butonStyle}>
                                    <FontAwesome6 name={action.icon} size={28} color="#098e6f" />
                                </View>
                                <Text className="text-center text-gray-600">{action.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;