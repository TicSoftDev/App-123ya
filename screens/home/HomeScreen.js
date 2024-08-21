import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { styles } from '../../assets/styles/homeStyles';

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 p-2">
                    <View className="bg-rosado rounded-lg p-6 shadow-lg mb-2">
                        <View className="flex-row items-center justify-between">
                            <Text className="text-white text-2xl font-bold">Deuda</Text>
                            <FontAwesome5Icon name="info-circle" size={24} color="white" />
                        </View>
                        <Text className="text-white text-4xl font-bold mt-4">$5432.67</Text>
                        <View className="flex-row items-center justify-between mt-4">
                            <Text className="text-white text-sm">Actualizado el 21 de agosto, 2024</Text>
                        </View>
                    </View>

                    <View className="bg-white rounded-3xl p-5" style={styles.container}>
                        <Text className="text-base font-bold pb-5">¿Qué quieres hacer hoy?</Text>
                        <View className="flex-row flex-wrap justify-start items-start">
                            <View className="flex flex-col w-1/4 items-center justify-center">
                                <TouchableOpacity className="flex items-center justify-center rounded-full" style={styles.butonStyle}>
                                    <FontAwesome6 name="hand-holding-dollar" size={28} color="#000" />
                                </TouchableOpacity>
                                <Text className="text-center p-2">Solicitar crédito</Text>
                            </View>
                            <View className="flex flex-col w-1/4 items-center justify-center">
                                <TouchableOpacity className="flex items-center justify-center rounded-full border-2 border-gray-200" style={styles.butonStyle}>
                                    <FontAwesome5Icon name="dollar" size={28} color="#000" />
                                </TouchableOpacity>
                                <Text className="text-center p-2">Ver crédito</Text>
                            </View>
                            <View className="flex flex-col w-1/4 items-center justify-center">
                                <TouchableOpacity className="flex items-center justify-center rounded-full border-2 border-gray-200" style={styles.butonStyle}>
                                    <FontAwesome5Icon name="money" size={28} color="#000" />
                                </TouchableOpacity>
                                <Text className="text-center p-2">Pagar cuota</Text>
                            </View>
                            <View className="flex flex-col w-1/4 items-center justify-center">
                                <TouchableOpacity className="flex items-center justify-center rounded-full border-2 border-gray-200" style={styles.butonStyle}>
                                    <FontAwesome6 name="calculator" size={28} color="#000" />
                                </TouchableOpacity>
                                <Text className="text-center p-2">Simular crédito</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
