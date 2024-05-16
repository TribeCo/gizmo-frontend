"use client";

import { baseUrl } from "@/services";
import { useRouter } from "next/navigation";
import { SnackbarProvider } from "notistack";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [tokens, setTokens] = useState(null);

	const router = useRouter();

	useEffect(() => {
		const storedToken = localStorage.getItem("tokens");
		setTokens(JSON.parse(storedToken));
	}, []);

	const localStorageSetItem = (key, value) => {
		if (typeof window !== "undefined") {
			localStorage.setItem(key, value);
		}
	};
	const localStorageRemoveItem = (item) => {
		if (typeof window !== "undefined") {
			localStorage.removeItem(item);
		}
	};

	const loginUser = async (phoneNumber, pwd, destination = null) => {
		try {
			const response = await fetch(`${baseUrl}/api/token/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({ phoneNumber, password: pwd }),
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setTokens(data);
				localStorageSetItem("tokens", JSON.stringify(data));
				if (destination) {
					router.replace(destination);
				}
			} else {
				alert("شماره موبایل یا رمز عبور اشتباه است");
			}
		} catch (error) {
			console.error("Login Error:", error);
			alert("خطایی رخ داده است");
		}
	};

	const logoutUser = () => {
		setTokens(null);
		localStorageRemoveItem("tokens");
		router.replace("/");
	};

	const signUp = async (phoneNumber) => {
		try {
			const response = await fetch(`${baseUrl}/api/users/create/phone/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({ phoneNumber: phoneNumber }),
			});

			if (response.ok) {
				console.log(response.json());
				return 1;
			} else {
				console.log(response.json());
				return 0;
			}
		} catch (error) {
			console.log(error);
			return 0;
		}
	};

	const confirmPhoneSignUpCode = async (phoneNumber, code) => {
		try {
			const response = await fetch(`${baseUrl}/api/users/auth/code/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({
					phoneNumber: phoneNumber,
					code: parseInt(code, 10),
				}),
			});

			if (response.ok) {
				console.log(response.json());
				return 1;
			} else {
				alert("failure");
				console.log(response.json());
				return 0;
			}
		} catch (error) {
			console.log(error);
			return 0;
		}
	};

	const completeSignupInformation = async (
		phoneNumber,
		firstName,
		lastName,
		email,
		password,
	) => {
		try {
			const response = await fetch(`${baseUrl}/api/users/sign_up/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({
					phoneNumber,
					first_name: firstName,
					last_name: lastName,
					email,
					password,
				}),
			});

			if (response.ok) {
				loginUser(phoneNumber, password);
				return 1;
			} else {
				console.log(response.json());
				return 0;
			}
		} catch (error) {
			console.log(error);
			return 0;
		}
	};

	const forgetPassword = async (phoneNumber) => {
		try {
			const response = await fetch(`${baseUrl}/api/users/password/change/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({ phoneNumber: phoneNumber }),
			});

			if (response.ok) {
				alert("success");
				console.log(response.json());
				return 1;
			} else {
				alert("failure");
				console.log(response.json());
				return 0;
			}
		} catch (error) {
			console.log(error);
			return 0;
		}
	};

	const changePassword = async (phoneNumber, newPassword, code) => {
		try {
			const response = await fetch(`${baseUrl}/api/users/password/confirm/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({
					phoneNumber: phoneNumber,
					password: newPassword,
					code: code,
				}),
			});

			if (response.ok) {
				alert("success");
				console.log(response.json());
				return 1;
			} else {
				alert("failure");
				console.log(response.json());
				return 0;
			}
		} catch (error) {
			console.log(error);
			return 0;
		}
	};

	const refreshToken = async () => {
		try {
			const refreshToken = tokens.refresh;
			const response = await fetch(`${baseUrl}/api/token/refresh/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify({ refresh: refreshToken }),
			});

			if (response.ok) {
				const data = await response.json();
				setTokens(data);
				localStorageSetItem("tokens", JSON.stringify(data));
				console.log("Access token refreshed.");
				return data.access;
			} else {
				console.error("Failed to refresh access token.");
				return 0;
			}
		} catch (error) {
			console.error("Error refreshing access token:", error);
			return 0;
		}
	};

	const contextData = {
		tokens,
		loginUser: loginUser,
		logOut: logoutUser,
		signUp: signUp,
		confirmPhoneSignUpCode: confirmPhoneSignUpCode,
		completeSignupInformation: completeSignupInformation,
		forgetPassword: forgetPassword,
		changePassword: changePassword,
	};

	return (
		<AuthContext.Provider value={contextData}>
			<SnackbarProvider>{children}</SnackbarProvider>
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
