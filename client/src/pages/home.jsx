import { useNavigate } from "react-router-dom";
import "../css/picture.css";

const Home = ({ dogs }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dogbook</h1>
      <h2>Hundar</h2>
      <ul className="doglist">
        {dogs.map(({ id, name, picture }) => (
          <div key={id} onClick={() => navigate("/profile/" + name + "/" + id)}>
            <li>
              <img src={picture} alt="Bild Saknas" />
              {name}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
