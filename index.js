import React from "react";
import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens";
import ScreenOne from "./src/screens/ScreenOne";

registerScreens(); 


Navigation.startSingleScreenApp({
    screen: {
        label: "One",
        screen: "ScreenOne", 
        title: "Screen One"
    }
});
