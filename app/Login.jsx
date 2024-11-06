import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [secureText, setSecureText] = useState(true);

	return (
		<View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
			<Input
				placeholder="Email"
				leftIcon={<Icon name="email" />}
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				keyboardType="email-address"
			/>
			<Input
				placeholder="Password"
				leftIcon={<Icon name="lock" />}
				rightIcon={
					<Icon
						name={secureText ? "visibility-off" : "visibility"}
						onPress={() => setSecureText(!secureText)}
					/>
				}
				value={password}
				onChangeText={setPassword}
				secureTextEntry={secureText}
			/>
			<Button
				title="Login"
				onPress={() => {
					// Handle login
				}}
				buttonStyle={{ backgroundColor: "#288528" }}
				textStyle={{ color: "#fff" }}
				selectedButtonStyle={{ backgroundColor: "#B0B9B0" }}
				selectedTextStyle={{ color: "#fff" }}
			/>
		</View>
	);
}
