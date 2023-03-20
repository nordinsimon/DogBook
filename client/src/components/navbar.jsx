import { Link, useParams, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/create"}>
        <button>Create</button>
      </Link>
      <Link to={"/edit"}>
        <button>Edit</button>
      </Link>
      <Link to={"/profile"}>
        <button>Profile</button>
      </Link>
    </header>
  );
};
export default Navbar;
