import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import WishList from "./Pages/WishList/WhishList";
import Info from "./Pages/Info/Info";
import Login from "./Pages/Login/Login";
import Game from "./Pages/Game/Game";
import Registration from "./Pages/Registration/Registration";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";

axios.defaults.baseURL = "https://nintendo-shop.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}
