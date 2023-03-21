import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";
import Profile from "./pages/profile";

import dogsMock from "./dogsMock";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home dogs={dogsMock} />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route
          path="/edit/:name/:id"
          element={<Edit dogs={dogsMock} />}
        ></Route>
        <Route
          path="/profile/:name/:id"
          element={<Profile dogs={dogsMock} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
