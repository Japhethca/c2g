import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";

export default function Signup(props) {
  const history = useHistory();
  const handleSignup = (values, { setSubmitting }) => {
    console.log(values);
    // TODO: handle signup
    axios.post("/api/v1/auth/signup", values);
  };

  const uploadImage = (e) => {
    const image = e.target.files[0];
    // TODO: handle Image upload
  };

  return (
    <div>
      <h2>User Sign Up</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSignup}
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
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="sex">Sex</label>
              <select name="sex" id="" onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="sex">State of Origin</label>
              <select name="sex" id="" onChange={handleChange}>
                <option value="lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>
            <div>
              <label htmlFor="photoAlbum">Photo: </label>
              <input type="file" name="photoAlbum" onChange={uploadImage} />
            </div>
            <button>Sign up</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
