import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
	const listing = route.params;
	return (
		<View style={styles.mainContainer}>
			<Image
				style={styles.image}
				tint="light"
				preview={{ uri: listing.images[0].thumbnailUrl }}
				uri={listing.images[0].url}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.price}>${listing.price}</Text>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/profile.jpg")}
						title="Ankit Pandey"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		// paddingTop: StatusBar.currentHeight,
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
