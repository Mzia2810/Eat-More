import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';

// const givenData = [
//   {
//     id: 1,
//     title: 'Zinger Burger',
//     src: require('../assets/Zinger.png'),
//     price: '$50',
//   },
// ];

const SearchItem = ({data,navigation}) => {
//   console.log(data);

  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item}) => (
        <View style={{paddingRight: 15}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                id: item.id,
                title: item.title,
                image: item.src,
                price: item.price,
              })
            }>
            <View
              style={{
                marginLeft: 30,
                margin: 5,
                flex: 1,
                width: '90%',
                height: 85,
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: 'white',
                borderColor: '#8b9cb5',
                backgroundColor: 'black',

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                flexDirection: 'row',
              }}>
              <Image
                source={item.src}
                style={{
                  width: 90,
                  height: 80,
                  resizeMode: 'contain',
                  // marginTop: 18,
                  marginLeft: 10,
                  marginBottom:5,
                }}
              />

              <Text
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 30,
                  marginLeft: 10,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'white',
                  marginTop: 30,
                  marginLeft: 10,
                }}>
                {' '}
                Price : {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default SearchItem;
