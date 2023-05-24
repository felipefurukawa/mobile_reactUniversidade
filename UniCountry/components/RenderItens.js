
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';

export const RenderItens = (props) => {

    return    <View style={ styles.item }>
                    <Image source={require('../assets/faculdadeIcon.png')} style={{width: 32, height: 32}}/>
                <Text style={{ marginLeft: 10 }}>{props.universidade} -- {props.pais}</Text>
              </View>
           
  }

  const styles = StyleSheet.create({
    item: {
        flexDirection: "row", 
        alignItems: "center",
        flex: 1,
        borderRadius:8, 
        borderColor: "black",
        borderWidth: 1,
        color:"white", 
        margin: 10, 
        padding: 10, 
        backgroundColor: "pink"
      },
  })


