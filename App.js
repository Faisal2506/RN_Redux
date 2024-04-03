import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Product from './app/components/Product';

export default function App() {

  const products =[
    {
      name:"Samsung Mobile",
      color:"white",
      price:30000,
      image:require('./assets/mobile_icon.webp')
    },
    {
      name:"Apple Mobile",
      color:"black",
      price:130000,
      image:require('./assets/mobile_icon.webp')
    },
    {
      name:"Nokia Mobile",
      color:"green",
      price:20000,
      image:require('./assets/mobile_icon.webp')
    }
  ]
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
      {
        products.map((item)=>
          <Product item={item} />
        )
      }
      </ScrollView>
      
      {/* <Text>UI for add to cart with Redux</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    paddingLeft:20
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
