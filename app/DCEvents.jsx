import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Card, ButtonGroup } from "@rneui/themed";

export default function DCEvents() {
	const styles = StyleSheet.create({
		wrapper: {
			marginTop: "100px",
			paddingTop: 8,
			background: "blue",
		},
		fonts: {
			marginBottom: 8,
		},
		user: {
			flexDirection: "column",
			marginBottom: 6,
			minWidth: "100%",
			width: "100%",
		},
		// image: {
		//   width: 30,
		//   height: 30,
		//   marginRight: 10,
		// },
		name: {
			fontSize: 14,
			marginTop: 5,
		},
	});

	const events = [
		{
			name: "Earthsave Presents Monthly Potluck",
			date: "10/30/24",
			url: "https://www.facebook.com/events/537953398951385",
		},
		{
			name: "Social Happy Hour",
			date: "11/4/24",
			url: "https://www.facebook.com/events/914804310016943",
		},
	];

	const OpenURLButton = ({ url, children }) => {
		const handlePress = useCallback(async () => {
			// Checking if the link is supported for links with custom URL scheme.
			const supported = await Linking.canOpenURL(url);

			if (supported) {
				// Opening the link with some app, if the URL scheme is "http" the web link should be opened
				// by some browser in the mobile
				await Linking.openURL(url);
			} else {
				Alert.alert(`Don't know how to open this URL: ${url}`);
			}
		}, [url]);

		return <Button title={children} onPress={handlePress} />;
	};

	return (
		<View>
			{events.map((u, i) => {
				return (
					<>
						<Card key={i} style={{ display: "flex", flexDirection: "column" }}>
							<View key={i} style={styles.user}>
								{/* <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              /> */}
								<Text style={styles.name}>{u.name}</Text>
								<Text style={styles.name}>{u.date}</Text>
								<OpenURLButton url={u.url}>Learn More </OpenURLButton>
							</View>
						</Card>
					</>
				);
			})}
		</View>
	);
}
