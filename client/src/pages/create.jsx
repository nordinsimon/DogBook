import { Link, useParams, useNavigate } from "react-router-dom";

const friends = [
  {
    id: 1,
    name: "Rex",
  },
  {
    id: 2,
    name: "Buddy",
  },
];

const Create = ({ setDogs, toggle, setToggle }) => {
  console.log("EDIT");
  const navigate = useNavigate();
  const submithandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickname = e.target.nickname.value;
    let picture;
    const age = e.target.age.value;
    const bio = e.target.bio.value;
    //const friends = e.target.friends.value;
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

    setToggle(!toggle);
    navigate("/");
  };
  return (
    <>
      <h1>Create</h1>
      <form onSubmit={submithandler}>
        Name: <input id="name" type="text" />
        <br />
        Nickname: <input id="nickname" type="text" />
        <br />
        Age: <input id="age" type="number" />
        <br />
        Bio: <input id="bio" type="text" />
        <br />
        Friends: <input id="friends" type="text" />
        <br />
        <button type="submit">Save new dog</button>
      </form>
    </>
  );
};

export default Create;
