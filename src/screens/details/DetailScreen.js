import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Slider from '../../components/Slider';
import { addToCart } from '../../redux/slices/cartSlice';

const {width,height} = Dimensions.get('window');


const DetailScreen = ({route,navigation}) => {
  const {id, image, title, price} = route.params;

  const dispatch = useDispatch();


  const HandleAddToCart = () =>{

    dispatch(addToCart({id,title,price,}));
    navigation.navigate('AddToCart');
    
  }

  // const [image,setImage] = useState()
  return (
    <SafeAreaView>
      <Slider id={id} title={title} price={price} image={image} />

      <View style={styles.loginBox}>
        <View style={{position: 'absolute', marginTop: 30, marginLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {title}{' '}
          </Text>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {' '}
              Price :
            </Text>
            <Text style={{fontSize: 20, color: 'black'}}> {price}</Text>
          </View>
        </View>

        <View style={{position: 'absolute', marginTop: 100, marginLeft: 25}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 5,
              marginBottom: 5,
            }}>
            Details{' '}
          </Text>
          <Text style={{color: 'black'}}>Input Type: 3.5mm stereo jack </Text>
          <Text style={{color: 'black'}}>
            Other Features: Bluetooth, Foldable, Noise{' '}
          </Text>
          <Text style={{color: 'black'}}>
            Isolation, Stereo, Stereo Bluetooth, Wireless{' '}
          </Text>
          <Text style={{color: 'black'}}>Form Factor: On-Ear </Text>
          <Text style={{color: 'black'}}>
            Connections: Bluetooth, Wireless{' '}
          </Text>
          <Text style={{color: 'black'}}>Speaker Configurations: Stereo </Text>
        </View>

        <TouchableOpacity 
        onPress={HandleAddToCart}
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            marginTop: 280,
            marginLeft: 20,
            backgroundColor: '#F3F3FF',
            padding: 10,
            borderColor: '#8b9cb5',
            borderWidth: 1,
            borderRadius: 70,
            width: 157,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
            Add to cart
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            marginTop: 280,
            marginLeft: 210,
            backgroundColor: '#FF0036',
            padding: 10,
            borderWidth: 1,
            borderRadius: 70,
            width: 157,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
            Buy Now
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  backImage: {
    // position: 'relative',
  },

  loginBox: {
    position: 'absolute',
    width:width,
    height: height,
    marginTop: 300,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },

  loginSignup: {
    flexDirection: 'row',
    width: 226,
    height: 28,
    marginLeft: 40,
    justifyContent: 'space-between',
    borderColor: 'black',
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 30,
    borderColor: 'black',
    borderRadius: 50,
    borderColor: '#dadae8',
    borderWidth: 1,
  },

  signup: {
    padding: 3,
    // backgroundColor: '#FF0036',
    borderRadius: 20,
    width: 113,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0036',
  },
  login: {
    padding: 3,
    width: 113,
    backgroundColor: '#FF0036',
    color: 'white',
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
