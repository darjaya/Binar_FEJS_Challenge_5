import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import HomeMenu from "./Components/Home/HomeMenu";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import HomePage from "./Components/Home/HomePage";
import PopularMovie from "./Components/Categories/Populars";
import Details from "./Components/Categories/Details";
import TrendingMovie from "./Components/Categories/Trendings";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomeMenu />} />
        <Route path="/i" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/movie/trending" element={<TrendingMovie />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
