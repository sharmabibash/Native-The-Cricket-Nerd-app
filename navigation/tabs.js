import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70,
                    ...style.shadow,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Find"
                component={HomeScreen}
                options={{ headerShown: true }}
            />
            <Tab.Screen
                name="Post"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Settings"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Chat"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5D0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;
