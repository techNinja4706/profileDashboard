import { useParams } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  let path = "";
  const { onShowLogout } = props;
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.filter((user) => user.id === +id);
  console.log(window.location.pathname);

  if (window.location.pathname.includes("post")) {
    path = "post";
  } else if (window.location.pathname.includes("gallery")) {
    path = "gallery";
  } else if (window.location.pathname.includes("todo")) {
    path = "todo";
  } else {
    path = "profile";
  }

  return (
    <div className={styles.dashboard_header}>
      <h3 className={styles.dashboard_header_title}>{path}</h3>
      <section
        className={styles.dashboard_header_section}
        onClick={onShowLogout}
      >
        <span className={styles.profile_image_container}>
          <img
            src={user[0] !== null ? user[0].profilepicture : null}
            className={styles.profile_image}
          />
        </span>
        <span className={styles.user_name_container}>
          <p className={styles.user_name}>
            {user[0] !== null ? user[0].name : null}
          </p>
        </span>
      </section>
    </div>
  );
};

export default Header;
