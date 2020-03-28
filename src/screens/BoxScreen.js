import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={[styles.item, styles.item1]}>1</Text>
			<Text style={[styles.item, styles.item2]}>2</Text>
			<Text style={[styles.item, styles.item3]}>3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	item: {
		width: Dimensions.get('window').width / 3,
		padding: 20,
		textAlign: 'center',
		borderWidth: 1
	},
	item2: {
		top: 58
	}
});

export default BoxScreen;
