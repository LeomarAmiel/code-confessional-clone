import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class extends Component {
	render() {
		console.log(this.props.navigator)
		this.props.navigator.setStyle({
			navBarCustomView: 'TopBarHeader',
			navBarBackgroundColor: '#5ebfa5'
		});
		return (
			<View>
				<Text> Screen One </Text>
			</View>
		)
	}
}