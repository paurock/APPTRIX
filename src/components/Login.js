import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {connectAndSaveToken} from "../state/actions/auth";
import {connect, useDispatch} from "react-redux";
import styles from "./styles.module.css";

function Login({store}) {
  const {isAuthenticated} = store.auth;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    username: "",
    password: ""
  });
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [messageError, setMessageError] = useState();
  const [formData, setFormData] = useState(initialFormData);

  //handle form fields values
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  //handle submit form
  const handleSubmit = e => {
    e.preventDefault();
    //import fn to make post request get token and save to LS
    connectAndSaveToken(
      formData,
      navigate,
      setUsernameError,
      setPasswordError,
      setMessageError,
      dispatch
    );
  };

  isAuthenticated && setTimeout(() => navigate("/"), 500);

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.loginSuccess}>
          <h1>Congrats!</h1>
          <p>Login success!</p>
        </div>
      ) : (
        <form>
          <h2>Log in</h2>
          <div className="message error"> {messageError}</div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required onChange={handleChange} />
          <div className="username error"> {usernameError}</div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          <div className="password error">{passwordError} </div>
          <button onClick={handleSubmit}>Log in</button>
        </form>
      )}
    </div>
  );
}

const mapStateToProps = store => ({
  store
});
export default connect(mapStateToProps)(Login);
