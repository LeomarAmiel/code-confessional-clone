import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
	console.log(props);
	<View style={styles.container}>
		<Text> {props.children} </Text>
	</View>
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: "#FFF",
        padding: 5,
        margin: 4
    }
})