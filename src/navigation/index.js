import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainPage from '../pages';
import SampleScreen from '../pages/sampleScreen';
import ServerDataScreen from '../pages/serverData';

const MainNavigator = createStackNavigator({
  home: { screen: MainPage },
  firstScreen: {
    screen: SampleScreen,
    navigationOptions: {
      title: 'This is sample screen',
    },
  },
  serverScreen: { screen: ServerDataScreen },
});

AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
