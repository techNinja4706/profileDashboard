import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
    const navigate = useNavigate();

    const onNavigate = (route) => {
        navigate(route)
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.route_container}>
            <span className={styles.list_item} onClick={() => {onNavigate(`/profile/${props.id}`)}}>Profile</span>
            <span className={styles.list_item} onClick={() => {onNavigate("post")}}>Posts</span>
            <span className={styles.list_item} onClick={() => {onNavigate("gallery")}}>Gallery</span>
            <span className={styles.list_item} onClick={() => {onNavigate("todo")}}>ToDo</span>
            </div>
        </div>
    )
}

export default Sidebar;