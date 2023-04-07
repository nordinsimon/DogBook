import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchDogs from "../functions/getDogsFromServer";
import deleteDog from "../functions/deleteDog";

const Home = () => {
  console.log("HOME");
  const [render, setRender] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };

    getDogsData();
  }, [render]);

  const navigate = useNavigate();

  if (dogs.length === 0) {
    return <h1>Dogbook</h1>;
  }

  const onClickHandler = async (e) => {
    e.preventDefault();
    console.log("onClickHandler");
    const id = Number(e.target.id);
    await deleteDog(id, dogs);
    setRender(!render);
  };

  return (
    <div>
      <h1>Dogbook</h1>
      <h2>Dogs:</h2>

      {dogs.map(({ id, name, picture, presence }) => (
        <div className="doglist" key={id}>
          <img
            className="doglist_img_homepage"
            onClick={() => {
              navigate("/profile/" + id);
            }}
            src={picture}
            alt="Bild Saknas "
          />
          <h4
            onClick={() => {
              navigate("/profile/" + id);
            }}
            className={"dogname_link_" + presence}
          >
            {name}
          </h4>

          <button
            className="deletebutton"
            key={id}
            id={id}
            onClick={onClickHandler}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
