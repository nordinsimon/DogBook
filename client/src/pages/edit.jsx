import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FriendsList from "../components/FriendList";
import AddFriendComponent from "../components/addFriend";

import fetchDogs from "../functions/getDogsFromServer";
import editDog from "../functions/editDogOnServer";

const Edit = () => {
  console.log("EDIT");
  const [render, setRender] = useState(true);
  const [dogs, setDogs] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(0);

  useEffect(() => {
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };

    getDogsData();
  }, [render]);

  const navigate = useNavigate();
  const idParam = Number(useParams().id);

  if (dogs.length === 0) {
    return <h1>Edit</h1>;
  }
  const dog = dogs.find((dog) => dog.id === idParam);
  const { id, name, picture, nickname, age, bio, friends, presence } = dog;

  const submithandler = async (e) => {
    console.log("subnithandler");
    e.preventDefault();
    const name = e.target.name.value;
    const nickname = e.target.nickname.value;
    const age = e.target.age.value;
    const bio = e.target.bio.value;

    const newdog = { name, picture, nickname, age, bio, friends, presence };

    editDog(id, newdog);
    navigate("/profile/" + id);
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
      </form>
      <h3>AddFriend:</h3>
      <AddFriendComponent
        activeDog={dog}
        dogs={dogs}
        friends={friends}
        render={render}
        setRender={setRender}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <h3>Friends:</h3>
      <FriendsList
        dogs={dogs}
        friends={friends}
        dogId={id}
        render={render}
        setRender={setRender}
      />
    </>
  );
};

export default Edit;
