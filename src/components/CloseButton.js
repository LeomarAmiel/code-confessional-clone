
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
				<TouchableOpacity>
                	<Text style={styles.headerStyle}> &#x2715; </Text>
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
		fontSize: 24,
		fontWeight: '800',
    }
});