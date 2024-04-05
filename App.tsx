import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';

let customFonts = {
  'Satoshi-Bold': require('./assets/font/Satoshi-Bold.otf'),
  'Satoshi-Black': require('./assets/font/Satoshi-Black.otf'),
  'Satoshi-Regular': require('./assets/font/Satoshi-Regular.otf'),
  'Satoshi-Medium': require('./assets/font/Satoshi-Medium.otf'),
  'Satoshi-Light': require('./assets/font/Satoshi-Light.otf')
}

const App: React.FC = () => {
  const [isLoaded] = useFonts(customFonts)

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
