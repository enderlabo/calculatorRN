import React from 'react'
import { Text, View } from 'react-native';
import { BtnCalculator } from '../components/Button/ButtonCalculator';
import { styles } from '../theme/theme';
import { useCalculator } from '../hooks/useCalculator';
    
export const CalculatorPage = () => {

    const {
      resultsNumber,
      number,
      clean,
      positiveNegative,
      delButton,
      btnDivide,
      buildNumber,
      btnMultiply,
      btnSubtract,
      btnAdd,
      calculate,
    } = useCalculator();
    
    return(
        
        <View style={ styles.calculatorContain}>
            {

                (resultsNumber !=='0') && <Text style={styles.calculatorResults}>{resultsNumber}</Text>

            }
            <Text style={styles.fonts}
                numberOfLines={1}
                adjustsFontSizeToFit
                >{number}
            </Text>
            
            <View style={ styles.row }>
            {/* first row */}
                <BtnCalculator text="C" color="#414148" func={clean}  />
                <BtnCalculator text="+/-" color="#414148" func={positiveNegative} />
                <BtnCalculator text="del" color="#414148" func={delButton} />
                <BtnCalculator text="/" color="#FF9427" func={btnDivide} />
            </View>

            <View style={ styles.row }>
            {/* second row */}
                <BtnCalculator text="7" func={buildNumber}  />
                <BtnCalculator text="8" func={buildNumber} />
                <BtnCalculator text="9" func={buildNumber} />
                <BtnCalculator text="X" color="#FF9427" func={btnMultiply} />
            </View>

            <View style={ styles.row }>
            {/* third row */}
                <BtnCalculator text="4" func={buildNumber} />
                <BtnCalculator text="5" func={buildNumber} />
                <BtnCalculator text="6" func={buildNumber} />
                <BtnCalculator text="-" color="#FF9427" func={btnSubtract} />
            </View>

            <View style={ styles.row }>
            {/* fourth row */}
                <BtnCalculator text="1" func={buildNumber} />
                <BtnCalculator text="2" func={buildNumber} />
                <BtnCalculator text="3" func={buildNumber} />
                <BtnCalculator text="+" color="#FF9427" func={btnAdd} />
            </View>

            <View style={ styles.row }>
            {/* fifth row */}
                <BtnCalculator text="0" width func={buildNumber} />
                <BtnCalculator text="." func={buildNumber} />
                {/* <BtnCalculator text="00" /> */}
                <BtnCalculator text="=" color="#FF9427" func={calculate} />
            </View>
        </View>
    )
}
