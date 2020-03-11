import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
	const msg = <Text>It's working !!!</Text>;
	return (
		<View>
			<Text style={styles.formatText}>Hello from Component Screen</Text>
			{msg}
		</View>
	);
};

const styles = StyleSheet.create({
	formatText: {
		fontSize: 30,
		color: '#00FFDF'
	}
});

export default ComponentScreen;
