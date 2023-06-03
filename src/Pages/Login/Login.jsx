import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const onNavigate = (id) => {
    const user = users.filter((user) => user.id === id);

    navigate("/profile-dashboard", {
      state: {
        selectedUser: user,
        allUsers: users,
      },
    });
  };

  const fetchUsers = async () => {
    const response = await axios.get("https://panorbit.in/api/users.json");
    console.log("response", response.data.users);
    setUsers(response.data.users);
  };

  const renderUserName = () => {
    const elements = users.map((user) => {
      return (
        <li
          className={styles.list}
          key={user.id}
          onClick={() => {
            onNavigate(user.id);
          }}
        >
          <img
            src={user.profilepicture}
            className={styles.user_profile_picture}
          />
          <p className={styles.user_name}>{user.name}</p>
        </li>
      );
    });
    console.log(elements);
    return elements;
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.login}>
      <section className={styles.login_header}>
        <p>Select an account</p>
      </section>
      <section className={styles.container}>
        <section className={styles.users_list_container}>
          {renderUserName()}
        </section>
      </section>
    </div>
    </div>
  );
};

export default Login;
