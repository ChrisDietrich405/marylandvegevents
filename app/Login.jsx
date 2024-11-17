import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Icon, Text } from "@rneui/themed";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [secureText, setSecureText] = useState(true);

	const signUp = async () => {
		setLoading(true);
		try {
			await auth().createUserWithEmailAndPassword(email, password);
			alert("Check your emails!");
		} catch (e) {
			const err = e;
			alert("Registration failed: " + err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
			<Text>Hello</Text>
			{/* <Input
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
			/> */}
			{/* <Button
				title="Login"
				onPress={() => {
					// Handle login
				}}
				buttonStyle={{ backgroundColor: "#288528" }}
				textStyle={{ color: "#fff" }}
				selectedButtonStyle={{ backgroundColor: "#B0B9B0" }}
				selectedTextStyle={{ color: "#fff" }}
			/> */}
			<Button
				title="Create Account"
				onPress={signUp}
				buttonStyle={{ backgroundColor: "#288528" }}
				textStyle={{ color: "#fff" }}
				selectedButtonStyle={{ backgroundColor: "#B0B9B0" }}
				selectedTextStyle={{ color: "#fff" }}
			/>
		</View>
	);
}
