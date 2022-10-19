import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../../components/restaurantDetail/About";
import MenuItems from "../../components/restaurantDetail/MenuItems";
import ViewCart from "../../components/restaurantDetail/ViewCart";

const foods = [
  {
    id:1,
    rid:1,
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    

  },
  {
    id:2,
    rid:1,
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: 19,
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    id:3,
    rid:1,
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: 14,
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  
  {
    id:4,
    rid:2,
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: 21,
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    id:5,
    rid:2,
    title: "Savour Rice",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    id:6,
    rid:3,
    title: "Bologna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 43,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id:7,
    rid:3,
    title: "Chicken White Handy",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    id:8,
    rid:4,
    title: "Mutton Karhai",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 43,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id:9,
    rid:4,
    title: "Chicken karhai",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    id:10,
    rid:4,
    title: "Chicken Achari",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 43,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id:11,
    rid:5,
    title: "White Korma",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    id:12,
    rid:5,
    title: "Chicken Biryani",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 43,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id:13,
    rid:5,
    title: "Chicken Pulao",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    id:14,
    rid:3,
    title: "Chick Keema",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13,
    image:"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    

  },
  {
    id:15,
    rid:4,
    title: "Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: 19,
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    id:16,
    rid:5,
    title: "Daal Chawal",
    description:
      "Chawal with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: 14,
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
];
const RestaurantDetail = ({ route, navigation }) => {

  const restaurantData = route.params;
  
  const singalRestaurantItems = foods.filter((item) => item.rid === restaurantData.id)
  
  
  
  // console.log('restaurantData ====: ',restaurantData)
  // console.log('singal Restaurant Items ====== :',singalRestaurantItems.length)
  // const {restaurantId} = route.params.id.
  // console.log('restaurant Id =========',route.params.id)
  // const SingalRestaurantItems = foo

 
  return (
    <View>
      <About route={route} />
      <View style={{ marginVertical: 10 ,borderBottomWidth:1}}></View>
      <MenuItems restaurantData={route.params} foods={singalRestaurantItems} />
      <ViewCart restaurantId={restaurantData.id}  navigation={navigation} />
    </View>
  );
}


export default RestaurantDetail;