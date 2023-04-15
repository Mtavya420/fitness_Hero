import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/auth_context";
import BackDrop from "../components/BackDrop";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const authCtx = useContext(AuthContext);
  const [showBackDrop, setShowBackDrop] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    authCtx.handleLogout();
  };

  useEffect(() => {
    handleLogout();
    navigate("/");
    return () => setShowBackDrop(false);
  }, []);

  return (
    <>
      <BackDrop loading={showBackDrop} />
    </>
  );
};
export default Logout;
