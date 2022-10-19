import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text ,StatusBar} from 'react-native';

//import all the components we are going to use
import {Provider} from 'react-redux';
import AppRoute from './src/navigations/navigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FF0036" style="dark-content" />
      <AppRoute />
     </Provider>
  );
};

export default App;
