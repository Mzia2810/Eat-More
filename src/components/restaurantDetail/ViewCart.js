import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrderItem from '../../components/restaurantDetail/OrderItem';
import LottieView from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderCompleted from '../../screens/orderCompleted/OrderCompleted';
import {addToCart} from '../../redux/slices/cartSlice';
import {cartItemsInStoreNow} from '../../redux/slices/cartSlice';
import { useEffect } from 'react';

const ViewCart = ({restaurantId ,checkboxValue, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalprice,settotalprice]=useState(0)
  const items = useSelector(state => state.cart.selectedItem.itemsList);
  const n=items.filter((item)=>item.item.rid== restaurantId)

// console.log('Check box Value Recieving in view cart ====  : =',checkboxValue)

  // const itemsInCart = useSelector(state => state.cart.selectedItem.itemsList);
  // console.log('items In Cart list ===== : : =',itemsInCart)
  
  // const selectItem = (checkboxValue, item) => {
  //   dispatch(addToCart({restaurantName, item, checkboxValue}));
  // };
useEffect(()=>{
  const gettotal=async()=>{
  
    console.log('items reading Fron Cart list ===== : : =',n)
    let c=0;
    await n.map((item) => {
     c+=item.item.price;
    })
    settotalprice(c)
  }
  gettotal()
  console.log("the data",totalprice)
},[items])

  const dispatch = useDispatch();
  
  // const totalPrice = useSelector(state => state.cart.totalPrice);
  
  
  

  // const  totalPrice = items.map((item) => {})

  // const cartItemsNow = () => {
  //   setTimeout(() => {
  //     dispatch(cartItemsInStoreNow(itemsInCart));
  //   }, 2000);
  // };
  const addToFirebase = (n) => {
    navigation.navigate('OrderCompleted', {rid:restaurantId,});
    dispatch(cartItemsInStoreNow(n));
console.log('this is n ==========================',n)
  };

  const checkoutModalContent = () => {
    // const [cartItems,setCartItems] = useState();
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            {/* <Text style={styles.restaurantName}>{items[0].restaurantName}</Text> */}
            <ScrollView>
              {n.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}
            </ScrollView>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addToFirebase(n);
                  setModalVisible(false);
                
                  
                }}>
                <Text style={{color: 'white', marginRight: 100, fontSize: 20}}>
                  Place order{' '}
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 40,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  Total : {totalprice}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },

    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
      color: 'black',
    },

    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },

    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
    },
  });

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {totalprice !=0? (
        <TouchableOpacity
          style={{
            marginTop: 570,
            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 30,
            width: 280,
            position: 'absolute',
            alignSelf: 'center',
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: 'white', fontSize: 15, marginRight: 30}}>
            View Cart
          </Text>
          <Text style={{color: 'white', fontSize: 15}}>
            Total USD : {totalprice}{' '}
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
