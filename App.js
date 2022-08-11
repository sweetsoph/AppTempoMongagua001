import React, {useState, UseState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './Components/Tempo';
import Api from './Components/Api';

export default function App() {
  const [dados, setDados] = useState("");
  async function carregaDados(){
    const response = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=c61a605c&city_name=mongagua,SP');
    //pegando os dados da array forecast na posição 0, os dados de hoje
    setDados(response.data.forecast[0]);
  }
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
        <TouchableOpacity
        style={styles.botao}
        onPress={carregaDados}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Tempo data={"dados"}/>
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
