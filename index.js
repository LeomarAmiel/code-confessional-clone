import React from "react";
import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens";
import { registerComponents } from "./src/components";

registerScreens(); 
registerComponents();

Navigation.startSingleScreenApp({
    screen: {
        screen: "Feed",
		navigatorButtons: {
			rightButtons: [{
				id: 'confess-button',
				component: 'Component.ConfessButton',
			}]
		},
		navigatorStyle: {
			navBarBackgroundColor: '#5ebfa5',
			navBarTextColor: '#FFF'
		}
	},
	
});
