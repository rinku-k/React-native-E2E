import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation'
import { store } from './store';

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
