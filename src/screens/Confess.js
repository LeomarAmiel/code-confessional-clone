import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Confess extends Component {
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
		backgroundColor: '#ebebeb',
		flex: 1,
	},
	textArea: {
		flex: 1,
		backgroundColor: '#FFF',
		padding: 10,
		margin: 10
	}
})

export default connect()(Confess);