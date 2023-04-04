import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import fetchDogs from "./functions/getDogsFromServer";

import "./css/App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";
import Profile from "./pages/profile";

function App() {
  console.log("APP");
  const [toggle, setToggle] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
      console.log("GetDogData");
    };
    getDogsData();
  }, [toggle]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home dogs={dogs} setDogs={setDogs} />}
        ></Route>
        <Route
          path="/create"
          element={
            <Create setDogs={setDogs} toggle={toggle} setToggle={setToggle} />
          }
        ></Route>
        <Route
          path="/edit/:name/:id"
          element={
            <Edit
              dogs={dogs}
              setDogs={setDogs}
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        ></Route>
        <Route
          path="/profile/:name/:id"
          element={
            <Profile
              dogs={dogs}
              setDogs={setDogs}
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
