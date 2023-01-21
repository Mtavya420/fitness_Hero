import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Exercises from "./components/Exercises";
import ExerciseVideos from "./components/ExerciseVideos";
import NotFound from "./components/NotFound";
import "./App.css";
import AuthContext from "./auth/auth_context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/videos" element={<ExerciseVideos />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Box>
    </>
  );
};

export default App;
