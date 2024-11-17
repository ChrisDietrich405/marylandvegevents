import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";

export default function CreateAccountScreen() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");
	// const [secureText, setSecureText] = useState(true);

	// const signUp = async () => {
	// 	setLoading(true);
	// 	try {
	// 		await auth().createUserWithEmailAndPassword(email, password);
	// 		alert("Check your emails!");
	// 	} catch (e) {
	// 		const err = e;
	// 		alert("Registration failed: " + err.message);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
			<Input
				placeholder="Username"
				leftIcon={<Icon name="person" />}
				value={username}
				onChangeText={setUsername}
				autoCapitalize="none"
			/>
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
				// secureTextEntry={secureText}
			/>
			{/* <Input
				placeholder="Confirm Password"
				leftIcon={<Icon name="lock" />}
				rightIcon={
					<Icon
						name={secureText ? "visibility-off" : "visibility"}
						onPress={() => setSecureText(!secureText)}
					/>
				}
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry={secureText}
			/> */}
			<Button
				title="Create Account"
				onPress={handleCreateAccount}
				containerStyle={{ marginTop: 20 }}
			/>
		</View>
	);
}
