import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { styles } from '../assets/styles/headerStyles';
import HeaderNavigation from '../components/helpers/HeaderNavigation';
import { privateRoutes, publicRoutes } from '../models/RutasModel';
import DetalleCreditoScreen from '../screens/detalleCredito/DetalleCreditoScreen';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/login/LoginScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {

    const options = {
        headerShown: false
    }

    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name={publicRoutes.Login} component={LoginScreen} options={options} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name={privateRoutes.Home} component={HomeScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerLeft: () => null, headerStyle: styles.headerStyle
                }} />
                <Stack.Screen name={privateRoutes.DetalleCredito} component={DetalleCreditoScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerStyle: styles.headerStyle
                }} />
            </Stack.Group>
        </Stack.Navigator>
    )
}