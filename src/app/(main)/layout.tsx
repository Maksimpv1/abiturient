import React from "react";
import styles from "./MainLayout.module.css";
import Header from "./_components/Header/Header";
import MainFooter from "./_components/MainFooter/MainFooter";

const MainLoyout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.ui_wrapper}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
      </div>

      <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>{children}</div>
      </div>

      <div className={styles.ui_wrapper}>
        <div className={styles.footerContainer}>
          <MainFooter />
        </div>
      </div>
    </div>
  );
};

export default MainLoyout;
