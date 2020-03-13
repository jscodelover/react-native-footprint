import React from 'react';
import { Text, View } from 'react-native';
import ImageDetail from './ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<Text>Image Screen</Text>
			<ImageDetail name="beach" image={require('../../assets/beach.jpg')} />
			<ImageDetail name="forest" image={require('../../assets/forest.jpg')} />
			<ImageDetail name="mountain" image={require('../../assets/mountain.jpg')} />
		</View>
	);
};

export default ImageScreen;
