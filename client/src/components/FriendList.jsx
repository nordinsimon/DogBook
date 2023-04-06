import { useLocation } from "react-router-dom";
import createFriendObject from "../functions/getFriendsName";
import removeFriend from "../functions/removeFriend";

const FriendsList = ({ dogs, friends, dogId, render, setRender }) => {
  const location = useLocation().pathname.substring(1, 5);

  console.log("Friendslist");
  const friendsName = createFriendObject(dogs, friends);
  if (location === "edit") {
    return friendsName.map(({ id, name }) => (
      <li key={id}>
        {name}
        <button
          onClick={async () => {
            await removeFriend(dogId, id);
            setRender(!render);
          }}
        >
          X
        </button>
      </li>
    ));
  }
  return friendsName.map(({ id, name }) => <li key={id}>{name}</li>);
};

export default FriendsList;
