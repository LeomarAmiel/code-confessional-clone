import React, { Component } from "react";
import {
    ActivityIndicator,
    FlatList,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import db from "../../firebase";
import FeedItem from "../components/FeedItem";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
        props.navigator.setStyle({
            navBarCustomView: "Component.TopBarHeader",
            navBarBackgroundColor: "#5ebfa5"
        });
        props.onRequest();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps.feed.fetching !== prevState.refreshing
            ? { refreshing: nextProps.feed.fetching }
            : null;
    }

    renderList() {
        var { fetching, error, confessions } = this.props.feed;
        if (error === null && confessions !== null) {
            return (
                <FlatList
                    data={confessions}
                    keyExtractor={(item, index) => item.id.toString()}
                    onRefresh={() => this.props.onRequest()}
                    refreshing={this.state.refreshing}
                    renderItem={({ item, index }) => (
                        <FeedItem onData={item}/>
                    )}
                />
            );
        } else {
            return <ActivityIndicator size="large" style={styles.spinner} />;
        }
    }

    render() {
        var { fetching, error, confessions } = this.props.feed;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                {this.renderList()}
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

const mapStateToProps = ({ feed }) => ({
    feed
});

const mapDispatchToProps = dispatch => ({
    onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
