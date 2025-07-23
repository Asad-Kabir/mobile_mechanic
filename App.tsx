import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from '@navigation/AppNavigator';
import { ThemeProvider } from 'context/ThemeContext';
import { AuthProvider } from 'context/AuthContext';
import { getApiUrl , isProduction, ENV_CONFIG } from 'types/index';
import { ThemeToggleButton } from '@components/index';

const App: React.FC = () => {
  const apiUrl = getApiUrl('login');
  return (
    <ThemeProvider>
      <AuthProvider>
        <StatusBar barStyle="default" />
        <AppNavigator />
       <ThemeToggleButton/>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
