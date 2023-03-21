import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = ({ dogs }) => {
  const navigate = useNavigate();

  const idParam = Number(useParams().id);
  const { id, name, picture, nickname, age, bio, friends, presence } =
    dogs.find((dog) => dog.id === idParam);
  return (
    <>
      <div>
        <h1>Edit</h1>
        <button onClick={() => navigate("/profile/" + name + "/" + id)}>
          Save
        </button>
      </div>
      <h2>
        Name: <input type="text" defaultValue={name} />
      </h2>
      <img src={picture} alt="Picture missing" />
      <h4>
        Nickname: <input type="text" defaultValue={nickname} />
      </h4>
      <h4>
        Age: <input type="number" defaultValue={age} />
      </h4>
      <h4>
        Bio: <input type="text" defaultValue={bio} />
      </h4>
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

export default Edit;
