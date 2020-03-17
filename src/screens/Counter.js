import React from 'react';
import { Text, Button, View } from 'react-native';

const Counter = () => {
	const [counter, setCounter] = React.useState(0);
	return (
		<View>
			<Text>Counter: {counter}</Text>
			<Button onPress={() => setCounter(counter + 1)} title="increment"></Button>
			<Button onPress={() => setCounter(counter - 1)} title="decrement"></Button>
		</View>
	);
};

export default Counter;
