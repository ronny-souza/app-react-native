import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../css/form.css';
import { Avatar, Button, Input } from 'react-native-elements';

export default function Register() {
  return (
    <>
        <View style={[styles.container]}>   
            <Text style={{fontSize: 60}}>
                Cadastro
            </Text>
                <Input
                    placeholder='Nome' containerStyle={{ marginBottom: 10, width: 400}}></Input>
                
                <Input
                    placeholder='Login' containerStyle={{ marginBottom: 10, width: 400}}></Input>
                
                <Input
                    placeholder='Senha' containerStyle={{ marginBottom: 10, width: 400}}></Input>

                <Button
                title="Cadastrar"
                buttonStyle={{
                  backgroundColor: '#5cb85c',
                  borderRadius: 3,
                  height: 50
                }}
                containerStyle={{
                  width: 300,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />

        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
            flexDirection: 'column',
            alignItems: 'center'
    }
});