import axios from "axios";
import {useEffect} from "react";
import {youTrackToken} from "../../api/tokens";
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
  useEffect(() => {
    axios
      .get(baseURL, tokenConfig)
      .then(res => {
        res.data.forEach(user => console.log(user));
        console.log(res);
      })
      .catch(err => console.log("ERRRROR", err));
  }, []);
  console.log("GET USERS");
  return <div>Hello</div>;
};

export default GetUsers;
