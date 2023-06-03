// import {useState} from "react";
// import { Outlet } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
// import GoogleMap from "../../components/Map/Map";
// import ChatBox from "../../components/Chat/ChatBox";
// import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";

const Profile = () => {
  // const { state } = useLocation();
  // const [chatBoxHeight, setChatBoxHeight] = useState(false);

  // const user = state.selectedUser[0];
  // const users = state.allUsers;
  // console.log(users);

  return (
    <div className={styles.row}>
      jj
      <Sidebar />
      {/* <Outlet/> */}
    </div>
  );
};

export default Profile;
