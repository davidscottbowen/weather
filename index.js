//Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component
const App = () => (
    <Text>75˚</Text>
  );

//Render it to the device
AppRegistry.registerComponent('weather', () => App);
