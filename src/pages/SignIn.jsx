import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/auth_context";
import LoginForm from "../components/LoginForm";
import SimpleBackdrop from "../components/BackDrop";


const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user, handleLogin } = useContext(AuthContext);
  const handleSignIn = (values) => {
    handleLogin({ email: values.email, password: values.password }).then(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) navigate("/");
  }, [user]);

  return (
    <div>
      <SimpleBackdrop loading={isLoading} />
      <LoginForm onLogin={handleSignIn} />
    </div>
  );
};

export default SignIn;
