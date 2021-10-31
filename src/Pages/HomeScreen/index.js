import React from "react";
import Navbar from "../../Components/Navbar";
import SlidingPoster from "../../Components/SlidingPoster/SlidingPoster";
import styles from "./HomeScreen.module.css";

export default function HomeScreen() {
  const data = [
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
      <Navbar />
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
      <SlidingPoster />
    </div>
  );
}
