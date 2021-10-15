import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import Screen from "./app/components/Screen";

export default function App() {
	return (
		<>
			<OfflineNotice />

			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
				{/* <AuthNavigator /> */}
			</NavigationContainer>
		</>
	);
}
