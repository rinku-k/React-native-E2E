import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainPage from '../pages';
import SampleScreen from '../pages/sampleScreen';

const MainNavigator = createStackNavigator({
  home: { screen: MainPage },
  firstScreen: {
    screen: SampleScreen,
    navigationOptions: {
      title: 'This is sample screen',
    },
  },
});

AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
