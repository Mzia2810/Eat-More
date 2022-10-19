import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {addToCart, itemIncrement,itemDecrement,removeItem} from '../../redux/slices/cartSlice';

const {width, height} = Dimensions.get('window');
// const givenData = [
//   {
//     id: 1,
//     title: 'Zinger Burger',
//     src: require('../../assets/Zinger.png'),
//     price: '$50',
//   },
// ];

const AddToCart = ({navigation}) => {
  // const {id, image, title, price} = useSelector(state=>state.cart.list);
  const list = useSelector(state => state.cart.list);
  // const {price,totalAmount,quantity} = list[0];
  const dispatch = useDispatch();

  const Increment = (item) => {
    dispatch(itemIncrement(item.id));
    // console.log(item.id)
  }

  const decrement = (item) => {
    dispatch(itemDecrement(item.id));
    console.log(item.id)
  }

  const ItemToRemove =(item) => {
    dispatch(removeItem(item.id));
  }




  return (
    <View>
      <FlatList
        style={{height: 550}}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({item}) => (
          <ScrollView>
            <View
              style={{
                width: width / 1.5,
                height: height / 7,
                margin: 10,
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: 'white',
                borderColor: '#8b9cb5',
                // backgroundColor: 'red',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                flexDirection: 'row',
              }}>
              {/* <Image
        source={image}
        style={{
          width: 90,
          height: 80,
          resizeMode: 'contain',
          // marginTop: 18,
          marginBottom: 5,
        }}
      /> */}
              <View
                style={{position: 'absolute', marginLeft: 270, marginTop: 5}}>
                <TouchableOpacity
                  onPress={()=>Increment(item)}
                  style={{
                    width: 100,
                    height: 30,
                    borderWidth: 2,
                    borderRadius: 10,
                    backgroundColor: '#FF0036',
                    borderColor: 'white',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>decrement(item)}
                  style={{
                    marginTop: 30,
                    width: 100,
                    height: 30,
                    borderWidth: 2,
                    borderRadius: 10,
                    backgroundColor: '#FF0036',
                    borderColor: 'white',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
              onPress={()=>ItemToRemove(item)}
                  style={{
                    marginTop: 60,
                    width: 100,
                    height: 30,
                    borderWidth: 2,
                    borderRadius: 10,
                    backgroundColor: '#FF0036',
                    borderColor: 'white',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Remove Item
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    flex: 1,
                    // fontWeight: 'bold',
                    color: 'black',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                 {item.title}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    // fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                    marginLeft: 10,
                  }}>
                  {' '}
                  Price : {item.price}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    // fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  {' '}
                   Total: {item.totalAmount}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    // fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  {' '}
                  Quantity : {item.quantity}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      />

      <TouchableOpacity
        style={{
          width: 200,
          height: 60,
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: '#FF0036',
          borderColor: 'white',
          position: 'relative',
          marginLeft: 95,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 12,
            fontSize: 20,
          }}>
          Dispatch Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;
