import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import SignupForm from "./components/SignupForm";
import Exercises from "./components/Exercises";
import ExerciseVideos from "./components/ExerciseVideos";
import NotFound from "./components/NotFound";
import "./App.css";
import SignIn from "./pages/SignIn";
// import GuardedRoute from './components/GuardRoute';

const App = () => {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/exercises"
            element={
              <Exercises
                exercises={[]}
                setExercises={() => {}}
                bodyPart={"arms"}
              />
            }
          />
          <Route
            path="/videos"
            element={<ExerciseVideos exerciseVideos={[]} name={"user"} />}
          />

       
          <Route path="*" element={<NotFound />} />
        </Routes>
    

        <Footer />
      </Box>
    </>
  );
};

export default App;
