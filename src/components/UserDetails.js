import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const {id, name, login, email, type} = useParams();

  return (
    <>
      <h2>User details {name}</h2>
      <hr />
      <ul>
        <li>
          ID - <b>{id}</b>
        </li>
        <li>
          LOGIN -<b> {login}</b>
        </li>
        <li>
          EMAIL - <b>{email}</b>
        </li>
        <li>
          TYPE -<b> {type}</b>
        </li>
      </ul>
      <button onClick={() => navigate("/users")}>Back</button>
    </>
  );
};

export default UserDetails;
