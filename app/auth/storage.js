import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log("error storing the auth token", error);
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log("error getting Auth Token", error);
	}
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log("error removing the auth token", error);
	}
};

export default {
	getToken,
	removeToken,
	storeToken,
};
