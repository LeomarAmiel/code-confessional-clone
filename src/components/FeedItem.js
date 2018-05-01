import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default FeedItem = (props) => {
	return (
	<View style={styles.container}>
		<Text style={styles.confession}> {props.children} </Text>
		<View style={styles.buttonContainer}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.absolveButton}>
					{props.onData.absolve} Absolve
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.condemnButton}>
					{props.onData.condemn} Condemn
				</Text>
			</TouchableOpacity>
		</View>
	</View>
)
}
const styles = StyleSheet.create({
	container: {
        backgroundColor: "#FFF",
        marginTop: 8,
		marginBottom: 4,
		marginLeft: 8,
		marginRight: 8
	},
	absolveButton: {
		color: '#658995',
		fontWeight: '700'

	},
	condemnButton: {
		color: '#9f596d',
		fontWeight: '700'
	},
	button: {
		flex: 1,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#f5f5f5',
		padding: 10
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	confession: {
		padding: 15,
	}
})