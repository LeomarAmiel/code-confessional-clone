import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { changeConfessForm } from '../actions';

class Confess extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.textArea} multiline={true} placeholder="Confess your sins" onChangeText={(text) => this.props.changeConfessForm(text)}>
					{this.props.confess}
				</TextInput>
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
		paddingTop: 15,
		margin: 10
	}
})

const mapStateToProps = ({confess}) => (
	confess
)

export default connect(mapStateToProps, { changeConfessForm })(Confess);