import React, { useState, useContext }  from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'
import {AuthContext} from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { Header } from '../../components/header';

export default function Dashboard(){
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [number, setNumber] = useState('');
  const { useId } = useContext(AuthContext)

  async function openOrder(){
    if(number === ''){
      return;
    }

    const response = await api.post('/order', {
      table: Number(number),
      company_id: useId
   })
    

    //console.log(response.data);

    navigation.navigate('Order', { number: number, order_id: response.data.id})

    setNumber('');

  }
  

  return(
    <>
     <Header />
    <SafeAreaView style={styles.container}>
      
        <Text style={styles.title}>Novo pedido</Text>

        <TextInput
          placeholder="Numero da mesa"
          placeholderTextColor="#8A8A8A"
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
        />

        <TouchableOpacity style={styles.button} onPress={openOrder}>
          <Text style={styles.buttonText}>Abrir mesa</Text>
        </TouchableOpacity>

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  input:{
    width: '90%',
    height: 60,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 22,
    color: '#000'
  },
  button:{
    width: '90%',
    height: 40,
    backgroundColor: '#c72828',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})