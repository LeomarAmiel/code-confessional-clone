import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.textArea} multiline={true} placeholder="Confess your sins"/>
			</View>
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebebeb',
	},
	textArea: {
		flex: 1,
		backgroundColor: '#FFF',
		padding: 5,
		margin: 8
	}

})