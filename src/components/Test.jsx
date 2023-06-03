import { useContext } from "react";
import { Users } from "../Context/UserList";
const Text = () => {
  const { users } = useContext(Users);
  console.log("users", users);
  return <div>hh</div>;
};

export default Text;
