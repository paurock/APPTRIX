import React from "react";
import {useNavigate} from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  navigate("/users");
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        doloremque ipsa soluta error ad obcaecati sunt, magni molestiae eveniet,
        placeat fugiat, vero minima perspiciatis reiciendis! Nisi iusto possimus
        blanditiis fuga.
        <div>
          <button onClick={() => navigate("/users")}>See Users</button>
        </div>
        <div>
          <button onClick={() => navigate("/projects")}>See Projects</button>
        </div>
      </p>
    </div>
  );
}
