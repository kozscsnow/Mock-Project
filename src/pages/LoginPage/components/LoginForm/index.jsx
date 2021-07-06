import React from 'react';

function LoginForm(props) {
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
      <form className=" form login-form" onSubmit={onLoginFormSubmit}>
        <div className="form-group form-group-id">
          <label id="form-id" htmlFor="form-id">
            User Name
          </label>
          <input
            type="text"
            placeholder="Username"
            className="form-id form-control text-center"
            id="form-id"
            name="form-id"
            value={username}
            onChange={handleGetUsername}
          ></input>
        </div>
        <div className="form-group form-group-password">
          <label id="form-password" htmlFor="form-password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="form-password form-control text-center"
            id="form-password"
            name="form-password"
            value={password}
            onChange={handleGetPassword}
          ></input>
          <small className="form-valid form-text text-danger">
            {errorMessage}
          </small>
        </div>
        <div className="form-group">
          <button type="submit" className="button login-btn">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
