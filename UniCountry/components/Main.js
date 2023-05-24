import { EntradaDados } from './EntradaDados'
import { RenderDados }from './RenderDados';
import axios from 'axios';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';

export default function Main() {

  const [resultado, addResultado]= useState([]);

  const dados = async (universidade, pais) => {
  
    const url = "http://universities.hipolabs.com/search?" + (universidade ?`&name=${universidade}` : '' ) + (pais ? `&country=${pais}` :'' ) 

    const resposta = await axios.get(url)

    if (resposta.data.length < 1){
        alert("Universidade não encontrada!");
    }else{
      addResultado(resposta.data)
    }
  }

  return (
    <View style={styles.container}>
      <EntradaDados callBackPesquisar={dados}/>
      <RenderDados resultado={resultado}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    marginBottom: '10%',
    backgroundColor: '#ffff',

  },
  texto: {
    backgroundColor: 'green',
    fontSize: 32
  }
  
});