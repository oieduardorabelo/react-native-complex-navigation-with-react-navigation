// App.js
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Example from './Example';

const App = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: Example,
  },
  App: {
    screen: Example,
  },
});

export default createAppContainer(App);
