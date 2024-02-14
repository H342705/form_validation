"use client";
import Button from "../shared/Button";
import { useFormContext } from "./FormContext";
const Form = () => {
  const {
    handleSubmit,
    nameUser,
    emailError,
    passwordError,
    nameError,
    email,
    password,
    setNameUser,
    setEmail,
    setPassword,
  } = useFormContext();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Name:</h1>
      <input
        type="text"
        className="input"
        placeholder="Enter Your Name.."
        value={nameUser}
        onChange={(e: any) => setNameUser(e.target.value)}
      />
      {nameError && (
        <p className="col-span-2 text-red-700 text-sm">{nameError}</p>
      )}
      <h1>Email:</h1>
      <input
        type="email"
        className="input"
        placeholder="Enter Your Email.."
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      {emailError && (
        <p className="col-span-2 text-red-700 text-sm">{emailError}</p>
      )}
      <h1>Password:</h1>
      <input
        type="password"
        className="input"
        placeholder="Enter Your Password.."
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
      {passwordError && (
        <p className="col-span-2 text-red-700 text-sm">{passwordError}</p>
      )}
      <div className="col-span-2">
        <Button text="Register" />
      </div>
    </form>
  );
};
export default Form;
