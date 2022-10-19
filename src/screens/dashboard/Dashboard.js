
import React, {useEffect, useState,} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Categories from '../../components/home/Categories';
import RestaurantItems from '../../components/home/RestaurantItems';
import SearchBar from '../../components/home/SearchBar';
import HeaderTabs from '../../components/home/HeaderTabs';
import  localRestaurants from '../../components/home/RestaurantItems';
const {width, height} = Dimensions.get('window');
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import SearchItem from '../../components/SearchItem';
// const star = <MaterialIcons name="star-rate" size={15} color="yellow" />;
// const starOutline = (<MaterialIcons name="star-outline" size={12} color="yellow" />);
// const shoppingBag = (<MaterialIcons name="shopping-basket" size={30} color="white" />);

const DATA = [
  {
    id: 1,
    title: 'Burgers',
    src: require('../../assets/burger.png'),
  },
  {
    id: 2,
    title: 'Pizza',
    src: require('../../assets/fast-food.png'),
  },
  {
    id: 3,
    title: 'Chicken',
    src: require('../../assets/chicken.png'),
  },
  {
    id: 4,
    title: 'Burger',
    src: require('../../assets/burger.png'),
  },
  {
    id: 5,
    title: 'Pizza',
    src: require('../../assets/fast-food.png'),
  },
  {
    id: 6,
    title: 'Chicken',
    src: require('../../assets/chicken.png'),
  },
];

const givenData = [
  {
    id: 1,
    title: 'Zinger Burger',
    src: require('../../assets/Zinger.png'),
    price: 50,
  },
  {
    id: 2,
    title: 'Chicken Burger',
    src: require('../../assets/ChickenBurger.png'),
    price: 90,
  },

  {
    id: 4,
    title: 'Tomatoes',
    src: require('../../assets/two-red-tomatoes.png'),
    price: 40,
  },
  {
    id: 5,
    title: 'Salad',
    src: require('../../assets/salad-23.png'),
    price: 30,
  },
  {
    id: 6,
    title: 'Fruit Chat',
    src: require('../../assets/Vegitables.png'),
    price: 70,
  },
];





const Dashboard = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [searchItem, setSearchItem] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [city, setCity] = useState("islamabad");
  const [foodItems,setFoodItems] = useState('::');
 
 


   
  
  // const [data,setData] = useState([]);

  // const SearchText = searchItem => {
  //   setSearchItem(searchItem);

  //   const searchedData = givenData.filter(item =>
  //     item.title.trim().toLowerCase().includes(searchItem.trim().toLowerCase()),
  //   );
  //   setFilterData(searchedData);
  //   console.log(searchedData);

  //   if (!searchItem || searchItem === '') {
  //     setFilterData([]);
  //   }
  // };

  return (
    <View style={{flex: 1,}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{marginTop: 15, marginLeft: 30}}>
          <MaterialIcons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/Profile.jpeg')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>
      
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar cityHandler={setCity} />
      <Categories />

      {/* <View style={styles.SectionStyle}> */}
   
      {/* </View> */}

      {/* {filterData ? (
        <SearchItem data={filterData} navigation={navigation} />
      ) : null} */}
      <ScrollView>

      <RestaurantItems  navigation={navigation}/>
      </ScrollView>

    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  drawerAndProfile: {
    justifyContent: 'space-between',
  },

  profile: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginTop: 5,
    marginRight: 30,
    borderWidth: 2,
    borderColor: 'white',
  },

  foodHeading: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  SectionStyle: {
    flexDirection: 'row',
    width:'100%',
    height: 20,
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    marginBottom:30
    // alignSelf:'center'
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 30,
    borderColor: '#8b9cb5',
    borderWidth: 2,
    backgroundColor:'#FFFF'
  },
  CategoriesBox: {
    marginLeft: 30,
  },

  Categories: {
    fontSize: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginTop: 25,
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },

  shoppingBag: {
    marginTop: 50,
    marginLeft: 310,
    backgroundColor: 'red',
    width: width / 6,
    height: height / 11,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
});













      {/* <View style={styles.CategoriesBox}>
        <Text style={styles.Categories}>Categories</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => (
            <View style={{paddingRight: 15}}>
              <View
                style={{
                  width: 110,
                  height: 70,
                  borderWidth: 1,
                  borderRadius: 30,
                  backgroundColor: 'white',
                  borderColor: 'red',
                  borderColor: '#8b9cb5',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                }}>
                <TouchableOpacity>
                  <Image
                    source={item.src}
                    style={{
                      width: 26.5,
                      height: 20.5,
                      resizeMode: 'contain',
                      marginLeft: 37,
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    flex: 1,
                    fontWeight: 'bold',
                    marginLeft: 28,
                    color: '#8b9cb5',
                  }}>
                  {' '}
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      </View> */}
      {/* // Burgers */}

      {/* <View style={styles.CategoriesBox}>
        <Text style={styles.Categories}>Burgers</Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={givenData}
          renderItem={({item}) => (
            <View style={{paddingRight: 10}}>
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
                    width: width / 3,
                    height: height / 4,
                    borderWidth: 1,
                    borderRadius: 40,
                    backgroundColor: 'white',
                    borderColor: 'red',
                    borderColor: '#8b9cb5',
                    backgroundColor: '#FF0036',

                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                  }}>
                  <Image
                    source={item.src}
                    style={{
                      width: width / 4,
                      height: height / 9,
                      resizeMode: 'contain',
                      marginTop: 5,
                      marginLeft: 10,
                    }}
                  />

                  <Text
                    style={{
                      flex: 1,
                      fontWeight: 'bold',
                      marginLeft: 20,
                      color: 'white',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontWeight: '800',
                      marginLeft: 15,
                      color: '#8b9cb5',
                    }}>
                    {' '}
                    {star} {star} {star} {star} {starOutline}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontWeight: 'bold',
                      fontSize: 20,
                      marginLeft: 20,
                      color: 'white',
                      // marginBottom: 10,
                    }}>
                    {' '}
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View> */}

      {/* <TouchableOpacity
        style={styles.shoppingBag}
        onPress={() => navigation.navigate('AddToCart')}>
        <View>{shoppingBag}</View>
      </TouchableOpacity> */}