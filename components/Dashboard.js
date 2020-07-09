import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

const Dashboard = (props) => {
    return(
        <NavigationContainer fallback={<Text>Loading...</Text>}>
                <Tabs />
                <Text>Dashboard</Text>
            {/* <Text onPress={() => AsyncStorage.clear().then(() => props.setLogin(false))}>SignOut</Text> */}
        </NavigationContainer>
    )
}

export default Dashboard;