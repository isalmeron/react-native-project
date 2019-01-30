import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import QuestionList from '../QuestionList';
import Details from '../Details';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          <QuestionList />
        </View>
      );
    }
}

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Details: {screen: Details}
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
