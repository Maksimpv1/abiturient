import React from "react";
import styles from "./MainLayout.module.css"

const MainLoyout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutWrapper} >
      <div className={styles.ui_wrapper}>
        <div className={styles.headerContainer}>
          <p>типо хедер</p>
        </div>
      </div>
      
      <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
          {children}
        </div>
      </div>

      <div className={styles.ui_wrapper}>
        <div className={styles.footerContainer}>
          <p>типо футер</p>
        </div>
      </div>
    </div>
  );
};

export default MainLoyout;