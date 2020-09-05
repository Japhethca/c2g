import React from "react";
import { Formik } from "formik";
import axios from "axios";

import styles from "./Login.module.css";

export default function Login(props) {
  const handleLogin = (values, { setSubmitting }) => {
    //   TODO: HANDLE LOGIN
    axios.post("/api/v1/auth/login", values);
  };
  return (
    <div>
      <h2>User Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
      >
        {({ handleChange, errors, handleSubmit, isSubmitting }) => (
          <form>
            <div>
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Your password"
              />
            </div>
            <button>Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
