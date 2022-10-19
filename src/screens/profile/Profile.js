import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import auth from '@react-native-firebase/auth';



 const Profile = () => {

  const handleSignOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{position: 'absolute', zIndex: 0, marginTop: -150, marginLeft: -70}}>
            <Image
              source={require('../../assets/MaskGroup3.png')}
              style={{width: 551, height: 351, zIndex: 2 }}
            />
            {/* <Image
              source={require('../../assets/Ellipse3.png')}
              style={{width: 551, height: 200, zIndex: 2,marginTop:-200 }}
            /> */}
          </View>
        <Image
          source={require('../../assets/Profile.jpeg')}
          style={styles.avatar}
        />
        </View>

        <View style={{marginTop:50}}>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
              Muhammad Zia
            </Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amen, sapele sapience eu nam. Qui ne assume
              electrum expends, omittance deseruisse consequently ius an,
            </Text>

            <View style={{marginTop: 40}}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={handleSignOut}>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                 Sign out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </View>

    );
  }

  export default Profile;

const styles = StyleSheet.create({
  container:{
backgroundColor:'white',
height:'100%'

  },
  header:{
    position:'relative',
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"black",
    fontWeight:'600',
  },
  body:{
    height:200,
//    backgroundColor:'blue',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
 backgroundColor:'yellow',
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#FF0036",
  },
});
