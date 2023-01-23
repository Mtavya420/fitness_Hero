import { useState, useRef, useContext } from "react";
import AuthContext from "../auth/auth_context";
import LoginForm from "./LoginForm";
import SignUp from "./SignupForm";
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgLheNQ_ygufdCXffQHvDRtcBLoJwqxwU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgLheNQ_ygufdCXffQHvDRtcBLoJwqxwU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      {/* <LoginForm
        emailInputRef={emailInputRef}
        passwordInputRef={passwordInputRef}
      /> */}
      <SignUp
        emailInputRef={emailInputRef}
        passwordInputRef={passwordInputRef}
      />
    </section>
  );
};

export default AuthForm;
