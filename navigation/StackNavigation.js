import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { styles } from '../assets/styles/headerStyles';
import HeaderNavigation from '../components/helpers/HeaderNavigation';
import { privateRoutes, publicRoutes } from '../models/RutasModel';
import DetalleCreditoScreen from '../screens/detalleCredito/DetalleCreditoScreen';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import PagarCreditoScreen from '../screens/pagarCredito/PagarCreditoScreen';
import SimularCreditoScreen from '../screens/simularCredito/SimularCreditoScreen';
import SolicitarCreditoScreen from '../screens/solicitarCredito/SolicitarCreditoScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {

    const options = {
        headerShown: false
    }

    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name={publicRoutes.LOGIN} component={LoginScreen} options={options} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name={privateRoutes.HOME} component={HomeScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerLeft: () => null, headerStyle: styles.headerStyle
                }} />
                <Stack.Screen name={privateRoutes.SOLICITAR_CREDITO} component={SolicitarCreditoScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerStyle: styles.headerStyle
                }} />
                <Stack.Screen name={privateRoutes.DETALLE_CREDITO} component={DetalleCreditoScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerStyle: styles.headerStyle
                }} />
                <Stack.Screen name={privateRoutes.PAGAR_CREDITO} component={PagarCreditoScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerStyle: styles.headerStyle
                }} />
                <Stack.Screen name={privateRoutes.SIMULAR_CREDITO} component={SimularCreditoScreen} options={{
                    headerTitle: () => <HeaderNavigation />, headerStyle: styles.headerStyle
                }} />
            </Stack.Group>
        </Stack.Navigator>
    )
}