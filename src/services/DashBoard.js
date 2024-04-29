import { baseUrl } from "./index";

export const fetchDubaiOrders = async (tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/foreign/order/user/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            },
            next: {
                revalidate: 10,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchFactors = async (tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/order/factor/1/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const SeenMessages = async (tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/messages/user/all/seen/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchAddresses = async (tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/user/`, {
            headers: {
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchFavoriteProducts = async (tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/favorites/`, {
            headers: {
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const MakeDefaultAddress = async (id, tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/set/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            },
            body: JSON.stringify({ id: id })
        });
        if (!response.ok) {
            throw new Error('Failed to set the address as default');
        }
        return response.json();
    } catch (error) {
        console.error('Error setting address as default:', error);
    }
};

export const DeleteAddress = async (id, tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/delete/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete the address. Please try again.');
        }
        console.log("Address deleted successfully:", result);
        return response.json();
    } catch (error) {
        console.error("Error deleting the address:", error);
    }
};

export const AddNewAddress = async (newAddress, tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            },
            body: JSON.stringify(newAddress),
        });
        console.log(newAddress);
        if (!response.ok) {
            console.error('Error adding new address:', response.json);
        }
        return response.json();
    } catch (error) {
        console.error('Error sending data to the API:', error);
    }
};

export const fetchNotifications = async (tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/messages/user/`, {
            headers: {
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
                'Authorization': `Bearer ${tokens.access}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const SenderInformation = async (formData, tokens) => {
    try {
        const response = await fetch(`${baseUrl}/api/user/update/delivery/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const formatFullAddress = (address) => {
    const { province, city, straight_address, postal_code, current } = address;
    const fullAddress = `استان: ${province}, شهر: ${city}, آدرس: ${straight_address}, کد پستی: ${postal_code}`;
    return fullAddress;
}