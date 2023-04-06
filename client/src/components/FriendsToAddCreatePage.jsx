import { useState, useEffect } from "react";

const FriendsToBeAdded = ({
  dogs,
  selectedFriend,
  setSelectedFriend,
  friendList,
  setFriendList,
}) => {
  const [possibleFriends, setPossibleFriends] = useState([]);

  useEffect(() => {
    const friends = [];
    dogs.forEach((dog) => {
      friends.push({ id: dog.id, name: dog.name });
    });

    setPossibleFriends(friends);
  }, [dogs]);

  const removeDogFromPossibleFriends = (dogId) => {
    const possibleFriendsCopy = [...possibleFriends];
    console.log("possibleFriendsCopy", possibleFriendsCopy);
    possibleFriendsCopy.forEach((dog, index) => {
      if (dog.id === dogId) {
        possibleFriendsCopy.splice(index, 1);
      }
    });
    console.log("possibleFriendsCopy", possibleFriendsCopy);
    setPossibleFriends(possibleFriendsCopy);
    if (possibleFriendsCopy.length === 0) {
      setSelectedFriend(0);
      return;
    }
    setSelectedFriend(possibleFriendsCopy[0]);
  };
  const changeHandler = (e) => {
    setSelectedFriend({
      id: Number(e.target.value),
      name: dogs.find((dog) => dog.id === Number(e.target.value)).name,
    });
  };

  const addFriend = (e) => {
    console.log("selectedFriend", selectedFriend);
    if (selectedFriend === 0) return;
    setFriendList([...friendList, selectedFriend]);
    removeDogFromPossibleFriends(selectedFriend.id);
  };

  return (
    <>
      <select defaultValue={""} id="AddFriendDropDown" onChange={changeHandler}>
        <option key={0} value="" disabled hidden>
          Select a Friend
        </option>
        {possibleFriends.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <button
        onClick={(e) => {
          addFriend(e);
        }}
      >
        AddFriend
      </button>
      {friendList.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </>
  );
};
export default FriendsToBeAdded;
