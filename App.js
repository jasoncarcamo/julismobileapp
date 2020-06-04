import 'react-native-gesture-handler';
import React from 'react';
<<<<<<< HEAD
import { Platform, StyleSheet, Text, View, Vibration } from 'react-native';
import AppContainer from "./src/AppContainer/AppContainer";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ExpoToken from "./src/services/ExpoToken/ExpoToken";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const Stack = createStackNavigator();
=======
import {StyleSheet, Text, View, Dimensions } from 'react-native';
>>>>>>> a31359370235e4a7ba48e1cfc138b8445e49f15c

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        
        return (
            <View
                style={DemoStyle.container}>
                <Text
                    style={DemoStyle.text}>Working</Text>
            </View>
        )
    }
};

const DemoStyle = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    text: {
        position: "relative",
        top: "50%",
        fontSize: 20,
        textAlign: "center"
    }
})