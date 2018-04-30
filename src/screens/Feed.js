import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import db from '../../firebase';
import FeedItem from '../components/FeedItem';

class Feed extends Component {
    constructor(props) {
        super(props);

        props.navigator.setStyle({
            navBarCustomView: "Component.TopBarHeader",
            navBarBackgroundColor: "#5ebfa5"
		});
		props.onRequest();
    }

    render() {
		var { fetching, error, confessions } = this.props.feed
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
				{ fetching === false && error === null && confessions!==null
					? confessions.map((data, index) => (
						<FeedItem key={index}>
							{data.confession}
						</FeedItem>
					))
					: <ActivityIndicator size='large' style={styles.spinner}/>
				}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebeb"
	},
	spinner: {
		marginTop: 10
	}
});

const mapStateToProps = ({feed}) => ({
	feed
})

const mapDispatchToProps = dispatch => ({
	onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
