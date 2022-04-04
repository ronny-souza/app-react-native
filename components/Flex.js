import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Flex() {
  return (
    <>
       <View style={{flex: 1, backgroundColor: "#E7E540"}}></View>
       <View style={{flex: 1, backgroundColor: "#184BEA"}}></View>
       <View style={{flex: 1, flexDirection:"row"}}>
        <View style={{flex: 1, backgroundColor: "#EA182E"}}></View>
        <View style={{flex: 1, backgroundColor: "#0F6F0C"}}></View>
       </View>
       <View style={{flex: 1, flexDirection:"row"}}>
        <View style={{flex: 1, backgroundColor: "#FFF"}}></View>
        <View style={{flex: 1, backgroundColor: "#000"}}></View>
       </View>
    </>
  );
}