// @flow

import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import config from '../node_modules/config';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
