import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
				<TouchableOpacity>
                	<Text style={styles.headerStyle}> Post </Text>
				</TouchableOpacity>
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
		
	},
    headerStyle: {
		color: "#FFF",
		fontSize: 16,
		fontWeight: '800',
    }
});
