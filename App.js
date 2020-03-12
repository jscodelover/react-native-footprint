import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Component: ComponentScreen,
		List: ListScreen
	},
	{
		initialRouteName: 'List',
		defaultNavigationOptions: {
			title: 'App'
		}
	}
);

export default createAppContainer(navigator);
