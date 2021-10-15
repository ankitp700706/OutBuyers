import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "./../hooks/useApi";

function ListingsScreen({ navigation }) {
	const {
		data: listings,
		error,
		loading,
		request: loadListings,
	} = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<>
					<AppText>Couldn't retrieve the listings</AppText>
					<Button title="Retry" onPress={loadListings} />
				</>
			)}
			<ActivityIndicator visible={loading} />
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"Rs." + item.price}
						imageUrl={item.images[0].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						thumbnailUrl={item.images[0].thumbnailUrl}
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 10,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
