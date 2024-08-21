import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerStyle: {
        height: Platform.OS === 'ios' ? 100 : 80, 
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,  
    },
});

