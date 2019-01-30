import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import Home from './src/components/Home';

export default class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('MyWizeQ', () => App);
