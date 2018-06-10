//Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

//Create a component
const App = () => (
    <Header headerText={'Paintsville, KY'} />
  );

//Render it to the device
AppRegistry.registerComponent('weather', () => App);
