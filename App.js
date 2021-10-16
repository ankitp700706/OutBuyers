import React, { useState, useEffect } from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	const restoreToken = async () => {
		const token = await authStorage.getToken();
		if (!token) return;
		setUser(jwtDecode(token));
	};

	if (!isReady) {
		return (
			<AppLoading
				onError={console.warn}
				startAsync={restoreToken}
				onFinish={() => setIsReady(true)}
			/>
		);
	}

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
				{/* <AppNavigator /> */}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
