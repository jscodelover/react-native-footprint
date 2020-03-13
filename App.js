import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Component: ComponentScreen,
		List: ListScreen,
		ImageScreen: ImageScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App'
		}
	}
);

export default createAppContainer(navigator);
