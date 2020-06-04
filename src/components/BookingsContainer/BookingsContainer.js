import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import BookItem from "./BookItem/Booktem";
import Bookings from "./Bookings/Bookings";
import MenuIcon from "../MenuIcon/MenuIcon";
import BookingsNotification from "./BookingsNotification/BookingsNotification";

const Stack = createStackNavigator();



export default class ContactsContainer extends React.Component{

    renderMainScreens = ()=>{
        return (
            <Stack.Navigator
                screenOptions={{
                    headerRight: ()=> <MenuIcon navigation={this.props.navigation}/>
                }}>
                <Stack.Screen
                    name="Bookings"
                    component={Bookings}></Stack.Screen>

                <Stack.Screen
                    name="Book item"
                    component={BookItem}></Stack.Screen>
            </Stack.Navigator>
        )
    };

    render(){

        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Book Main"
                    options={{
                        headerShown: false
                    }}
                    component={this.renderMainScreens}></Stack.Screen>
                
                <Stack.Screen
                    name="New bookings appointment"
                    component={BookingsNotification}
                    options={{
                        headerShown: false
                    }}></Stack.Screen>
            </Stack.Navigator>
        )
    }
}