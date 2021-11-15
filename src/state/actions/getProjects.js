import axios from "axios";
import {useEffect, useState} from "react";
import {youTrackTokenProj} from "../../api/tokens";
import BasicTableProj from "../../components/BasicTableProj";
import {useNavigate} from "react-router-dom";

const baseURL =
  "https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)";

const tokenConfig = {
  headers: {
    Authorization: "Bearer " + youTrackTokenProj,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

const GetProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL, tokenConfig)
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => console.log("ERROR", err));
  }, []);

  return (
    <div>
      <BasicTableProj PROJECTS={projects} />
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default GetProjects;
