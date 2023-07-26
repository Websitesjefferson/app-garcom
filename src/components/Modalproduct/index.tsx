
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native'

import { ProductProps } from '../../pages/Order'

interface ModalPickerProps{
  options: ProductProps[];
  handleCloseModal: () => void;
  selectedItem: (item: ProductProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export function ModalProduct({ options, handleCloseModal, selectedItem  }: ModalPickerProps){


  function onPressItem(item: ProductProps){
    //console.log(item);
    selectedItem(item);
    handleCloseModal();
  }



  return(
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
             options.map((item) => (
              <TouchableOpacity key={item.id} style={styles.option} onPress={ () => onPressItem(item)}>
                <Text style={styles.item}>
                  {item?.name}
                </Text>
                <Text style={styles.items}>
                 {item?.description}
                </Text>
          
              </TouchableOpacity>
             ))
          }
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#8a8a8a',
    borderRadius: 4,
  },
  option:{
    alignItems: 'flex-start',
    borderTopWidth: 0.8,
    borderTopColor: '#8a8a8a'
  },
  item:{
    marginRight: 18,
    marginLeft: 18,
    marginBottom: 7,
    marginTop:10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  items:{
    marginRight: 18,
    marginLeft: 18,
    marginBottom: 7,
    marginTop:10,
    fontSize: 15,
    color: '#000'
  }
})