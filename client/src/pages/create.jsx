import { Link, useParams, useNavigate } from "react-router-dom";

const Create = () => {
  return (
    <>
      <h1>Create</h1>
      <form>
        Name: <input type="text" />
        <br />
        Nickname: <input type="text" />
        <br />
        Age: <input type="number" />
        <br />
        Bio: <input type="text" />
        <br />
        Friends: <input type="text" />
        <br />
        <button type="submit">Save new dog</button>
      </form>
    </>
  );
};

export default Create;
