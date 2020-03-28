import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/Counter';
import ColorCreator from './src/screens/ColorCreator';
import NameScreen from './src/screens/NameScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Component: ComponentScreen,
		List: ListScreen,
		ImageScreen: ImageScreen,
		Counter: CounterScreen,
		ColorCreator,
		Name: NameScreen,
		BoxScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App'
		}
	}
);

export default createAppContainer(navigator);
