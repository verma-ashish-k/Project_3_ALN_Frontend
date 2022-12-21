import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import { FirebaseContext } from "../providers/FirebaseProvider";
import Navbar from "./Navbar";

export const RestOfApp = () => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  return (
    <div className="App">
      Firebase app info:
      <br />
      <br />
      {JSON.stringify(fbContext.app)}
    </div>
  );

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
};
