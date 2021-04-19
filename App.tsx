import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalculatorPage } from './src/Pages/CalculatorPage';
import { styles } from './src/theme/theme';
    
const App = () => {
  return(
      <SafeAreaView style={styles.background}>
        {/* See status bar on IOS */}
        <StatusBar backgroundColor='black'
         barStyle='light-content' />

        <CalculatorPage />
      </SafeAreaView>

  )
}

export default App;