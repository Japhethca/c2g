import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const NewApplication = (props) => {
  const submitApplication = (values, { setSubmitting }) => {
    const status = "PENDING";
    console.log(values);
  };
  return (
    <div>
      <h2>New application from</h2>

      <Formik>
        {({ handleChange }) => (
          <form>
            <div>
              <label htmlFor="type">Application Type:</label>
              <select name="type" id="" onChange={handleChange}>
                <option value="ARTICULATED_VEHICLE">Articulated Vehicle</option>
                <option value="COMMERCIAL">Commercial</option>
                <option value="PRIVATE">Private</option>
                <option value="MOTORCYCLE">Motorcycle</option>
              </select>
            </div>
            <div>
              <label htmlFor="driverTestScore">Driver Test Score:</label>
              <input type="number" name="driverTestScore" />
            </div>
            <div>
              <label htmlFor="type">Application State:</label>
              <select name="type" id="" onChange={handleChange}>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Ondo">Ondo</option>
                <option value="Ibadan">Ibadan</option>
              </select>
            </div>
            <div>
              <input type="number" name="driverTestScore" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
