import React from "react";

import PlaceHolderOne from "../../assets/images/placeholder_1.jpg";
import PlaceHolderTwo from "../../assets/images/placeholder_2.jpg";
import PlaceHolderThree from "../../assets/images/placeholder_3.jpg";
import PlaceHolderFour from "../../assets/images/placeholder_4.jpg";
import PlaceHolderFive from "../../assets/images/placeholder_5.jpg";
import PlaceHolderSix from "../../assets/images/placeholder_6.jpg";

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderFour}
              alt="PlaceHolderFour"
              class="card-img-top"
            />
            <div class="card-body">
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderFive}
              alt="Make A'Point"
              class="card-img-top"
            />
            <div class="card-body">
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderSix}
              alt="Final Project"
              class="card-img-top"
            />
            <div class="card-body">
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={PlaceHolderOne} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={PlaceHolderTwo} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/aneripatel2002"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
