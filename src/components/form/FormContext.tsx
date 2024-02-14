"use client";
import { createContext, useContext, useState } from "react";

// creating a context that is accessible in the application
export const AuthContext = createContext<any>(null);

// creating a custom context hook
export const useFormContext = () => useContext(AuthContext);

// function to control data
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // hooks for taking data or input
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState<string | null | boolean>(null);
  const [emailError, setEmailError] = useState<string | null | boolean>(null);
  const [passwordError, setPasswordError] = useState<string | null | boolean>(
    null
  );

  const handleNameError = () => {
    if (nameUser.length === 0) {
      setNameError("Name is required");
    } else if (nameUser.length < 3) {
      setNameError("Please Enter minimum 3 characters");
    } else {
      setNameError(true);
    }
  };
  const handleEmailError = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!email.includes("@")) {
      setEmailError("Invalid email");
    } else {
      setEmailError(true);
    }
  };
  const handlePasswordError = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be 6 characters");
    } else {
      setPasswordError(true);
    }
  };
  const handleSuccess = () => {
    if (nameError === true && emailError === true && passwordError === true) {
      alert("Form Submitted Successfully");
      setNameError(null);
      setEmailError(null);
      setPasswordError(null);
      setNameUser("");
      setEmail("");
      setPassword("");
    } else {
      handleNameError();
      handleEmailError();
      handlePasswordError();
    }
  };
  // function to submit form
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSuccess();
  };

  return (
    <AuthContext.Provider
      value={{
        nameUser,
        email,
        password,
        handleSubmit,
        nameError,
        emailError,
        passwordError,
        setNameUser,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
