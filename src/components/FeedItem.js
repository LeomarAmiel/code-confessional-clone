import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Feed from "../screens/Feed";

const FeedItem = ({ onData, onReact, itemsReactedTo }) => {
    // console.log(onData);
    const hasReactedTo = itemsReactedTo.filter(val => val.id === onData.id);
    console.log(hasReactedTo);
    return (
        <View style={styles.container}>
            <Text style={styles.confession}>{onData.confession}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={
						hasReactedTo.length === 0 
							? styles.button
							: hasReactedTo[0].action === "absolve"
								? [styles.button, styles.activeButton]
								: styles.button
                    }
                    onPress={
                        hasReactedTo.length === 0
                            ? () => onReact("absolve", onData)
                            : null
                    }
                >
                    <Text style={styles.absolveButton}>
                        {onData.absolve} Absolve
                    </Text>
                </TouchableOpacity>
				<TouchableOpacity                    
					style={
						hasReactedTo.length === 0 
							? styles.button
							: hasReactedTo[0].action === "condemn"
								? [styles.button, styles.activeButton]
								: styles.button
                        
                    }
                    onPress={
                        hasReactedTo.length === 0
                            ? () => onReact("condemn", onData)
                            : null
                    }
                >
                    <Text style={styles.condemnButton}>
                        {onData.condemn} Condemn
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapDispatchToProps = dispatch => ({
    onReact: (action, data) =>
        dispatch({ type: "REACT_CONFESSION", payload: { action, ...data } })
});

const mapStateToProps = ({ feed }) => ({
    itemsReactedTo: feed.itemsReactedTo
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginTop: 8,
        marginBottom: 4,
        marginLeft: 8,
        marginRight: 8
    },
    activeButton: {
		backgroundColor: "#F9F9F9",
    },
    absolveButton: {
        color: "#658995",
        fontWeight: "700"
    },
    condemnButton: {
        color: "#9f596d",
        fontWeight: "700"
    },
    button: {
        flex: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#F0F0F0",
        padding: 10
    },
    buttonContainer: {
        flexDirection: "row"
    },
    confession: {
        padding: 15
    }
});
