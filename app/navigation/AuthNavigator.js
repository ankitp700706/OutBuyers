import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerTitleAlign: "center",
		}}
	>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Login"
			component={LoginScreen}
			options={{ animation: "slide_from_right" }}
		/>
		<Stack.Screen
			name="Register"
			component={RegisterScreen}
			options={{ animation: "slide_from_left" }}
		/>
	</Stack.Navigator>
);

export default AuthNavigator;
