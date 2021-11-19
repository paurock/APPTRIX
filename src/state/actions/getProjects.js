import axios from "axios";
import { useEffect, useState } from "react";
import { youTrackTokenProj } from "../../api/tokens";
import BasicTableProj from "../../components/BasicTableProj";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { ADD_PROJECTS } from "./types";

const tokenConfig = {
  headers: {
    Authorization: "Bearer " + youTrackTokenProj,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const GetProjects = ({ store }) => {
  const { searchNameQuery } = store;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const baseURL =
      "https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)";
    let baseURLSearch = `https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)&query=project:+%7B${searchNameQuery}%7D`;

    //detect if query length >= n letter
    const detectMinLengthQuery = (baseURL, baseURLSearch, query, n) => {
      if (query !== null) {
        if (query.length >= n) {
          return baseURLSearch;
        }
      } else {
        return baseURL;
      }
    };
    //Retrieve data from server only after 5 sec
    const getData = async () =>
      await axios
        .get(
          detectMinLengthQuery(baseURL, baseURLSearch, searchNameQuery, 3),
          tokenConfig
        )
        .then((res) => {
          setProjects(res.data);
          dispatch({
            type: ADD_PROJECTS,
            payload: res.data,
          });
        })
        .catch((err) => console.log("ERROR", err));

    const timer = setTimeout(() => getData(), 3000);

    return () => clearTimeout(timer);
  }, [searchNameQuery]);

  return (
    <div>
      <BasicTableProj PROJECTS={projects} />
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};
const mapStateToProps = (store) => ({
  store,
});
export default connect(mapStateToProps)(GetProjects);
