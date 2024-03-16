import React from "react";
import Loading from "../../commonComponents/Loading/Loading";
import useLogin from "../../customHooks/useLogin";

const Login = () => {
  const {
    formData,
    loading,
    error,
    wrongCredentials,
    handleInputChange,
    handleFormSubmit,
  } = useLogin();

  return (
    <React.Fragment>
      <h1>Star Wars</h1>
      <div>{loading && <Loading />}</div>
      <div>
        {!loading && wrongCredentials && (
          <p style={{ color: "red" }}>Ambiguous Username</p>
        )}
      </div>
      <br />
      <form className="flex-container" onSubmit={handleFormSubmit}>
        <div className="flex">
          <label className="label-login" htmlFor="username">
            Name{" "}
          </label>
          <input
            id="username"
            type="text"
            name="username"
            required
            placeholder="Enter username"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="flex">
          <label className="label-password" htmlFor="password">
            Password{" "}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <button className="btn">Login</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
