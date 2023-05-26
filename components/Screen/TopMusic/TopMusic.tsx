import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";
import Top100 from "../../Top100/Top100";
import PlaylistTop100 from "../../PlayListTop100/PlayListTop100";
const Stack = createNativeStackNavigator();

const TopMusic = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name = "Top100" component={Top100}></Stack.Screen>
            <Stack.Screen name = "PlaylistTop100" component={PlaylistTop100}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default TopMusic;