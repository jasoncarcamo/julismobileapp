import 'react-native-gesture-handler';
import React from 'react';
import { Platform, StyleSheet, Text, View, Vibration } from 'react-native';
import AppContainer from "./src/AppContainer/AppContainer";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

import {StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
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
=======
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
>>>>>>> hotfix
