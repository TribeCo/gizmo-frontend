"use client";

import { baseUrl } from "@/services";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const { tokens } = useAuth();
	const [cartList, setCartList] = useState([]);

	//? Use Effect for get cart items from local storage
	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem("cartList") || "[]");
		setCartList(storedItems);
	}, [tokens]);

	//? use this function to add item to cart list (user or unknown)
	const addToCart = async ({ color, product, quantity }) => {
		let id;
		let existingItemIndex = cartList.findIndex(
			(item) => item.product === product && item.color === color,
		);

		if (existingItemIndex !== -1) {
			id = cartList[existingItemIndex].id;

			if (tokens) {
				try {
					const response = await fetch(
						`${baseUrl}/api/cart/item/update/${id}/`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${tokens.access}`,
							},
							body: JSON.stringify({
								color,
								product,
								quantity: cartList[existingItemIndex].quantity + quantity,
							}),
						},
					);
					console.log(response);

					if (!response.ok) {
						throw new Error("Failed to update item");
					}
				} catch (error) {
					console.error("خطایی رخ داد.", error);
					return;
				}
			}
			const newCartList = cartList.map((item, index) =>
				index === existingItemIndex
					? { ...item, quantity: item.quantity + quantity, is_sync: false }
					: item,
			);

			setCartList(newCartList);
			if (typeof window !== "undefined") {
				localStorage.setItem("cartList", JSON.stringify(newCartList));
			}
		} else {
			if (tokens) {
				try {
					const response = await fetch(`${baseUrl}/api/cart/item/add/`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${tokens.access}`,
						},
						body: JSON.stringify({
							color,
							product,
							quantity,
						}),
					});

					const { data } = await response.json();
					if (response.ok) id = data.id;
				} catch (error) {
					console.error("خطایی رخ داد.", error);
					return;
				}
			}

			const newCartList = [...cartList];

			if (!id) {
				id = cartList.length > 0 ? cartList[cartList.length - 1].id + 1 : 1;
			}

			newCartList.push({ id: id, color, product, quantity, is_sync: false });

			setCartList(newCartList);
			if (typeof window !== "undefined") {
				localStorage.setItem("cartList", JSON.stringify(newCartList));
			}
		}
	};

	//?
	const updateCartList = async ({ tokens }) => {
		try {
			const response = await fetch(`${baseUrl}/api/cart/item/add/list/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${tokens.access}`,
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify(cartList),
			});
			const res = await response.json();
			console.log(res);
			if (typeof window !== "undefined") {
				localStorage.setItem("cartList", JSON.stringify(res.data.items));
			}
		} catch (error) {
			console.log(error);
		}
	};

	//?
	const removeFromCart = async (id) => {
		const itemIndex = cartList.findIndex((item) => item.id === id);
		if (itemIndex === -1) {
			return;
		}

		const item = cartList[itemIndex];

		if (tokens) {
			try {
				if (item.quantity > 1) {
					const response = await fetch(
						`${baseUrl}/api/cart/item/update/${id}/`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${tokens.access}`,
							},
							body: JSON.stringify({
								color: item.color,
								product: item.product,
								quantity: item.quantity - 1,
							}),
						},
					);

					console.log(response);

					if (!response.ok) {
						throw new Error("Failed to update item quantity");
					}
				} else {
					await fetch(`${baseUrl}/api/cart/item/delete/${id}/`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${tokens.access}`,
						},
					});
				}
			} catch (error) {
				console.log(error);
				return;
			}
		}

		let updatedCartList = cartList.map((item) => ({ ...item }));

		if (item.quantity > 1) {
			updatedCartList[itemIndex].quantity -= 1;
		} else {
			updatedCartList = updatedCartList.filter((item) => item.id !== id);
		}

		setCartList(updatedCartList);
		if (typeof window !== "undefined") {
			localStorage.setItem("cartList", JSON.stringify(updatedCartList));
		}
	};

	const getCart = async () => {
		console.log(cartList);
		try {
			const response = await fetch(`${baseUrl}/api/cart/unknown/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 1,
				},
				body: JSON.stringify(cartList),
			});
			return response.json();
		} catch (error) {
			console.log(error);
		}
	};

	const readCart = async () => {
		console.log(cartList);
		if (tokens) {
			try {
				const response = await fetch(`${baseUrl}/api/cart/local/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokens.access}`,
					},
					next: {
						revalidate: 1,
					},
				});
				return response.json();
			} catch (error) {
				console.log(error);
			}
		}
	};

	const deleteList = async () => {
		setCartList([]);
		if (typeof window !== "undefined") {
			localStorage.setItem("cartList", JSON.stringify([]));
		}
	};

	const contextData = {
		cartList,
		readCart,
		addToCart,
		removeFromCart,
		deleteList,
		updateCartList,
		getCart,
		length: cartList.length,
	};

	return (
		<CartContext.Provider value={contextData}>{children}</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};
