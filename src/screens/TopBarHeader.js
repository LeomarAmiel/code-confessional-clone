import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
				<View>

                	<Text style={styles.headerStyle}> NEW </Text>
				</View>
				<View style={styles.middleButton}>
                	<Text style={styles.headerStyle}> RANDOM </Text>
				</View>
				<View>
               		<Text style={styles.headerStyle}> HOT </Text>
				</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5ebfa5",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#FFF"
	},
	middleButton: {
        borderColor: "#FFF",
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
    headerStyle: {
		color: "#FFF",
		padding: 7,
		fontWeight: '800',
    }
});
