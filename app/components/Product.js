import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/action'


const Product = ({ item }) => {
  // const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    console.log("called", item);
    // dispatch(addToCart)
  }
  return (
    <View style={{ alignItems: "center", borderBottomColor: "orange", borderBottomWidth: 1, paddingBottom: 10 }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Image style={{ width: 100, height: 100 }}
        source={item.image}
      />
      <Button title='Add to cart' onPress={()=>handleAddToCart(item)} />
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})