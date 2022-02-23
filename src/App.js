import { useState, useEffect } from "react";

import "./App.css";
import InitialPage from "./InitialPage";
import Welcome from "./Welcome";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("Key stroke");
      setIsFormValid(email.includes("@") && password.trim().length >= 6);
    }, 5000);
  }, [email, password]);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("setIndicator"));
  }, []);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(password.trim().length >= 6);

    localStorage.setItem("setIndicator", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("setIndicator");
  };

  // setIsLoggedIn(localStorage.getItem("setIndicator"));

  return (
    <div>
      {isLoggedIn && <Welcome onLogoutClicked={logoutHandler} />}
      {!isLoggedIn && (
        <div>
          <InitialPage
            onSubmit={submitHandler}
            onChangeEmail={emailChangeHandler}
            onChangePassword={passwordChangeHandler}
            isFormValid={isFormValid}
          />
        </div>
      )}
    </div>
  );
};

export default App;
