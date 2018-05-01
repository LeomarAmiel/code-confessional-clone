import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { changeCategory } from '../actions';
class TopBarHeader extends Component {
    render() {
		const { feedCategory, changeCategory } = this.props;
        return (
            <View style={styles.container}>
				<View>
					<TouchableOpacity 
						onPress={() => changeCategory('new')}
						style={feedCategory==="new" ? styles.activeButton : null }
						disabled={feedCategory==='new' ? true : false }>
                		<Text style={feedCategory==="new" ? styles.activeButtonText : styles.inactiveButtonText}> NEW </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.middleButton}>
					<TouchableOpacity 
						onPress={() => changeCategory('random')}
						style={feedCategory==="random" ? styles.activeButton : null }
						disabled={feedCategory==='random' ? true : false }>
                		<Text style={feedCategory==="random" ? styles.activeButtonText : styles.inactiveButtonText}> RANDOM </Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity 
						onPress={() => changeCategory('hot')}
						style={feedCategory==="hot" ? styles.activeButton : null }
						disabled={feedCategory==='hot' ? true : false }>
               			<Text style={feedCategory==="hot" ? styles.activeButtonText : styles.inactiveButtonText}> HOT </Text>
					</TouchableOpacity>
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
	activeButton: {
		backgroundColor: '#FFF',
	},
	activeButtonText: {
		color: '#5ebfa5',
		padding: 6,
		fontSize: 12,
		fontWeight: '800',
	},
	middleButton: {
        borderColor: "#FFF",
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
    inactiveButtonText: {
		color: "#FFF",
		padding: 6,
		fontSize: 12,
		fontWeight: '800',
    }
});

const mapStateToProps = ({feedCategory}) => (feedCategory)

export default connect(mapStateToProps, { changeCategory })(TopBarHeader);