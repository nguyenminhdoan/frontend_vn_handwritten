import React from "react";
import Navbar from "./Navbar/Navbar";
import video from "../../video/writing.mp4";
import "./header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <nav class="nav">
        <div class="wrapper">
          <div class="nav__container">
            <div class="nav__left">Convert SIC</div>
            <div class="nav__center">
              <ul class="nav__list">
                <li class="nav__list--item">
                  <a href="" class="nav__list--link">
                    Home
                  </a>
                  <a href="" class="nav__list--link">
                    About
                  </a>
                  <a href="" class="nav__list--link">
                    Contact
                  </a>
                  <a href="" class="nav__list--link">
                    Faq
                  </a>
                  <a href="" class="nav__list--link">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div class="nav__right">
              <button class="btn">Login</button>
              <button class="btn">Register</button>
            </div>
          </div>
        </div>
      </nav>
      <div class="wrapper">
        <header class="header">
          <div class="header__heading">
            Let's us convert your images to text &hearts;
          </div>
          <div class="header__content">
            Lorem ipsum dolor sit amet consectetur
          </div>
          {/* <div class="header__search">
            <input type="text" placeholder="search..." />
            <button class="btn white">Search</button>
          </div> */}
        </header>
        <section class="presentaion">
          <div class="card">
            <div class="card__body">
              <div class="card__logo">
                <svg
                  width="24"
                  height="24"
                  fill="#262626"
                  ariaLabel="Find People"
                  class="_8-yf5"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill-rule="evenodd"
                    d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="card__header">Upload your image</div>
              <div class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ullam temporibus.
              </div>
            </div>
          </div>
          <div class="card title">
            <div class="card__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ullam temporibus.
            </div>
            <div class="card__body">
              <div class="card__logo">
                <svg
                  width="24"
                  height="24"
                  fill="#262626"
                  ariaLabel="Activity Feed"
                  class="_8-yf5"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill-rule="evenodd"
                    d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="card__header">Upload your image</div>
              <div class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ullam temporibus.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__body">
              <div class="card__logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 34.108 30.55"
                >
                  <g
                    data-name="Group 14924"
                    transform="translate(-200.233 -559.29)"
                  >
                    <ellipse
                      cx="6.552"
                      cy="7.332"
                      data-name="Ellipse 686"
                      rx="6.552"
                      ry="7.332"
                      transform="translate(205.215 559.29)"
                    ></ellipse>
                    <ellipse
                      cx="4.624"
                      cy="5.174"
                      data-name="Ellipse 687"
                      rx="4.624"
                      ry="5.174"
                      transform="translate(221.946 563.919)"
                    ></ellipse>
                    <path
                      d="M223.157 576.496c-2.673.081 3.1 2.629 1.725 9.979 0 0 7.077.711 8.781-2.317s.193-7.662-4.446-7.662c-4.827 0-3.387-.081-6.06 0z"
                      data-name="Path 29499"
                    ></path>
                    <path
                      d="M221.9 580.47c-.616-1.844-2.388-2.884-4.008-3.464a12.834 12.834 0 00-4.323-.7h-4.058a12.824 12.824 0 00-4.321.7c-1.62.58-3.394 1.62-4.01 3.464-1.228 3.69-2.648 9.556 5.582 9.366h9.556c8.227.189 6.809-5.677 5.582-9.366z"
                      data-name="Path 29500"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="card__header">Upload your image</div>
              <div class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ullam temporibus.
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Header;
