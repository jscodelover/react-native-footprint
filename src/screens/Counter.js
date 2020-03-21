import React from 'react';
import { Text, Button, View } from 'react-native';

function reducer(state, action) {
	switch (action.type) {
		case 'incr':
			return {
				...state,
				counter: state.counter + 1
			};
		case 'decr':
			return {
				...state,
				counter: state.counter - 1
			};
		default:
			return state;
	}
}

const Counter = () => {
	const [state, dispatch] = React.useReducer(reducer, { counter: 0 });
	return (
		<View>
			<Text>Counter= {state.counter}</Text>
			<Button
				onPress={() => dispatch({ type: 'incr' })}
				title="increment"
			></Button>
			<Button
				onPress={() => dispatch({ type: 'decr' })}
				title="decrement"
			></Button>
		</View>
	);
};

export default Counter;
