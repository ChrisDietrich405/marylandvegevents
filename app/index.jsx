import React, { useCallback, useState } from "react";
import { Link, Stack } from "expo-router";
import { View, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, Card, ButtonGroup } from "@rneui/themed";

export default function HomeComponent() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const options = ["Maryland Events", "D.C. Events"];

	const navigation = useNavigation();

	const routes = [
		{ name: "MarylandEvents", params: { name: "MarylandEvents" } },
		{ name: "DCEvents", params: { name: "DCEvents" } },
	];

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
		image: {
			width: 258,
			height: 82,
			margin: 30,
			alignSelf: "center",
		},
		title: {
			fontWeight: "bold",
			marginBottom: 10,
		},
		date: {
			marginBottom: 10,
		},
	});

	const events = [
		{
			name: "Earthsave Presents Monthly Potluck",
			city: "Baltimore",
			date: "10/30/24",
			time: "6:00",
			url: "https://www.facebook.com/events/537953398951385",
		},
		{
			name: "Social Happy Hour",
			city: "Baltimore",
			date: "10/30/24",
			time: "6:00",
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

		return (
			<Button
				buttonStyle={{ backgroundColor: "#288528" }}
				title={children}
				onPress={handlePress}
			/>
		);
	};

	return (
		<View style={styles.wrapper}>
			<Image
				style={styles.image}
				resizeMode="cover"
				source={require("../assets/images/logo.png")}
			/>

			<ButtonGroup
				buttons={options}
				selectedIndex={selectedIndex}
				onPress={(value) => {
					setSelectedIndex(value);
					const { name, params } = routes[value];
					navigation.navigate(name, params);
				}}
				containerStyle={{
					marginBottom: 20,
				}}
				buttonStyle={{ backgroundColor: "#288528" }}
				textStyle={{ color: "#fff" }}
				selectedButtonStyle={{ backgroundColor: "#B0B9B0" }} // Change this to your selected button background color
				selectedTextStyle={{ color: "#fff" }}
			/>
			{events.map((u, i) => {
				return (
					<>
						<Card key={i} style={{ display: "flex", flexDirection: "column" }}>
							<View key={i} style={styles.user}>
								<Text style={styles.title}>{u.name}</Text>
								<Text style={styles.title}>{u.city}</Text>
								<Text style={styles.date}>{u.date}</Text>
								<Text style={styles.title}>{u.time}</Text>
								<OpenURLButton url={u.url}>Learn More </OpenURLButton>
							</View>
						</Card>
					</>
				);
			})}
		</View>
	);
}
