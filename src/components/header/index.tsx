import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/AuthContext'

export function Header(){

    const { signOut } = useContext(AuthContext)
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Logo</Text>
           <TouchableOpacity onPress={signOut}>
              <Entypo name="log-out" size={24} color="white" />
           </TouchableOpacity>
        
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
         padding: 30,
         backgroundColor: '#c72828',
         flexDirection: 'row',
         justifyContent: 'space-between'
    },
    text: {
       fontSize: 20,
       color: 'white'
    }
})