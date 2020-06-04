import 'react-native-gesture-handler';
import React from 'react';
import { Platform, StyleSheet, Text, View, Vibration } from 'react-native';
import AppContainer from "./src/AppContainer/AppContainer";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ExpoToken from "./src/services/ExpoToken/ExpoToken";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const Stack = createStackNavigator();

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        
        return (
            <NavigationContainer
                >
                <Stack.Navigator>
                    <Stack.Screen
                        name="App"
                        component={AppContainer}
                        options={{
                            headerShown: false
                        }}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};