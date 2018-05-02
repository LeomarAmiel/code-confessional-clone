import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';


class PostButton extends React.Component {
	onPostConfession (){
		this.props.onPost();
		Navigation.dismissModal({
			animationType: 'slide-down'
		});
	}

    render() {
        return (
            <View style={styles.container}>
				<TouchableOpacity onPress={() => this.onPostConfession()}>
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

const mapDispatchToProps = dispatch => ({
    onPost: () => dispatch({ type: "POST_REQUEST" })
});

export default connect(null, mapDispatchToProps)(PostButton) 