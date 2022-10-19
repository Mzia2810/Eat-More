import {View, Text, Image, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';

// const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: 1,
    itemId: 1,

    src: require('../assets/Zinger.png'),
  },
  {
    id: 2,
    itemId: 1,

    src: require('../assets/Zinger.png'),
  },
  {
    id: 3,
    itemId: 1,

    src: require('../assets/two-red-tomatoes.png'),
  },
  {
    id: 4,
    itemId: 4,

    src: require('../assets/two-red-tomatoes.png'),
  },
  {
    id: 5,
    itemId: 5,

    src: require('../assets/Zinger.png'),
  },
  {
    id: 6,
    itemId: 6,

    src: require('../assets/salad-23.png'),
  },
];

const star = <MaterialIcons name="star-rate" size={25} color="yellow" />;

const CarouselSlider = ({id, title, price}) => {
  const itemData = data.filter(item => item.itemId == id);

  //   const [index, setIndex] = useState(0);
  //   const indexRef = useRef(index);

  //   indexRef.current = index;

  //   const onScroll = useCallback(event => {
  //     const slideSize = event.nativeEvent.layoutMeasurement.width;
  //     const index = event.nativeEvent.contentOffset.x / slideSize;
  //     const roundIndex = Math.round(index);

  //     const distance = Math.abs(roundIndex - index);

  //     const isNoMansLand = 0.4 < distance;

  //     if (roundIndex != indexRef.current && !isNoMansLand) {
  //       setIndex(roundIndex);
  //     }
  //   }, []);

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      //   pagingEnabled={true}
      //   onScroll={onScroll}
      data={itemData}
      renderItem={({item}) => (
        <View style={{flex: 1, width: 369, height: 300}} key={item.id}>
          <Image
            source={item.src}
            style={{width: 240, height: 200, marginLeft: 50}}
          />
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.75,
                shadowRadius: 4.84,
                elevation: 5,
              }}>
              {star} {star} {star} {star}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}> {title}</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{price}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default CarouselSlider;
