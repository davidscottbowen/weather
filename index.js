//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import WeatherList from './src/components/WeatherList';

//Create a component
const App = () => (
    <View>
      <Header headerText={'Paintsville, KY'} />
      <WeatherList />;
    </View>
  );

//Render it to the device
AppRegistry.registerComponent('weather', () => App);
