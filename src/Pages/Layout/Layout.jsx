import {useParams} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Layout.module.css";
// import UserList from "../../Context/UserList"

const Layout = () => {
    const {id} = useParams();
    // console.log("params id", id)
    // const users = JSON.parse(localStorage.getItem("users"));
    // const user = users.filter((user) => user.id === +id)
    // console.log("user", user);  
    return (
        
            <div className={styles.row}>
                <Sidebar id={id}/>
                <Outlet />
            </div>
        
    )
}

export default Layout;