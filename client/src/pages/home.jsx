import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/picture.css";

import fetchDogs from "../functions/getDogsFromServer";

const Home = () => {
  console.log("HOME");
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };

    getDogsData();
  }, []);

  const navigate = useNavigate();

  if (dogs.length === 0) {
    return <h1>Dogbook</h1>;
  }

  return (
    <div>
      <h1>Dogbook</h1>
      <h2>Hundar</h2>
      <ul className="doglist">
        {dogs.map(({ id, name, picture }) => (
          <div
            key={id}
            onClick={() => {
              navigate("/profile/" + id);
            }}
          >
            <li>
              <img src={picture} alt="Bild Saknas " />
              {name}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
