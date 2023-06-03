import { useState } from "react";
import styles from "./Dashboard.module.css";
import Card from "../Card/Card";
import ChatBox from "../Chat/ChatBox";
import GoogleMap from "../Map/Map";
import { useParams } from "react-router-dom";
import Header from "../DashboardHeader/Header";


const Dashboard = () => {
    const {id} = useParams();
    console.log("params id", id)
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.filter((user) => user.id === +id)
    console.log("user", user);  

    
  const [openDialogueBox, setOpenDialogueBox] = useState(false);
  const [chatBoxHeight, setChatBoxHeight] = useState(false);

  const onShowLogout = () => {
    setOpenDialogueBox(!openDialogueBox)
  }

    return (
        <>
        <div className={styles.dashboard}>
        <Header onShowLogout={onShowLogout} />
        <div className={styles.dashboard_main}>
          <div className={styles.user_profile}>
            <section className={styles.image_container}>
             <div className={styles.user_image_wrapper}>
             <img src={user[0] !== null ? user[0].profilepicture : null} className={styles.user_image} />
             </div>
              <h3>{user[0] !== null ? user[0].name : null}</h3>
            </section>
            <section className={styles.user_profile_desc}>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Username</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span>{user[0] !== null ? user[0].username : null}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>e-mail</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user[0] !== null ? user[0].email : null}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Phone</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user[0] !== null ? user[0].phone : null}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Website</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user[0] !== null ? user[0].website : null}</span>
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
                  <span className={styles.user_values}>{user[0] !== null ? user[0].company.name : null}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>catchphrases</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{ user[0] !== null ? user[0].company.catchPhrase : null}</span>
                </div>
              </div>
              <div className={styles.controls}>
                <div className={styles.control_labels}>
                  <span>Phone</span>
                </div>
                <div>:</div>
                <div className={styles.control_value}>
                  <span className={styles.user_values}>{user[0] !== null ? user[0].company.bs : null}</span>
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
                    <span className={styles.value}>{user[0] !== null ? user[0].address.street : null}</span>
                  </div>
                </div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>Suite</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{user[0] !== null ? user[0].address.suite : null}</span>
                  </div>
                </div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>City</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{ user[0] !== null ? user[0].address.city : null}</span>
                  </div>
                </div>
                <div className={styles.controls}>
                  <div className={styles.control_label}>
                    <span className={styles.label}>ZipCode</span>
                  </div>
                  <div>:</div>
                  <div className={styles.control_value}>
                    <span className={styles.value}>{user[0] !== null ? user[0].address.zipcode : null}</span>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.map_container}>
              <div className={styles.map}>
                <GoogleMap
                  lat={ user[0] !== null ? user[0].address.geo.lat : null}
                  lng={ user[0] !== null ? user[0].address.geo.lng : null}
                />
              </div>
            </section>
            <section className={ chatBoxHeight ? `${styles.chat_container} ${styles.chat_container_bottom}` : styles.chat_container}>
              <ChatBox chatBoxHeight={chatBoxHeight} setChatBoxHeight={setChatBoxHeight}/>
            </section>
          </div>
        </div>
      </div>
      {openDialogueBox ? <Card user={user[0]} users={users} /> : null}
        </>
    )
}

export default Dashboard;