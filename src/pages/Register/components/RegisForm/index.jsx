import { FastField, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import InputField from '../../../../custom-fields/InputField';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import styles from '../../../../assets/moduleCss/form.module.css';
import regisFormStyles from './RegisForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormRegisterActions,
  GlobalActions,
} from '../../../../redux/rootAction';

function RegisForm(props) {
  const { onRegisSuccess } = props;
  const storeAccountRef = useRef([]);
  const storeAccount = useSelector(
    (state) => state.FormRegisterReducer.storeAccount
  );
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
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

    dispatch(FormRegisterActions.getRegisterAccount({ username, password }));
    console.log(storeAccount);
    // storeAccountRef.current.push({ username, password });
    // console.log(storeAccountRef.current);
    // storeAccount.push({ username, password });
    // localStorage.setItem(
    //   'storeAccount',
    //   JSON.stringify(storeAccountRef.current)
    // );
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    onRegisSuccess();
  };
  return (
    <>
      <div className={regisFormStyles.regisContainer}>
        <div className="form regis-form">
          <div className="form-group form-group-id">
            {/* {storeAccount}
            <button onClick={() => dispatch(FormRegisterActions.increase(1))}>
              click
            </button> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormRegisSubmit}
            >
              {(formikProps) => {
                // const { values, errors, touched } = formikProps;
                // console.log({ values, errors, touched });
                return (
                  <Form className={`${styles.form}`}>
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
                      <button type="submit" className={styles.button}>
                        Register
                      </button>
                    </div>
                    <div className="form-group">
                      <button type="reset" className={styles.button}>
                        Reset
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisForm;
