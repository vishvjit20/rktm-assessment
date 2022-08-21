import Chat from "./Chat";
import React, { useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { useDispatch } from "react-redux";
import "./home.css";
import { getAllUsers } from "../redux/userAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="inner-home">
        <LeftSideBar />
        <Chat />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
