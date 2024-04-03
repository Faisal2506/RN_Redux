import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
const cartData = useSelector((state)=>state.reducer)
// console.warn(cartData);
const [cartItems,setCartItems] = React.useState(0)
React.useEffect(() => {
  setCartItems(cartData.length)
}, [cartData])

  return (
    <View style={{height:40,width:40,borderRadius:20,alignSelf:"flex-end",backgroundColor:"orange",alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:25}}>{cartItems}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})