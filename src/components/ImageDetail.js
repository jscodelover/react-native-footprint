import React from 'react';
import { Text, View, Image } from 'react-native';

const ImageDetail = props => {
	return (
		<View>
			<Text>{props.name}</Text>
			<Image source={props.image} />
		</View>
	);
};

export default ImageDetail;
