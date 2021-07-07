import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../assets/moduleCss/form.module.css';
function LoginForm(props) {
  console.log(styles);
  const {
    onLoginFormSubmit,
    username,
    handleGetUsername,
    password,
    handleGetPassword,
    errorMessage,
  } = props;
  return (
    <div>
      <Form className={`${styles.form}`} onSubmit={onLoginFormSubmit}>
        <FormGroup className={`${styles.formGroup}`}>
          <Label id="form-id" htmlFor="form-id" className={styles.label}>
            User Name
          </Label>
          <Input
            type="text"
            placeholder="Username"
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
            Password
          </Label>
          <Input
            type="password"
            placeholder="Password"
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
            Log in
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default LoginForm;
