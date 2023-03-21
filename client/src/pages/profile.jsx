import { useParams, useNavigate } from "react-router-dom";
import "../css/picture.css";

const Profile = ({ dogs }) => {
  const navigate = useNavigate();

  const idParam = Number(useParams().id);
  const { id, name, picture, nickname, age, bio, friends, presence } =
    dogs.find((dog) => dog.id === idParam);
  return (
    <>
      <div>
        <h1>Profile</h1>
        <button onClick={() => navigate("/edit/" + name + "/" + id)}>
          Edit
        </button>
      </div>
      <h2>Name: {name}</h2>
      <img src={picture} alt="Picture missing" />
      <h4>Nickname: {nickname}</h4>
      <h4>Age: {age}</h4>
      <h4>Bio: {bio}</h4>
      <div>
        <h3>Friends:</h3>
        {friends.map(({ id, name }) => (
          <li key={id} onClick={() => navigate("/profile/" + name + "/" + id)}>
            {name}
          </li>
        ))}
      </div>
      <h3>Presence: {String(presence)}</h3>
    </>
  );
};

export default Profile;
