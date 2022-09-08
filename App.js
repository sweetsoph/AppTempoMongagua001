import React, { useState, UseState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Tempo } from './Components/tempo';
import Api from './Components/Api';

export default function App() {
  const [dados, setDados] = useState("");
  const [cidade, setCidade] = useState('')

  async function carregaDados() {
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=c61a605c&city_name=${cidade},SP`);
    setDados(response.data.forecast[0]);
  }
  console.log(cidade);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Previsão do tempo</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.label}>Digite aqui a cidade:</Text>
        <TextInput style={styles.input}
          placeholder='Insira aqui sua cidade'
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
      </View>
      <View style={styles.blocoBotao}>
        <TouchableOpacity
          style={styles.botao}
          onPress={carregaDados}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Tempo data={dados} />
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
  bloco:{
    margin: 10,
    width: 200,
  },
  label:{
    fontSize: 17,
  },
  blocoBotao: {
    margin: 10,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: "#6800C9",
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 17,
  },
  botao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6800C9",
    width: 100,
    height: 30,
    borderRadius: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 17,
  }
});
