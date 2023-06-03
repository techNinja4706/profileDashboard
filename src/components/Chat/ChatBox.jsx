import { useLocation } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { BsChatRight } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./ChatBox.module.css";

const ChatBox = (props) => {
  const { state } = useLocation();
  const users = state.allUsers;
  const addHeight = `${styles.chatbox}  ${styles.addHeight}`;
  const decreaseHeight = `${styles.header} ${styles.decrease_height}`;

  const onAddHeight = () => {
    props.setChatBoxHeight(!props.chatBoxHeight);
  };

  // const onDecreaseHeight = () => {
  //     setChatBoxHeight(false)
  // }
//   const renderUsers = () => {
//     const elements = users.map((user) => {
//       return (
//         <li key={user.id} className={styles.user_list}>
//           <div className={styles.user_list_container}>
//             <img src={user.profilepicture} className={styles.img} />
//             <p>{user.name}</p>
//           </div>
//           <span></span>
//         </li>
//       );
//     });
//     return elements;
//   };

  return (
    <div className={styles.chat}>
      <div className={props.chatBoxHeight ? addHeight : styles.chatbox}>
        <div className={props.chatBoxHeight ? decreaseHeight : styles.header}>
          <div className={styles.func}>
            {/* <span className={styles.item} onClick={onDecreaseHeight}>-</span> */}
            <span className={styles.icon}>
              <BsChatRight /> Chats{" "}
            </span>
            <span className={styles.item} onClick={onAddHeight}>
              <IoIosArrowUp />
            </span>
          </div>
        </div>
        <div className={styles.main_container}>
          {/* {renderUsers()} */}
          {props.chatBoxHeight ? (
            <div className={styles.inner_container}>
              {users.map((user) => {
                return (
                  <li className={styles.user_list} key={user.id}>
                    <div className={styles.users}>
                      <img src={user.profilepicture} />
                      <p>{user.name}</p>
                    </div>
                    <span className={styles.circle}>
                      <BsCircleFill color="green" />
                    </span>
                  </li>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
