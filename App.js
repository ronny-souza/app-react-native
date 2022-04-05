import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: "column"}}>
      <Register />
    </View>
  );
}