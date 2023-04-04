import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = ({ dogs, setDogs, toggle, setToggle }) => {
  console.log("EDIT");
  const navigate = useNavigate();

  const idParam = Number(useParams().id);
  const { id, name, picture, nickname, age, bio, friends, presence } =
    dogs.find((dog) => dog.id === idParam);
  const idToFetch = id;
  const submithandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickname = e.target.nickname.value;
    const age = e.target.age.value;
    const bio = e.target.bio.value;

    const newdog = { name, picture, nickname, age, bio, friends, presence };
    try {
      await fetch(`http://localhost:3001/dogs/${idToFetch}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdog),
      });
    } catch (error) {
      console.error(error);
    }
    setToggle(!toggle);
    navigate("/profile/" + name + "/" + id);
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <div>
          <h1>Edit</h1>
          <button type="submit">Save</button>
        </div>
        <h2>
          Name: <input id="name" type="text" defaultValue={name} />
        </h2>
        <img src={picture} alt="Picture missing" />
        <h4>
          Nickname: <input id="nickname" type="text" defaultValue={nickname} />
        </h4>
        <h4>
          Age: <input id="age" type="number" defaultValue={age} />
        </h4>
        <h4>
          Bio: <input id="bio" type="text" defaultValue={bio} />
        </h4>
        <div>
          <h3>Friends:</h3>
          {friends.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => navigate("/profile/" + name + "/" + id)}
            >
              {name}
            </li>
          ))}
        </div>
        <h3>Presence: {String(presence)}</h3>
      </form>
    </>
  );
};

export default Edit;
