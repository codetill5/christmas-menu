import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <div className="logoContainer">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="menuSelectors">
        <h1>Our Delectable Menu</h1>
        <p>Indulge in a world of flavors with our extensive menu</p>
      </div>

      <ul>
        <li>
          <a
            href="https://www.canva.com/design/DAFwTqAAjO8/qOxDb_iUIe1b6RqivQlkjg/view?utm_content=DAFwTqAAjO8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            Early Bird Special
          </a>
        </li>
        <li>
          <a
            href="https://cheery-cocada-347371.netlify.app/menu/ala-carte"
            target="_blank"
          >
            Ala Carte
          </a>
        </li>
        <li>
          <a
            href="https://cheery-cocada-347371.netlify.app/menu/christmas"
            target="_blank"
          >
            Christmas Special
          </a>
        </li>
        <li>
          <a
            href="https://cheery-cocada-347371.netlify.app/menu/drinks"
            target="_blank"
          >
            Drinks
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
