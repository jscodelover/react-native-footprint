import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const ListComponent = () => {
	const friends = [
		{ name: 'Manisha', age: 24 },
		{ name: 'Nehal', age: 21 },
		{ name: 'Mani', age: 22 },
		{ name: 'Nikki', age: 16 },
		{ name: 'Mikki', age: 10 },
		{ name: 'Song chacha', age: 29 },
		{ name: 'Rikki', age: 26 },
		{ name: 'Lucky', age: 13 },
		{ name: 'Harry', age: 16 }
	];
	return (
		<FlatList
			data={friends}
			keyExtractor={item => item.name}
			renderItem={({ item, index }) => (
				<Text
					style={
						friends.length - 1 === index
							? [styles.text, styles.bottomBorder]
							: styles.text
					}
				>
					{item.name}: {item.age}
				</Text>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 19,
		borderWidth: 1,
		borderBottomWidth: 0,
		maxWidth: 150,
		paddingVertical: 10,
		marginLeft: 10,
		textAlign: 'center'
	},
	bottomBorder: {
		borderBottomWidth: 1
	}
});

export default ListComponent;
