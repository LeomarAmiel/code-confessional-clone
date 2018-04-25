import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
				<TouchableOpacity>
                	<Text style={styles.headerStyle}> CONFESS </Text>
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
		padding: 7,
		fontWeight: '800',
    }
});
