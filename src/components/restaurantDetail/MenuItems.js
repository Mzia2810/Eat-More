import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
// import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {addToCart} from '../../redux/slices/cartSlice';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const MenuItems = ({restaurantData, foods, hideCheckBox,}) => {
  const restaurantId = restaurantData.id;
  const restaurantName = restaurantData.name;
  // console.log('Restaurant restaurant Id is given ======', restaurantId);

  const dispatch = useDispatch();

  const selectItem = (checkboxValue, item) => {
    dispatch(addToCart({restaurantName,restaurantId, item, checkboxValue}));
  };

  const cartItems = useSelector(state => state.cart.selectedItem.itemsList);

  const isFoodInCart = food => {
    //   Boolean(cartItems.find((item) =>
    // item.title == food.title))}
    const a = cartItems.find(item => item.item.title == food.title);
    console.log('food=', a);
    if (a) {
      return true;
    } else return false;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{height: 400}}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
              fillColor="green"
              isChecked={isFoodInCart(food)}
              onPress={checkboxValue => selectItem(checkboxValue, food)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    // width:'100%',
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
});

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
