import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../assets/moduleCss/form.module.css';
import './LoginForm.scss';
function LoginForm(props) {
  const {
    onLoginFormSubmit,
    username,
    handleGetUsername,
    password,
    handleGetPassword,
    errorMessage,
  } = props;
  const { t } = useTranslation();
  return (
    <div className="login-form__wrapper">
      <Form className={`${styles.form}`} onSubmit={onLoginFormSubmit}>
        <FormGroup className={`${styles.formGroup}`}>
          <Label id="form-id" htmlFor="form-id" className={styles.label}>
            {t('login_user-name')}
          </Label>
          <Input
            type="text"
            placeholder={t('login_user-name')}
            className={styles.inputForm}
            id="form-id"
            name="form-id"
            value={username}
            onChange={handleGetUsername}
          ></Input>
        </FormGroup>
        <FormGroup className={`${styles.formGroup}`}>
          <Label
            id="form-password"
            htmlFor="form-password"
            className={styles.label}
          >
            {t('login_password')}
          </Label>
          <Input
            type="password"
            placeholder={t('login_password')}
            className={styles.inputForm}
            id="form-password"
            name="form-password"
            value={password}
            onChange={handleGetPassword}
          ></Input>
          <small className="form-valid form-text text-danger">
            {errorMessage}
          </small>
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <Button type="submit" className={styles.button}>
            {t('login')}
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default LoginForm;
