import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



interface Props {
    text: string,
    color?: string,
    width?: boolean,
    // number: Number,
    func: ( resultsNumber: string ) => void,

}
    
export const BtnCalculator = ({ text, color = "#606066", width = false, func }: Props) => {
    return(
        <TouchableOpacity onPress={() =>func(text)}>
            <View style={{...styles.bottom, backgroundColor: color, width: ( width ) ? 180 : 80}}>
                <Text style={{...styles.bottomText,
                color: (color === '#9b9b9b') ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bottom: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
        //Shadows
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 20
        
    },
    bottomText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
});