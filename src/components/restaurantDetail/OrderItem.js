import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const  OrderItem = (props) => {
  const { title, price } = props.item.item;
  // console.log(' props title from orderItem',title)
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      {/* <Text>Muhammad</Text> */}
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
}


export default OrderItem;