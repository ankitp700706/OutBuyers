import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerTitleAlign: "center",
		}}
	>
		<Stack.Screen
			name="Listings"
			component={ListingsScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="ListingDetails"
			component={ListingDetailsScreen}
			options={{ title: "" }}
			// options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;
