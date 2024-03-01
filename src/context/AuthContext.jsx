"use client";

import { createContext, useState, useEffect } from "react";
import { jwtDecode }  from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const localStorageGetItem = (item) => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(item);
        }
    }
    
    const localStorageSetItem = (key, value) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, value);
        }
    }
    
    const localStorageRemoveItem = (item) => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(item);
        }
    }
    
    const extractUserData = (data) => {
        return {
            id: data.user_id,
            phone_number: data['phoneNumber'],
            email: data["email"],
            is_admin: data["is_admin"],
            is_active: data["is_active"]
        };
    };
    
    const [authData, setAuthData] = useState(() =>
        localStorageGetItem("authData")
        ? JSON.parse(localStorageGetItem("authData"))
        : null
    );

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const loginUser = async (phoneNumber, pwd, destination=null) => {
        try {
        const response = await fetch("https://gizmoshop.liara.run/api/token/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber, password: pwd }),
        });

        if (response.ok) {
            const data = await response.json();
            setAuthData(data);
            setUser(extractUserData(jwtDecode(data.access)));
            localStorageSetItem("authData", JSON.stringify(data));

            console.log("user: ", user);

            if (destination) {
                // redirect if neccessary
            }
            
            alert("با موفقیت وارد شدید.");
            console.log("data: ", data);


        } else {
            alert("شماره موبایل یا رمز عبور اشتباه است");

        }
        } catch (error) {
            console.error("Login Error:", error);
            alert("خطایی رخ داده است");

        }
    };

    const logoutUser = () => {
        setAuthData(null);
        setUser(null);
        localStorageRemoveItem("authData");
        alert("logout");

    };


    const signUp = async (phoneNumber) => {
        try {
            const response = await fetch("https://gizmoshop.liara.run/api/users/create/phone/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phoneNumber })
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
            alert("unhandeled error");
            alert(error);
            return 0;
        }

    };

    const confirmPhoneSignUpCode = async (phoneNumber, code) => {

        try {
            const response = await fetch("https://gizmoshop.liara.run/api/users/auth/code/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phoneNumber, code: parseInt(code, 10) })
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
            alert("unhandeled error");
            alert(error);
            return 0;
        }
    };


    const completeSignupInformation = async (phoneNumber, fullName, email, password) => {

        try {
            const response = await fetch("https://gizmoshop.liara.run/api/users/sign_up/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phoneNumber, full_name: fullName, email: email, password })
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
            alert("unhandeled error");
            alert(error);
            return 0;
        }
    };

    const forgetPassword = async (phoneNumber) => {
        try {
            const response = await fetch("https://gizmoshop.liara.run/api/users/password/change/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phoneNumber })
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
            alert("unhandeled error");
            alert(error);
            return 0;
        }
    };

    const changePassword = async (phoneNumber, newPassword, code) => {
        try {
            const response = await fetch("https://gizmoshop.liara.run/api/users/password/confirm/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phoneNumber, password: newPassword, code: code })
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
            alert("unhandeled error");
            alert(error);
            return 0;
        }
    };

    const refreshToken = async () => {
        try {
            const refreshToken = authData.refresh;
            const response = await fetch("https://gizmoshop.liara.run/api/token/refresh/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh: refreshToken }),
            });

            if (response.ok) {
                const data = await response.json();
                setAuthData(data);
                localStorageSetItem("authData", JSON.stringify(data));
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
    
    useEffect(() => {
        if (authData) {
            setUser(extractUserData(jwtDecode(authData.access)));
        }
        setLoading(false);
    }, [authData]);

    const contextData = {
        user: user,
        authData: authData,
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
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
