import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../css/form.css';
import { Avatar, Button, Input } from 'react-native-elements';

export default function Login() {
  return (
    <>
        <View style={[styles.container]}>
            <Avatar
                size={100}
                rounded
                title="MA"
                containerStyle={{ backgroundColor: '#000', marginBottom: 10 }}
            />        

                <Input
                    placeholder='Login' containerStyle={{ marginBottom: 10, width: 400}}></Input>
                
                <Input
                    placeholder='Senha' containerStyle={{ marginBottom: 10, width: 400}}></Input>

                <Button
                title="Login"
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

                <Button
                title="Cadastro"
                buttonStyle={{
                  backgroundColor: '#0275d8',
                  borderRadius: 3,
                  height: 45
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