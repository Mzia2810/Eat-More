import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItems from '../../components/restaurantDetail/MenuItems';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

export default function OrderCompleted( {route}) {

  const rid = route.params.rid;
console.log("d route=",rid)
// console.log('restaurant name is Order completed ::: ',restaurantName)

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Bologna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      },
    ],
  });

  const n= useSelector(state => state.cart.selectedItem.itemsList);
  const ListOfItems=n.filter((item)=>item.item.rid== rid)


  // setLastOrder(ListOfItems);

  // console.log('items in Store  cart List Order Completed restaurant name = :', ListOfItems[0].restaurantName);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          margin: 10,
          alignItems: 'center',
          height: '100%',
        }}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />

        <Text style={{fontSize: 20,marginBottom:20, fontWeight: 'bold'}}>
          Your order at 
          {/* {ListOfItems[0].restaurantName} */}
       
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{height: 400}}>
          {ListOfItems.map((item, index) => (
            <View key={index}>
              <View style={styles.menuItemStyle}>
                <View style={{flexDirection:'row',marginVertical:10}}>
                  <View style={{width: 240, justifyContent: 'space-evenly'}}>
                    <Text style={styles.titleStyle}>{item.item.title}</Text>
                    <Text>{item.item.description}</Text>
                    <Text> Price :{item.item.price}</Text>
                  </View>
                  <Image
                    source={{uri: item.item.image}}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 8,
                      // marginLeft: marginLeft,
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* <ScrollView style={{marginRight: 10}}>
          {ListOfItems.item.map((item,index) => (
             <View key={index}>
             <View style={styles.menuItemStyle}>
               <FoodInfo food={item} />
               <FoodImage food={item} />
             </View>
           </View>
          ))}
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            // marginLeft={10}
          />
        </ScrollView> */}
        <LottieView
          style={{height: 200, alignSelf: 'center', marginBottom: 30}}
          source={require('../../assets/animations/cooking.json')}
          autoPlay
          speed={1}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // margin: 20,
    // width:'100%',
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
});

// const FoodInfo = ({item}) => (
//   <View style={{width: 240, justifyContent: 'space-evenly'}}>
//     <Text style={styles.titleStyle}>{item.title}</Text>
//     <Text>{item.description}</Text>
//     <Text>{item.price}</Text>
//   </View>
// );

// const FoodImage = ({item}) => (
//   <View>
//     <Image
//       source={{uri: item.image}}
//       style={{
//         width: 100,
//         height: 100,
//         borderRadius: 8,
//         // marginLeft: marginLeft,
//       }}
//     />
//   </View>
// );
