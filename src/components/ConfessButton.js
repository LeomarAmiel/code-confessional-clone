import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class extends React.Component {

	routeToConfess() {
		Navigation.showModal({
			screen: 'Confess',
			navigatorButtons: {	
				rightButtons: [{
					id: 'post-button',
					component: 'Component.PostButton',
				}],
				leftButtons: [{
					id: 'close-button',
					component: 'Component.CloseButton'
				}]
			},
			navigatorStyle: {
				navBarBackgroundColor: '#5ebfa5'
			}
		})
	}


    render() {
        return (
            <View style={styles.container}>
				<TouchableOpacity onPress={this.routeToConfess}>
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
		marginRight: -15,
	},
    headerStyle: {
		color: "#FFF",
		padding: 7,
		fontWeight: '800',
    }
});
