import React from "react";
import Classify from "../../Classify/Classify";
import PlayListClassify from "../../PlayListClassify/PlayListClassify";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Category = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Classify" component={Classify} />
      <Stack.Screen name="PlayListClassify" component={PlayListClassify} />
    </Stack.Navigator>
    );
};

export default Category;