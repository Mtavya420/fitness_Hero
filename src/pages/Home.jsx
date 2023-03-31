import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import AuthContext from "../auth/auth_context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const { handleLogout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.handleLogout = handleLogout;
  });

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn, navigate]);

  // useEffect(() => {
  //   const storedSession = window.localStorage.getItem("isLoggedIn");
  //   if (!storedSession) {
  //     if (!isLoggedIn) {
  //       navigate("/login");
  //     }
  //   }
  //   window.localStorage.setItem("isLoggedIn", isLoggedIn);
  // }, [isLoggedIn, navigate]);

  // return <>testings</>;

  return (
    <Box>
      <HeroBanner />
      {bodyPart && (
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      )}

      {bodyPart && (
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      )}
    </Box>
  );
};

export default Home;
