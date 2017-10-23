import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { Provider } from 'react-redux'
import { configureStore } from './src/store';

import MainApp from './src/components/main'
export default class TodoList extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <MainApp/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList);
