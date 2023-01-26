import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/auth_context";
import LoginForm from "../components/LoginForm";
import SimpleBackdrop from "../components/BackDrop";
import useHttp, { STATUS_COMPLETED, STATUS_PENDING } from "../hooks/useHttp";

const SignIn = () => {
  const history = useNavigate();
  const authCtx = useContext(AuthContext);
  const { status, sendRequest } = useHttp(authCtx.onLogin);
  const handleLogin = (values) => {
    sendRequest(values);
  };

  useEffect(() => {
    if (status === STATUS_COMPLETED) {
      history.push("/home");
    }
  }, [status, history]);

  // const { currentUser } = authCtx.isLoggedIn;
  
  return (
    <div>
      {/* {currentUser ? history.push("/") : null} */}
      <SimpleBackdrop loading={status === STATUS_PENDING} />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default SignIn;
