import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { imagenes } from '../../assets/images/imagenes';
import { useNavigation } from '@react-navigation/native';
import { privateRoutes } from '../../models/RutasModel';

const LoginScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white' style={{ paddingTop: StatusBar.currentHeight || 0 }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
        <ScrollView contentContainerStyle="flex-grow">
          <View className='flex-1 items-center justify-center p-4'>
            <Image source={imagenes.logo} className="w-60 h-60" resizeMode="contain" />
            <View className="w-full">
              <Text className="text-xs text-gray-800 font-bold ml-4 uppercase">Usuario</Text>
              <View className="flex flex-row items-center w-full rounded-full border-b-2 border-gray-200 mb-10 px-5 py-2">
                <FontAwesome5 name="user-circle" size={20} color="gray" />
                <TextInput placeholder="Ej: 123456789" returnKeyType="next" className="ml-4 text-lg"
                  onSubmitEditing={() => this.passwordInput.focus()} blurOnSubmit={false} />
              </View>
              <Text className="text-xs text-gray-800 font-bold ml-4 uppercase">Contraseña</Text>
              <View className="flex flex-row items-center w-full rounded-full border-b-2 border-gray-200 mb-8 px-5 py-2">
                <FontAwesome5 name="lock" size={20} color="gray" />
                <TextInput placeholder="••••••••••" returnKeyType="next" className="ml-4 text-lg flex-1"
                  onSubmitEditing={() => this.passwordInput.focus()} blurOnSubmit={false} />
                <TouchableOpacity>
                  <FontAwesome5 name="eye" size={20} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-3/4">
              <TouchableOpacity className="flex items-center rounded-full p-3 my-2 bg-rosado" onPress={() => navigation.navigate(privateRoutes.HOME)}>
                <Text className="font-bold text-white text-base uppercase">Ingresar</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex items-center rounded-full p-3 mt-2 border-2 border-rosado" >
                <Text className="font-bold text-rosado text-base uppercase">Registrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default LoginScreen