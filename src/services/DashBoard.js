import { baseUrl } from "./index";

export const fetchDubaiOrders = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/foreign/order/user/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
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

export const fetchAddresses = async () => {
    try {
        const response = await fetch('https://gn01.liara.run/api/addresses/user/', {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
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

const fetchFavoriteProducts = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/favorites/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const MakeDefaultAddress = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/set/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
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

export const DeleteAddress = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/delete/${id}/`, {
            method: 'DELETE', // Use the DELETE method for the request
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete the address. Please try again.');
        }
        return response.json();
        console.log("Address deleted successfully:", result);
    } catch (error) {
        console.error("Error deleting the address:", error);
    }
};

export const AddNewAddress = async (newAddress) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
            },
            body: JSON.stringify(newAddress),
        });
        if (!response.ok) {
            console.error('Error adding new address:', response.statusText);
        }
        return response.json();
    } catch (error) {
        console.error('Error sending data to the API:', error);
    }
};

