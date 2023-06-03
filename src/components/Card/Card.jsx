import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
    const {user, users} = props;
    const navigate = useNavigate();

    const onNavigate = () => {
      navigate("/");
    }
    return (
        <div className={styles.card}>
            {/* <div>Card</div> */}
            <div className={styles.card_image_container}>
                <img src={user.profilepicture} className={styles.card_image}/>
            </div>
            <div className={styles.card_profile_details}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
            <div className={styles.card_list_container}>
              <div className={styles.card_list_subcontainer}>
              {users.map((user) => {
                return (
                  <li key={user.id} className={styles.card_list}>
                    <img src={user.profilepicture} />
                    <p>{user.name}</p>
                  </li>
                ) 
              })}
              </div>
              <div className={styles.btn_container}>
                <button className={styles.signout} onClick={onNavigate}>Sign out</button>
              </div>
            </div>
        </div>
    )
  }

  export default Card;