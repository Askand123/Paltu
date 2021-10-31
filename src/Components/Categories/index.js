import React from "react";
import { categories } from "../../Constants/DummyData";
import styles from "./Categories.module.css";
import Navbar from "..//navbar/Navbar";

export default function index() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.top}>
        {categories.map((item, i) => (
          <div key={i} className={styles.avatar}>
            <div className={styles.avatarIcon}>
              <img src={item.image} alt="img" className={styles.image} />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
