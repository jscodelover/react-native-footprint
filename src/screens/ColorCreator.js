import React from 'react';
import { View, Text, Button } from 'react-native';

const ColorCreator = () => {
	const [red, setRed] = React.useState(0);
	const [green, setGreen] = React.useState(0);
	const [blue, setBlue] = React.useState(0);

	function handleColor(color, fn, add) {
		if (add) {
			color < 255 && fn(color + 5);
		} else {
			color > 0 && fn(color - 5);
		}
	}
	return (
		<View>
			<Button
				onPress={() => handleColor(red, setRed, 1)}
				title="More Red"
			></Button>
			<Button
				onPress={() => handleColor(red, setRed, 0)}
				title="Less Red"
			></Button>
			<Button
				onPress={() => handleColor(green, setGreen, 1)}
				title="More Green"
			></Button>
			<Button
				onPress={() => handleColor(green, setGreen, 0)}
				title="Less Green"
			></Button>
			<Button
				onPress={() => handleColor(blue, setBlue, 1)}
				title="More Blue"
			></Button>
			<Button
				onPress={() => handleColor(blue, setBlue, 0)}
				title="Less Blue"
			></Button>
			<Text>
				r:{red} g:{green} b:{blue}
			</Text>
			<View
				style={{
					width: 200,
					height: 200,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`
				}}
			/>
		</View>
	);
};

export default ColorCreator;
