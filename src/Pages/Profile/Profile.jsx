import {useState} from "react";
import { useLocation } from "react-router-dom";
import styles from "./Profile.module.css";
import GoogleMap from "../../components/Map/Map";
import ChatBox from "../../components/Chat/ChatBox";
import Card from "../../components/Card/Card";

const Profile = () => {
  const { state } = useLocation();
  const [chatBoxHeight, setChatBoxHeight] = useState(false);
  
  const user = state.selectedUser[0];
  const users = state.allUsers;
  console.log(users);

  const [openDialogueBox, setOpenDialogueBox] = useState(false);

  const onShowLogout = () => {
    setOpenDialogueBox(!openDialogueBox)
  }

  return (
    <div className={styles.row}>
      <div className={styles.sidebar}>
        <div className={styles.route_container}>
          <span className={styles.list_item}>Profile</span>
          <span className={styles.list_item}>Posts</span>
          <span className={styles.list_item}>Gallery</span>
          <span className={styles.list_item}>ToDo</span>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_header}>
          <h3 className={styles.dashboard_header_title}>Profile</h3>
          <section className={styles.dashboard_header_section} onClick={onShowLogout}>
            <span className={styles.profile_image_container}>
              <img src={user.profilepicture} className={styles.profile_image} />
            </span>
            <span className={styles.user_name_container}>
              <p className={styles.user_name}>{user.name}</p>
            </span>
          </section>
        </div>
        <div className={styles.dashboard_main}>
          <div className={styles.user_profile}>
            <section className={styles.image_container}>
             <div className={styles.user_image_wrapper}>
             <img src={user.profilepicture} className={styles.user_image} />
             </div>
              <h3>{user.name}</h3>
            </section>
            <section className={styles.user_profile_desc}>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Username</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span>{user.username}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>e-mail</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user.email}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Phone</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user.phone}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Website</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user.website}</span>
                </div>
              </div>
            </section>
            <div className={styles.horizontal_line}></div>
            <section className={styles.user_address_desc}>
                <div className={styles.address_name}>Company</div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Name</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user.company.name}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>catchphrases</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user.company.catchPhrase}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Phone</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user.company.bs}</span>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.vertical_line}></div>
          <div className={styles.user_address_container}>
            <section className={styles.user_address}>
              <div className={styles.address_label}>Address</div>
              <div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>Street</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{user.address.street}</span>
                  </div>
                </div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>Suite</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{user.address.suite}</span>
                  </div>
                </div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>City</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{user.address.city}</span>
                  </div>
                </div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>ZipCode</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{user.address.zipcode}</span>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.map_container}>
              <div className={styles.map}>
                <GoogleMap
                  lat={user.address.geo.lat}
                  lng={user.address.geo.lng}
                />
              </div>
            </section>
            <section className={ chatBoxHeight ? `${styles.chat_container} ${styles.chat_container_bottom}` : styles.chat_container}>
              <ChatBox chatBoxHeight={chatBoxHeight} setChatBoxHeight={setChatBoxHeight}/>
            </section>
          </div>
        </div>
      </div>
      {openDialogueBox ? <Card user={user} users={users} /> : null}
    </div>
  );
};

export default Profile;
