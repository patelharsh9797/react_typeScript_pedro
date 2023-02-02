import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import store, { login, logout } from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";

const ReduxToolkit = () => {
  return (
    <Provider store={store}>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/login" className="btn">
        LOGIN
      </Link>
      <Link to="/contact" className="btn">
        contact
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
};

const Home = () => {
  const username = useSelector((state: any) => state.user.username);

  return <h1>Home Page {username}</h1>;
};

const Contact = () => {
  return <h1>Contact Page</h1>;
};

const Login = () => {
  const username = useSelector((state: any) => state.user.username);
  const [newUserName, setNewUserName] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <>
      <h1>Login Page</h1>
      <h1>{username}</h1>
      <input
        type="text"
        name="userName"
        placeholder="userName"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewUserName(e.target.value)
        }
      />
      <button onClick={() => dispatch(login(newUserName))}>LOGIN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </>
  );
};

export default ReduxToolkit;
