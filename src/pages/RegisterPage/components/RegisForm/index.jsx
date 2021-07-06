import { FastField, Form, Formik } from 'formik';
import React from 'react';
import InputField from '../../../../custom-fields/InputField';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

function RegisForm(props) {
  const { onRegisSuccess } = props;
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationShema = Yup.object().shape({
    username: Yup.string().required(' This field is required!!'),
    email: Yup.string()
      .email('Email is invalid')
      .required(' This field is required!!'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .required(' Password is required!!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required(' Password is required!!'),
  });

  const handleFormRegisSubmit = (values) => {
    const { username, password } = values;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    onRegisSuccess();
  };
  return (
    <>
      <div className="regis-container">
        <div className="form regis-form">
          <div className="form-group form-group-id">
            <Formik
              initialValues={initialValues}
              validationSchema={validationShema}
              onSubmit={handleFormRegisSubmit}
            >
              {(formikProps) => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });
                return (
                  <Form className="form regis-form">
                    <h3 className="text-light">Create Your Account</h3>
                    <FastField
                      name="username"
                      component={InputField}
                      label="Your User Name"
                      placeholder="Username"
                    />
                    <FastField
                      name="email"
                      component={InputField}
                      label="Your Email"
                      placeholder="Enter Your Email"
                    />
                    <FastField
                      name="password"
                      component={InputField}
                      label="Your Password"
                      placeholder="Enter Your Password"
                      type="password"
                    />
                    <FastField
                      name="confirmPassword"
                      component={InputField}
                      label="Confirm Your Password"
                      placeholder="Confirm Your Password"
                      type="password"
                    />
                    <div className="form-group">
                      <button type="submit" className="button regis-btn">
                        Register
                      </button>
                    </div>
                    <div className="form-group">
                      <button type="reset" className="button regis-btn">
                        Reset
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            {/* <label id="form-id" htmlFor="form-id">
              Your User Name
            </label>
            <input
              type="text"
              placeholder="Username"
              className="form-id form-control text-center"
              id="form-id"
              name="form-id"
            ></input> */}
          </div>
          {/* <div className="form-group form-group-id">
            <label id="form-id" htmlFor="form-id">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-id form-control text-center"
              id="form-id"
              name="form-id"
            ></input>
          </div>
          <div className="form-group form-group-id">
            <label id="form-id" htmlFor="form-id">
              Your Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-id form-control text-center"
              id="form-id"
              name="form-id"
            ></input>
          </div>
          <div className="form-group form-group-id">
            <label id="form-id" htmlFor="form-id">
              Re-enter Your Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-id form-control text-center"
              id="form-id"
              name="form-id"
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="button regis-btn">
              Register
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default RegisForm;
