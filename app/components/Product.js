import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'

const Product = ({item}) => {
  return (
    <View style={{alignItems:"center", borderBottomColor:"orange",borderBottomWidth:1,paddingBottom:10}}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Image style={{width:100,height:100}}
      source={item.image}
    />
    <Button title='Add to cart' />
  </View>
  )
}

export default Product

const styles = StyleSheet.create({})