import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class extends Component {
	render() {
		this.props.navigator.setStyle({
			navBarCustomView: 'Component.TopBarHeader',
			navBarBackgroundColor: '#5ebfa5'
		});
		return (
			<View style={styles.container}>
				<View style={styles.confessionContainer}>
					<Text> Confession One </Text>
				</View>
				<View style={styles.confessionContainer}>
					<Text> Confession Two </Text>
				</View>
				<View style={styles.confessionContainer}>
					<Text> Confession Three </Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebebeb',
	},
	confessionContainer: {
		backgroundColor: '#FFF',
		padding: 5,
		margin: 4
	}
})