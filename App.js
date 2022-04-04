import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: "column"}}>
      <Login />
    </View>
  );
}