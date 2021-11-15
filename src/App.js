import "./App.css";
import Login from "./components/Login";
import {Routes, Route, useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import {useEffect} from "react";
import {loadUser} from "./state/actions/auth";
import GetUsers from "./state/actions/getUsers";
import UserDetails from "./components/UserDetails";

function App({store}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    loadUser(dispatch, navigate);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<GetUsers />} />
        <Route exact path="/" element={<PrivateRoute />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/users/:id/:name/:login/:email/:type"
          element={<UserDetails />}
        ></Route>
      </Routes>
    </div>
  );
}
const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(App);
