import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
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
		console.log(this.props.feed.feed);
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
				{ this.props.feed.feed !== null 
					? this.props.feed.feed.map((data, index) => {
						console.log(data);
						return (
							<FeedItem>
								data.confession
							</FeedItem>
						)
					})
					: null
				}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebeb"
    }
});

const mapStateToProps = ({feed}) => ({
	feed
})

const mapDispatchToProps = dispatch => ({
	onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
