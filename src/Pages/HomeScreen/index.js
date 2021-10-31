import React from "react";
import styles from "./HomeScreen.module.css";
import Navbar from "../../components/navbar/Navbar";

export default function HomeScreen() {
  const data = [
    {
      text: "Dog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YVAKFc9LjJF9lDm1rb7DARZg-Qm1M10uQg&usqp=CAU",
    },
    {
      text: "Cat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YVAKFc9LjJF9lDm1rb7DARZg-Qm1M10uQg&usqp=CAU",
    },
    {
      text: "Dog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YVAKFc9LjJF9lDm1rb7DARZg-Qm1M10uQg&usqp=CAU",
    },
    {
      text: "Dog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YVAKFc9LjJF9lDm1rb7DARZg-Qm1M10uQg&usqp=CAU",
    },
    {
      text: "Dog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YVAKFc9LjJF9lDm1rb7DARZg-Qm1M10uQg&usqp=CAU",
    },
    {
      text: "Dog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YVAKFc9LjJF9lDm1rb7DARZg-Qm1M10uQg&usqp=CAU",
    },
  ];
  return (
    <div className={styles.container}>
      <Navbar firstcontent="Login"/>
      <div className={styles.top}>
        {data.map((item, i) => (
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
