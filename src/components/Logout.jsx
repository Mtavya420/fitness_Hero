import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/auth_context";
import BackDrop from "../components/BackDrop";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const authCtx = useContext(AuthContext);
  const [showBackDrop, setShowBackDrop] = useState(true);
  const history = useNavigate();

  const handleLogout = () => {
    authCtx.onLogout();
  };

  useEffect(() => {
    handleLogout();
    history.replace("/login");
    return () => setShowBackDrop(false);
  }, []);

  return (
    <>
      <BackDrop loading={showBackDrop} />
    </>
  );
};
export default Logout;
