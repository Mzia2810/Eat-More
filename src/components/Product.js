import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';



 const Product = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumb}
        source={require('../assets/two-red-tomatoes.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Muhammad Zia</Text>
        <Text style={styles.price}>$ 50</Text>
      </View>
    </TouchableOpacity>
  );
};


export default Product;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color:'white',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color:'white',
  },
});