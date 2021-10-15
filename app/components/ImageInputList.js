import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
	const scrollView = useRef(null);
	return (
		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() =>
					scrollView.current.scrollToEnd({ animated: true })
				}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => {
									onRemoveImage(uri);
									scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
								}}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});

export default ImageInputList;
