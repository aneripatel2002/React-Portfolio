import React from "react";
import { Link } from "react-router-dom";
import Portrait from "../../Assets/images/profile.jpg";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Aneri</h2>
        <p>Welcome to my Student Portfolio!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img src={Portrait} alt="self portrait" width="200" height="300" />
      </div>
    </section>
  );
}

export default Home;
