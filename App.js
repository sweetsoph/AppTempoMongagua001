import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Tittle}>Previsão do tempo</Text>
      </View>
      <View>
        <Text style={styles.Label}>Cidade</Text>
      </View>
      <View>
      <TextInput style={styles.Input}
        placeholder='Insira aqui sua cidade'
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Input: {
    border: "#000",
  },
  botao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6800C9",
    width: 80,
    height: 30,
    borderRadius: 20,
  },
  textoBotao: {
    color: "#fff",
  }
});
