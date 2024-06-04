import { baseUrl } from "./index";

export const fetchDubaiOrders = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/foreign/order/user/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			next: {
				revalidate: 10,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchFactors = async (id, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/order/factor/${id}/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			next: {
				revalidate: 1
			}
		});

		console.log(response);
		if (response.ok) {
			return response.json(); // If the response is OK, return the JSON data
		} else if (response.status === 404) {
			const errorData = await response.json(); // Extract the JSON from the 404 response
			throw new Error(errorData.message || "Resource not found"); // Use custom message or a default one
		} else {
			throw new Error("Network response was not ok"); // General error for other cases
		}
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error; // Re-throw the error to be handled or displayed elsewhere
	}
};

export const SeenMessages = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/messages/user/all/seen/`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchAddresses = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/addresses/user/`, {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchFavoriteProducts = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/favorites/`, {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const MakeDefaultAddress = async (id, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/addresses/set/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			body: JSON.stringify({ id: id }),
		});
		if (response.ok) {
			return response.json();
		} else if (response.status === 404) {
			const errorText = await response.text();
			throw new Error(errorText || "Address not found");
		} else {
			throw new Error("Failed to set the address as default");
		}
	} catch (error) {
		console.error("Error setting address as default:", error);
		throw error;
	}
};

export const DeleteAddress = async (id, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/addresses/delete/${id}/`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (response.ok) {
			if (response.status === 204) {
				console.log("Address deleted successfully.");
				return { status: 204, message: "Address deleted successfully." };
			} else {
				const result = await response.json();
				console.log("Address deleted successfully:", result);
				return result;
			}
		} else if (response.status === 404) {
			const errorText = await response.text();
			throw new Error(errorText || "Address not found");
		} else {
			throw new Error("Failed to delete the address. Please try again.");
		}
	} catch (error) {
		console.error("Error deleting the address:", error);
		throw error;
	}
};

export const AddNewAddress = async (newAddress, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/addresses/create/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			body: JSON.stringify(newAddress),
		});
		if (response.status === 201) {
			const responseData = await response.json();
			console.log("New address added successfully:", responseData);
			return responseData; // Returns the complete response data
		} else {
			const errorData = await response.json();
			console.error("Error adding new address:", errorData);
			throw new Error(
				errorData.messages || "Error occurred while adding the address.",
			);
		}
	} catch (error) {
		console.error("Error sending data to the API:", error);
		throw error;
	}
};

export const fetchNotifications = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/messages/user/`, {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchOrders = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/orders/user/`, {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchActivties = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/orders/count/`, {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchInformation = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/users/info/`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		console.log(response);
		if (!response.ok) {
			console.log("first");
			return null;
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const SenderInformation = async (data, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/user/update/delivery/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const EditProfile = async (formData, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/users/update/`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			body: JSON.stringify(formData),
		});
		if (!response.ok) {
			console.log(response);
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const EditPassword = async (passwordData, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/users/password/old/change/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			body: JSON.stringify(passwordData),
		});
			if (!response.ok) {
				console.log(response);
			}

		return response.json();
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const ApplyCoupon = async (couponCode, tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/coupon/apply/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			next: {
				revalidate: 1,
			},
			body: JSON.stringify({ code: couponCode }),
		});
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				errorText || "ناتوان در اعمال کوپن. لطفا دوباره تلاش کنید.",
			);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("خطا در اعمال کوپن:", error);
		return error.message || "خطا در اعمال کوپن. لطفا بعدا تلاش کنید.";
	}
};

export const RevokeCoupon = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/coupon/revoke/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
		});
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				errorText || "ناتوان در لغو کوپن. لطفا دوباره تلاش کنید.",
			);
		}
		const data = await response.json();
		return data.message || "کوپن با موفقیت لغو شد.";
	} catch (error) {
		console.error("خطا در لغو کوپن:", error);
		return error.message || "خطا در لغو کوپن. لطفا بعدا تلاش کنید.";
	}
};

export const formatFullAddress = (address) => {
	if (!address) {
		return ""; // Return an empty string if address is null or undefined
	}
	const { province, city, straight_address, postal_code, current } = address;
	const fullAddress = `استان: ${province}, شهر: ${city}, آدرس: ${straight_address}, کد پستی: ${postal_code}`;
	return fullAddress;
};

export const calculateOrderLevel = (
	processed,
	packing,
	shipped,
	deliveried,
) => {
	if (deliveried) {
		return 4;
	} else if (shipped) {
		return 3;
	} else if (packing) {
		return 2;
	} else if (processed) {
		return 1;
	} else {
		return 0;
	}
};
