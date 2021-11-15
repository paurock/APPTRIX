import axios from "axios";
import {useEffect, useState} from "react";
import {youTrackToken} from "../../api/tokens";
import BasicTable from "../../components/BasicTable";
import {useNavigate} from "react-router-dom";

const baseURL =
  "https://demo-apptrix.myjetbrains.com/youtrack/api/admin/users?fields=id,login,name,email";

const tokenConfig = {
  headers: {
    Authorization: "Bearer " + youTrackToken,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

const GetUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL, tokenConfig)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log("ERROR", err));
  }, []);

  return (
    <div>
      <BasicTable USERS={users} />
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default GetUsers;
