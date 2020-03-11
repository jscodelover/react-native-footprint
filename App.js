import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		ComponentScreen
	},
	{
		initialRouteName: 'ComponentScreen',
		defaultNavigationOptions: {
			title: 'App'
		}
	}
);

export default createAppContainer(navigator);
