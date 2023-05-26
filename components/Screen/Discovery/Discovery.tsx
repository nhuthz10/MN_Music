import React from "react";
import Content from "../../Content/Content/Content";
import Playlist from "../../Playlist/Playlist";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Discovery = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Playlist" component={Playlist} />
    </Stack.Navigator>
    );
};

export default Discovery;