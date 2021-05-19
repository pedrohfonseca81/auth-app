import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(23,35,61,0.9)'
  },
  button: {
    width: 300,
    borderColor: 'black',
    borderRadius: 16,
    padding: 14,
    backgroundColor: '#5600E8',
    margin: 5
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'normal',
    lineHeight: 16,
    textTransform: 'uppercase',
    color: 'white'
  }
});

export default Home;