import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Users = createContext(null);

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    console.log("fetching...");
    const response = await axios.get("https://panorbit.in/api/users.json");
    setUsers(response.data.users);
    localStorage.setItem("users", JSON.stringify(response.data.users));
  };

  useEffect(() => {
    const userList = localStorage.getItem("users");
    if (userList) {
      setUsers(JSON.parse(userList));
    } else {
      fetchUsers();
    }
  }, []);

  return <Users.Provider value={{ users }}>{props.children}</Users.Provider>;
};
export default UserList;
