// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React from 'react';
import { StatusBar } from 'react-native';
// import { ThemeProvider, AuthProvider } from '@context';
import { AppNavigator } from '@navigation/AppNavigator';
import { ThemeProvider } from 'context/ThemeContext';
import { AuthProvider } from 'context/AuthContext';
// import { AppNavigator } from '@navigation';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StatusBar barStyle="default" />
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
