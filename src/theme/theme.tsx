import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#2c2c34',
        
    },
    calculatorContain:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    fonts:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    calculatorResults: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },

   
});