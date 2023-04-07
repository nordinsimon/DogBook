import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchDogs from "../functions/getDogsFromServer";

import FriendsToBeAdded from "../components/FriendsToAddCreatePage";
import addFriendsToNewDog from "../functions/newDogAddFriends";

const Create = () => {
  console.log("CREATE");

  const [dogs, setDogs] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(0);
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };

    getDogsData();
  }, []);

  const navigate = useNavigate();
  const submithandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickname = e.target.nickname.value;
    let picture;
    const age = e.target.age.value;
    const bio = e.target.bio.value;
    const friends = [];
    const presence = false;

    try {
      const resp = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await resp.json();
      picture = json.message;
      console.log(picture);
    } catch (error) {
      console.error(error);
    }

    try {
      await fetch("http://localhost:3001/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          nickname,
          picture,
          age,
          bio,
          friends,
          presence,
        }),
      });
    } catch (error) {
      console.error(error);
    }
    addFriendsToNewDog(friendList);
    navigate("/");
  };
  return (
    <>
      <h1>Create new dog</h1>
      <form onSubmit={submithandler}>
        <button type="submit">Save new dog</button>
        <br />
        <br />
        Name: <input id="name" type="text" />
        <br />
        Nickname: <input id="nickname" type="text" />
        <br />
        Age: <input id="age" type="number" />
        <br />
        Bio: <input id="bio" type="text" />
        <br />
      </form>
      <br />
      <FriendsToBeAdded
        dogs={dogs}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        friendList={friendList}
        setFriendList={setFriendList}
      />
      <br />
    </>
  );
};

export default Create;
