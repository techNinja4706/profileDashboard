import styles from "./Template.module.css";
import Header from "../DashboardHeader/Header";

const Template = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default Template;
