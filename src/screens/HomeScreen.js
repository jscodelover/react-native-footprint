import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = props => {
	const {
		navigation: { navigate }
	} = props;
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<TouchableOpacity onPress={() => navigate('Component')}>
				<Text style={styles.btnT}>On Component Screen</Text>
			</TouchableOpacity>
			<Button
				style={styles.btn}
				onPress={() => navigate('List')}
				title="On List Screen"
			/>
			<Button
				style={styles.btn}
				onPress={() => navigate('ImageScreen')}
				title="On Image Screen"
			/>
			<Button
				style={styles.btn}
				onPress={() => navigate('Counter')}
				title="On Counter Screen"
			/>
			<Button
				style={styles.btn}
				onPress={() => navigate('ColorCreator')}
				title="On Color Screen"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	},
	btnT: {
		backgroundColor: '#ff00aa',
		width: 200,
		paddingHorizontal: 15,
		paddingVertical: 20
	},
	btn: {
		marginBottom: 12
	}
});

export default HomeScreen;
