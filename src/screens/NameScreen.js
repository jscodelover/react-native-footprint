import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const NameScreen = () => {
	const [name, setName] = React.useState('');
	return (
		<View>
			<TextInput
				style={styles.inputText}
				value={name}
				onChangeText={text => setName(text)}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text>Name: {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	inputText: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: '#000'
	}
});

export default NameScreen;
