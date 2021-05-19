import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Register({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Criar conta</Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TextInput placeholder="Nome completo" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} activeOpacity={0.95} style={styles.button}>
          <Text style={styles.buttonText}>enviar</Text>
        </TouchableOpacity>
        <View style={{ position: "absolute", bottom: 0 }}>
          <Text style={{ fontSize: 14, marginBottom: 10, color: "white" }}>Se você tiver uma conta <Text style={{ fontWeight: "bold" }} onPress={() => navigation.navigate("Login")}>entre aqui</Text></Text>
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(23,35,61,0.9)'
  },
  title: {
    fontSize: 48,
    lineHeight: 56,
    color: "white"
  },
  button: {
    width: 200,
    borderColor: "black",
    borderRadius: 16,
    padding: 14,
    backgroundColor: "#5600E8",
    margin: 5,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: "normal",
    lineHeight: 16,
    textTransform: "uppercase",
    color: "white"
  },
  input: {
    width: 300,
    borderRadius: 4,
    backgroundColor: "white",
    fontSize: 16,
    margin: 3,
    padding: 10
  }
});

export default Register;