import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import styles from '../../../../assets/moduleCss/form.module.css';
import InputField from '../../../../custom-fields/InputField';
import { FormRegisterActions } from '../../../../redux/rootAction';
import regisFormStyles from './RegisForm.module.css';

function RegisForm(props) {
  const { t } = useTranslation();
  const { onRegisSuccess } = props;
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
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    const listAccounts = JSON.parse(
      localStorage.getItem('listAccountsStorage')
    );
    if (listAccounts) {
      const newListAccounts = [...listAccounts, { username, password }];
      localStorage.setItem(
        'listAccountsStorage',
        JSON.stringify(newListAccounts)
      );
    } else {
      localStorage.setItem(
        'listAccountsStorage',
        JSON.stringify([{ username, password }])
      );
    }
    onRegisSuccess();
  };
  return (
    <>
      <div className={regisFormStyles.regisContainer}>
        <div className="form regis-form">
          <div className="form-group form-group-id">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormRegisSubmit}
            >
              {(formikProps) => {
                return (
                  <Form className={`${styles.form}`}>
                    <h3 className="text-light">
                      {t('regis_create-your-account')}
                    </h3>
                    <FastField
                      name="username"
                      component={InputField}
                      label={t('regis_your-user-name')}
                      placeholder={t('regis_enter-your-user-name')}
                    />
                    <FastField
                      name="email"
                      component={InputField}
                      label={t('regis_your-email')}
                      placeholder={t('regis_enter-your-email')}
                    />
                    <FastField
                      name="password"
                      component={InputField}
                      label={t('regis_your-password')}
                      placeholder={t('regis_enter-your-password')}
                      type="password"
                    />
                    <FastField
                      name="confirmPassword"
                      component={InputField}
                      label={t('regis_confirm-your-password')}
                      placeholder={t('regis_confirm-your-password')}
                      type="password"
                    />
                    <div className="form-group">
                      <button type="submit" className={styles.button}>
                        {t('regis_register')}
                      </button>
                    </div>
                    <div className="form-group">
                      <button type="reset" className={styles.button}>
                        {t('regis_reset')}
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
