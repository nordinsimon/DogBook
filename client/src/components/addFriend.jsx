import addFriend from "../functions/addFriend";
import friendsToMaybeAdd from "../functions/friendsToMaybeAdd";

const AddFriendComponent = ({
  activeDog,
  dogs,
  friends,
  render,
  setRender,
  selectedFriend,
  setSelectedFriend,
}) => {
  const maybeAdd = friendsToMaybeAdd(activeDog, dogs, friends);

  const changeHandler = (e) => {
    setSelectedFriend(Number(e.target.value));
  };

  const addToDB = async (e) => {
    if (selectedFriend === 0) return;
    await addFriend(dogs, activeDog.id, selectedFriend);
    setRender(!render);
  };

  return (
    <>
      <select defaultValue={""} id="AddFriendDropDown" onChange={changeHandler}>
        <option key={0} value="" disabled hidden>
          Select a Friend
        </option>
        {maybeAdd.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <button
        onClick={(e) => {
          addToDB(e);
          setSelectedFriend(0);
        }}
      >
        AddFriend
      </button>
    </>
  );
};

export default AddFriendComponent;
