import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './src/LoginView';
import { FirebaseApp } from 'firebase/app';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
