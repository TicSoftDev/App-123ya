import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const SimularCreditoScreen = () => {
  const [value, setValue] = useState(5000);
  const [paymentPeriod, setPaymentPeriod] = useState('quincenal');
  const [numCuotas, setNumCuotas] = useState(12);
  const [animatedValue] = useState(new Animated.Value(0));
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleChange = (val) => {
    setValue(val);
    Haptics.selectionAsync();
  };

  const calcularCuota = () => {
    const tasaInteres = 0.05;
    const totalInteres = value * tasaInteres;
    const totalPagar = value + totalInteres;
    return (totalPagar / numCuotas).toFixed(2);
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const generateChartData = () => {
    const data = [];
    const cuota = parseFloat(calcularCuota());
    for (let i = 1; i <= numCuotas; i++) {
      data.push(value - (cuota * i));
    }
    return data;
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        className="px-6 py-12"
      >
        <Text className="text-white text-3xl font-bold">Simular Crédito</Text>
        <Text className="text-white text-lg mt-2">Personaliza tu préstamo</Text>
      </LinearGradient>

      <Animated.View
        className="bg-white rounded-t-3xl -mt-5 p-6 shadow-lg"
        style={{ transform: [{ translateY }] }}
      >
        <View className="bg-gray-100 p-4 rounded-xl mb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-2">Información Importante</Text>
          <Text className="text-gray-600">
            • La tasa de interés aplicada es del 5% sobre el monto solicitado.
          </Text>
          <Text className="text-gray-600">
            • El monto total a pagar incluye el préstamo más los intereses.
          </Text>
          <Text className="text-gray-600">
            • Consulta nuestros términos y condiciones para más detalles.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl text-gray-800 font-semibold mb-4">
            Monto del préstamo
          </Text>
          <Animated.Text
            className="text-4xl font-bold text-blue-600 text-center mb-4"
            style={{
              opacity: animatedValue,
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            }}
          >
            ${value.toFixed(2)}
          </Animated.Text>
          <Slider
            minimumValue={500}
            maximumValue={10000}
            step={100}
            value={value}
            onValueChange={handleChange}
            minimumTrackTintColor="#3b5998"
            maximumTrackTintColor="#e0e0e0"
            thumbTintColor="#3b5998"
          />
          <View className="flex-row justify-between mt-2">
            <Text className="text-gray-500">$500</Text>
            <Text className="text-gray-500">$10,000</Text>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-2xl text-gray-800 font-semibold mb-4">
            Frecuencia de pago
          </Text>
          <View className="flex-row justify-between">
            {['quincenal', 'semanal'].map((period) => (
              <TouchableOpacity
                key={period}
                className={`flex-1 mx-2 py-4 rounded-xl ${paymentPeriod === period
                  ? 'bg-blue-500 shadow-lg'
                  : 'bg-gray-100'
                  }`}
                onPress={() => {
                  setPaymentPeriod(period);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
              >
                <Text
                  className={`text-center text-lg ${paymentPeriod === period
                    ? 'text-white font-bold'
                    : 'text-gray-700'
                    }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-2xl text-gray-800 font-semibold mb-4">
            Número de cuotas
          </Text>
          <Animated.Text
            className="text-4xl font-bold text-blue-600 text-center mb-4"
            style={{
              opacity: animatedValue,
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            }}
          >
            {numCuotas} Cuotas
          </Animated.Text>
          <Slider
            minimumValue={6}
            maximumValue={36}
            step={1}
            value={numCuotas}
            onValueChange={(value) => {
              setNumCuotas(value);
              Haptics.selectionAsync();
            }}
            minimumTrackTintColor="#3b5998"
            maximumTrackTintColor="#e0e0e0"
            thumbTintColor="#3b5998"
          />
          <View className="flex-row justify-between mt-2">
            <Text className="text-gray-500">6</Text>
            <Text className="text-gray-500">36</Text>
          </View>
        </View>

        <View className="mt-5">
          <Text className="text-xl font-bold text-gray-800">Resultado:</Text>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            className="rounded-2xl mt-4 p-6 shadow-lg"
          >
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-white text-lg">Total por cuota</Text>
                <Animated.Text
                  className="text-3xl font-bold text-white mt-2"
                  style={{
                    opacity: animatedValue,
                    transform: [
                      {
                        scale: animatedValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        }),
                      },
                    ],
                  }}
                >
                  ${calcularCuota()}
                </Animated.Text>
              </View>
              <TouchableOpacity
                className="bg-white bg-opacity-20 py-3 px-4 rounded-xl flex-row items-center"
                onPress={() => {
                  setShowChart(!showChart);
                  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                }}
              >
                <MaterialCommunityIcons
                  name={showChart ? "chart-line-variant" : "chart-line"}
                  size={24}
                  color="gray"
                />
                <Text className="text-gray-700 text-base font-semibold ml-2">
                  {showChart ? "Ocultar" : "Mostrar"}
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {showChart && (
          <View className="mt-8">
            <Text className="text-2xl text-gray-800 font-semibold mb-4">
              Proyección de Pago
            </Text>
            <LineChart
              data={{
                labels: Array.from({ length: numCuotas }, (_, i) => `${i + 1}`),
                datasets: [
                  {
                    data: generateChartData(),
                  },
                ],
              }}
              width={width - 40}
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default SimularCreditoScreen;