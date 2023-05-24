import { useState } from "react"
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';


const EntradaDados = (props) => {
    
    const [universidade, atualizaUni] = useState('');
    const [pais, atualizaPais] = useState('');

    return <View style={{alignItems: "center", }}>
                <TextInput style={styles.input} 
                            placeholder='Universidade'
                            onChangeText={atualizaUni}
                            value={universidade}/>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput  style={styles.input2} 
                                placeholder='País'
                                onChangeText={atualizaPais}
                                value={pais}/>

                   
                </View>
                <View style={{ flexDirection: "row", alignItems: "center"}}>

                <Button style={styles.button} title='Pesquisar'  onPress={() => props.callBackPesquisar(universidade, pais)}/>

                </View>
            </View>

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width: "90%",
        borderWidth: 1,
        padding: 10,
      },
      input2: {
        height: 40,
        margin: 12,
        width: "90%",
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginHorizontal: 30,
        borderRadius: 15,
        elevation: 3,
        backgroundColor:"gray",
      },
      
})

module.exports.EntradaDados = EntradaDados;