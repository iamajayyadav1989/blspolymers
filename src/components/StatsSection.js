import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { adminBaseUrl } from "../App";
import { CountUp } from "countup.js";

const StatsSection = () => {
  const [stats, setStats] = useState(null);

  const experienceRef = useRef(null);
  const clientsRef = useRef(null);
  const capacityRef = useRef(null);

  useEffect(() => {
    axios
      .get(adminBaseUrl + "/api/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error loading stats", err));
  }, []);

  useEffect(() => {
    if (!stats) return;

    const experienceCountUp = new CountUp(
      experienceRef.current,
      stats.yearsExperience,
      {
        useGrouping: true,
        duration: 5,
      }
    );
    const clientsCountUp = new CountUp(
      clientsRef.current,
      stats.clientsWorldwide,
      {
        useGrouping: true,
        duration: 5,
      }
    );
    const capacityCountUp = new CountUp(capacityRef.current, stats.capacity, {
      useGrouping: true,
      separator: ",",
      duration: 7,
    });

    if (!experienceCountUp.error) experienceCountUp.start();
    if (!clientsCountUp.error) clientsCountUp.start();
    if (!capacityCountUp.error) capacityCountUp.start();

    // Animate Icons
    const MIN_LENGTH = 100;

    function animateIcon(iconId, selector = ".cls-1") {
      const icon = document.getElementById(iconId);
      if (!icon) return;

      const paths = icon.querySelectorAll(selector);

      paths.forEach((path) => {
        const rawLength = path.getTotalLength?.() || 0;
        const length = Math.max(rawLength, MIN_LENGTH);
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });

      setTimeout(() => {
        paths.forEach((path) => path.classList.add("animate-stroke"));
      }, 50);

      icon.addEventListener("mouseenter", () => {
        paths.forEach((path) => {
          const rawLength = path.getTotalLength?.() || 0;
          const length = Math.max(rawLength, MIN_LENGTH);
          path.classList.remove("animate-stroke");
          path.style.strokeDashoffset = length;
        });
        setTimeout(() => {
          paths.forEach((path) => path.classList.add("animate-stroke"));
        }, 10);
      });
    }

    animateIcon("experienceIcon", ".draw-path");
    animateIcon("gearIcon", ".cls-1, .cls-2");
    animateIcon("clientIcon", ".cls-1");
  }, [stats]);

  if (!stats) return <div>Loading...</div>;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-box">
          {/* Experience Stat */}
          <div className="stat-item">
            <svg
              id="experienceIcon"
              viewBox="0 0 39.6 49.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="draw-path"
                d="M19.8,22c-.2,0-.4.1-.5.3l-1.3,2.6-2.9.4c-.3,0-.5.3-.5.6,0,.1,0,.2.2.3l2.1,2.1-.5,2.9c0,.3.1.6.4.6.1,0,.2,0,.3,0l2.6-1.4,2.6,1.4c.3.1.6,0,.7-.2,0-.1,0-.2,0-.3l-.5-2.9,2.1-2.1c.2-.2.2-.6,0-.8,0,0-.2-.1-.3-.2l-2.9-.4-1.3-2.6c0-.2-.3-.3-.5-.3Z"
              />
              <path
                className="draw-path"
                d="M9.3,25.2c-.2,0-.4.1-.5.3l-1.3,2.6-2.9.4c-.3,0-.5.3-.5.6,0,.1,0,.2.2.3l2.1,2.1-.5,2.9c0,.3.1.6.4.6.1,0,.2,0,.3,0l2.6-1.4,2.6,1.4c.3.1.6,0,.7-.2,0-.1,0-.2,0-.3l-.5-2.9,2.1-2.1c.2-.2.2-.6,0-.8,0,0-.2-.1-.3-.2l-2.9-.4-1.3-2.6c0-.2-.3-.3-.5-.3Z"
              />
              <path
                className="draw-path"
                d="M30.3,25.2c-.2,0-.4.1-.5.3l-1.3,2.6-2.9.4c-.3,0-.5.3-.5.6,0,.1,0,.2.2.3l2.1,2.1-.5,2.9c0,.3.1.6.4.6.1,0,.2,0,.3,0l2.6-1.4,2.6,1.4c.3.1.6,0,.7-.2,0-.1,0-.2,0-.3l-.5-2.9,2.1-2.1c.2-.2.2-.6,0-.8,0,0-.2-.1-.3-.2l-2.9-.4-1.3-2.6c0-.2-.3-.3-.5-.3Z"
              />
              <path className="draw-path" d="M12.3,25.6c0-3.8,9.2-11.1,15,0" />
              <circle className="draw-path" cx="19.8" cy="14.8" r="4.8" />
            </svg>
            <div className="stat-text">
              <h2>
                <span ref={experienceRef} className="counter" />+
              </h2>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Clients Stat */}
          <div className="stat-item">
            <div id="clientIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.9 21.2">
                <g id="Layer_1">
                  <path
                    className="cls-1"
                    d="M3.5,18.1s-.6-3,2.1-3.2c0,0,2.5-.1,2.1,3.2"
                  />
                  <path
                    className="cls-1"
                    d="M6.3,10.1s-.6-3,2.1-3.2c0,0,2.5-.1,2.1,3.2"
                  />
                  <path
                    className="cls-1"
                    d="M9.2,18.1s-.6-3,2.1-3.2c0,0,2.5-.1,2.1,3.2"
                  />
                  <circle className="cls-1" cx="5.6" cy="12.5" r="1.4" />
                  <circle className="cls-1" cx="11.3" cy="12.5" r="1.4" />
                  <circle className="cls-1" cx="8.5" cy="4.4" r="1.4" />
                </g>
              </svg>
            </div>
            <div className="stat-text">
              <h2>
                <span ref={clientsRef} className="counter" />+
              </h2>
              <p>CLIENTS WORLDWIDE</p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Production Facilities Stat */}
          <div className="stat-item">
            <svg
              id="gearIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 125"
            >
              <g>
                <path
                  className="cls-2"
                  d="M68.1,85.3h-5.3c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h10.8c1.3,0,2.3-1,2.3-2.3v-10.8c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v5.2l-10.9-10.9c1.5-2.1,2.3-4.7,2.3-7.4s-.9-5.3-2.3-7.4l10.9-10.9v5.1c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3v-10.8c0-1.3-1-2.3-2.3-2.3h-10.8c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h5.2l-10.9,10.9c-2.1-1.5-4.7-2.3-7.4-2.3s-5.3.9-7.4,2.3l-11-10.9h5.2c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3h-10.8c-1.3,0-2.3,1-2.3,2.3v10.8c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3v-5.2l10.9,10.9c-1.5,2.1-2.3,4.7-2.3,7.4s.9,5.3,2.3,7.4l-10.9,11v-5.2c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v10.8c0,1.3,1,2.3,2.3,2.3h10.8c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3h-5.2l10.9-10.9c2.1,1.5,4.7,2.3,7.4,2.3s5.3-.9,7.4-2.3l11.1,10.9ZM41.3,63.6c0-4.6,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4-3.8,8.4-8.4,8.4-8.4-3.7-8.4-8.4Z"
                />
                <circle className="cls-1" cx="49.7" cy="63.6" r="46.5" />
              </g>
            </svg>
            <div className="stat-text">
              <h2>
                <span ref={capacityRef} className="counter" />+
              </h2>
              <p>MT CAPACITY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
