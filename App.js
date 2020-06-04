import 'react-native-gesture-handler';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppContainer from "./src/AppContainer/AppContainer";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class App extends React.Component{

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
        )
    }
};