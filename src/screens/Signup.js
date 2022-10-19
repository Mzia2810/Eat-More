// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// firebase
import auth, {firebase} from '@react-native-firebase/auth';
// Import React and Component
import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {setSignIn} from '../redux/slices/authSlice';
import {useDispatch} from 'react-redux';
// import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

const facebook = <FontAwesome name="facebook" size={25} color="#3A589B" />;
const twitter = <FontAwesome name="twitter" size={25} color="#03A9F4" />;
const google = <FontAwesome name="google" size={25} color="red" />;

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordErrorMessage, SetConfirmPasswordErrorMessage] =
    useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      setLoading(false);

      if (!email) {
        setErrorMessage('Enter correct  email');
        return;
      }
      if (!password) {
        setPasswordErrorMessage('Password is required field');
        return;
      }
      if (password?.length < 5 || password?.length > 10) {
        setPasswordErrorMessage('password 5 char to 10 char');
        return;
      }
      if (!confirmPassword) {
        SetConfirmPasswordErrorMessage('Confirm Password is required field');
        return;
      }
      if (confirmPassword?.length < 5 || confirmPassword?.length > 10) {
        SetConfirmPasswordErrorMessage('password 5 char to 10 char');
        return;
      }
      if (password !== confirmPassword) {
        setPasswordError("Confirm password isn't correct");
        return;
      }

      const userData = await auth().createUserWithEmailAndPassword(
        email,
        password,
        confirmPassword,
      );
      if (userData != null) {
        const userCredential = firebase
          .firestore()
          .collection('Users')
          .doc(auth().currentUser.uid);

        userCredential.set({
          id: auth().currentUser.uid,
          email: email,
          password: password,
          confirmPassword:confirmPassword,
        });
      }
    } catch (error) {
      console.log(error);
    }

    // const user = {
    //   isLoggedIn: true,
    //   email: email,
    //   password: password,
    //   cPassword: confirmPassword,
    // };

    // dispatch(setSignIn(user));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{position: 'absolute', marginTop: -150, marginLeft: -20}}>
        <Image
          source={require('../assets/MaskGroup3.png')}
          style={{width: 451, height: 451}}
        />
        {/* <Image
          source={require('../assets/Ellipse3.png')}
          style={{width: 451, height: 451, position: 'absolute'}}
        /> */}
      </View>
      <SafeAreaView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.loginBox}>
          <View style={styles.loginSignup}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signup}>signup</Text>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                value={email}
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
                color="black"
                onChangeText={email => setEmail(email)}
              />
            </View>
            {!email ? (
              <Text
                style={{
                  color: 'red',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                {errorMessage}
              </Text>
            ) : null}
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                // value={password}
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                secureTextEntry={true}
                blurOnSubmit={false}
                color="black"
                onChangeText={password => setPassword(password)}
              />
            </View>
            {!password ? (
              <Text
                style={{
                  color: 'red',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                {passwordErrorMessage}
              </Text>
            ) : null}

            {password?.length < 5 || password?.length > 10 ? (
              <Text
                style={{
                  color: 'red',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                {passwordErrorMessage}
              </Text>
            ) : null}
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Confirm Password"
                // value={confirmPassword}
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                secureTextEntry={true}
                blurOnSubmit={false}
                color="black"
                onChangeText={confirmPassword =>
                  setConfirmPassword(confirmPassword)
                }
              />
            </View>
            {!confirmPassword ? (
              <Text
                style={{
                  color: 'red',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                {confirmPasswordErrorMessage}
              </Text>
            ) : null}
            {password != confirmPassword ? (
              <Text
                style={{
                  color: 'red',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                {passwordError}
              </Text>
            ) : null}

            {password?.length < 5 || password?.length > 10 ? (
              <Text
                style={{
                  color: 'red',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                {confirmPasswordErrorMessage}
              </Text>
            ) : null}

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSignIn}>
              <Text style={styles.buttonTextStyle}>Sign up</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>

          <View style={{alignItems: 'center', color: '#8b9cb5', marginTop: 5}}>
            <Text>OR</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.facebook}>
              <TouchableOpacity>
                <Text>{facebook}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.twitter}>
              <TouchableOpacity>
                <Text>{twitter}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.google}>
              <TouchableOpacity>
                <Text>{google}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.saladImage}>
          <View>
            <Image
              source={require('../assets/salad-23.png')}
              style={styles.salad}
            />
          </View>
          <View>
            <Image
              source={require('../assets/two-red-tomatoes.png')}
              style={styles.tomatoes}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  backImage: {
    // position: 'relative',
  },

  loginBox: {
    width: 315,
    height: 500,
    marginTop: 100,
    marginLeft: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 35,
    marginRight: 35,
    margin: 5,
  },
  loginSignup: {
    flexDirection: 'row',
    width: 226,
    height: 28,
    marginLeft: 40,
    justifyContent: 'space-between',
    borderColor: 'black',
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 30,
    borderColor: 'black',
    borderRadius: 50,
    borderColor: '#dadae8',
    borderWidth: 1,
  },
  signup: {
    padding: 3,
    backgroundColor: '#FF0036',
    color: 'white',
    borderRadius: 20,
    width: 113,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  login: {
    padding: 3,
    width: 113,
    // backgroundColor: '#FF0036',
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0036',
  },

  buttonStyle: {
    backgroundColor: '#FF0036',
    borderWidth: 0,
    color: '#FFFFFF',
    // borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    width: 225,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    borderColor: '#dadae8',
    borderBottomWidth: 2,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  imageDesign: {
    width: '50%',
    height: 50,
    resizeMode: 'contain',
    margin: 30,
  },

  saladImage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 35,
  },
  salad: {
    width: 150,
    height: 120,
    marginLeft: -220,
    position: 'absolute',
    // marginTop: 25,
  },
  tomatoes: {
    width: 140,
    height: 120,
    marginLeft: -120,
    // marginTop:10,
    position: 'absolute',
  },

  facebook: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#EEEEF6',
    marginLeft: 80,
  },

  twitter: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#EEEEF6',
    marginLeft: 20,
  },
  google: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#EEEEF6',
    marginLeft: 20,
  },
});
